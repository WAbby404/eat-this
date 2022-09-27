import React, { useState, useEffect } from 'react';
import OverlayMealPlan from './OverlayMealPlan';
import '../styles/Recipe.scss';

const Recipe = (props) => {
    const [overlayCard, setOverlayCard] = useState(false);
    const [showMealPlan, setShowMealPlan] = useState(false);
    const [showCheck, setShowCheck] = useState(false);
    const [added, setAdded] = useState(false);
    // const [showIngredients, setShowIngredients] = useState(true);

    useEffect(() => {
        if(overlayCard === true){
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'visible';
        }
        
        if(showCheck === true){
            const interval = setInterval(() => {
                setShowCheck(false);
            }, 5000);
            return () => clearInterval(interval);
        }
    }, [showCheck, overlayCard]);

    const transferMeal = (meal, weekDay, mealTime) => {
        props.transferMeal(meal, weekDay, mealTime);
    }

    const transferIngredients = (ingredients) => {
        setAdded(true);
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
            <div className="overlay App" >
                <div className="overlay__card">
                    <i className="fa-solid fa-square-xmark fa-2x overlay__x" onClick={() => setOverlayCard(!overlayCard)}></i>
                    <div className="overlay__img">
                        <img src={props.data.recipe.image} alt={props.data.recipe.label}/>
                    </div>

                    <div className="overlay__text">
                        <div clasName="overlay__title__container">
                            <h1 className="overlay__title">{props.data.recipe.label}</h1>
                        </div>
                        <div className="recipe__info">{props.data.recipe.totalTime === 0 ? '20 min' : `${props.data.recipe.totalTime} min`} | {parseInt(props.data.recipe.calories)} Cal | Yields {props.data.recipe.yield}</div>
                        <div className="ingredients__title__check">
                            <h2 className="ingredients__title">Ingredients</h2>
                            {/* <button className="ingredients__check" onClick={() => (setShowIngredients(!showIngredients))}>{showIngredients ? 'Hide' : 'Show'}</button> */}     
                        </div>
                        <div className="ingredients__list">
                        {/* <div className={`ingredients__list ${showIngredients ? '': 'hide-ingredients'}`}> */}
                            {props.data.recipe.ingredientLines.map((ingredient, index) => {
                                return (
                                    <p key={index} className="ingredients">{ingredient}</p>
                                )
                            })}
                        </div>
                        <div className="btn-row">
                            <button className={`overlay__buttons ${showMealPlan ? `darkbtn` : ``}`} onClick={() => setShowMealPlan(!showMealPlan)}>{ showMealPlan ? 'Close Meal Plan' : 'Add to meal plan'}</button>
                            <button className={`overlay__buttons added ${added ? 'darkbtn' : ''}`} onClick={() => transferIngredients(props.data.recipe.ingredientLines)}>{added ? 'Added' : 'Add to shopping list'}</button>
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