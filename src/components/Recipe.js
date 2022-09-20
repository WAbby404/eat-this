import React, { useState, useEffect } from 'react';
import OverlayMealPlan from './OverlayMealPlan';
import '../styles/Recipe.scss';

const Recipe = (props) => {
    const [overlayCard, setOverlayCard] = useState(false);
    const [showMealPlan, setShowMealPlan] = useState(false);
    const [showCheck, setShowCheck] = useState(false);

    useEffect(() => {

        if(showCheck === true){
            const interval = setInterval(() => {
                setShowCheck(false);
            }, 5000);
            return () => clearInterval(interval);
        }
    }, [showCheck]);

    const transferMeal = (meal, weekDay, mealTime) => {
        props.transferMeal(meal, weekDay, mealTime);
    }

    const transferIngredients = (ingredients) => {
        setShowCheck(true);
        props.transferIngredients(ingredients);
    }


    return(
        <>
            <div className="recipe-card" onClick={() => setOverlayCard(!overlayCard) }>
                <div className="recipe__text">
                    <h2>{props.data.recipe.label}</h2>
                    <h3 className="recipe__info">{props.data.recipe.totalTime === 0 ? '20 min' : `${props.data.recipe.totalTime} min`} | {parseInt(props.data.recipe.calories)} Cal | Yields {props.data.recipe.yield}</h3>
                </div>
                <img src={props.data.recipe.image} alt={props.data.recipe.label}/>
            </div>
            { overlayCard && 
            <div className="overlay" >
                <div className="overlay__card">
                    <i className="fa-solid fa-square-xmark fa-2x overlay__x" onClick={() => setOverlayCard(!overlayCard)}></i>
                    <div className="overlay__img">
                        <img src={props.data.recipe.image} alt={props.data.recipe.label}/>
                    </div>

                    <div className="overlay__text">
                        <h1 className="overlay__title">{props.data.recipe.label}</h1>
                        <div className="recipe__info">{props.data.recipe.totalTime === 0 ? '20 min' : `${props.data.recipe.totalTime} min`} | {parseInt(props.data.recipe.calories)} Cal | Yields {props.data.recipe.yield}</div>
                        <h2 className="ingredients__title">Ingredients</h2>
                        {props.data.recipe.ingredientLines.map((ingredient, index) => {
                            return (
                                <p key={index} className="ingredients">{ingredient}</p>
                            )
                        })}
                        <div>
                            <button className="overlay__buttons" onClick={() => setShowMealPlan(!showMealPlan)}>{ showMealPlan ? 'Close Meal Plan' : 'Add to meal plan'}</button>
                            <button className="overlay__buttons" onClick={() => transferIngredients(props.data.recipe.ingredientLines)}>Add to shopping List</button>
                            <i className={showCheck ? `fa-solid fa-check fa-2x` : `fa-solid fa-check fa-2x check-disappear`}></i>
                        </div>
                    </div>
                </div>
                
                <div className={showMealPlan ? "meal-plan" : "meal-plan dont-display"}>
                    <OverlayMealPlan recipe={props.data.recipe} 
                                        transferMeal={transferMeal}
                                        mealPlan={props.mealPlan}
                                        resetDay={showMealPlan}
                                        />
                </div>
            </div>}
        </>

    )
}

export default Recipe;