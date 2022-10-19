import React from 'react';
import '../styles/MealPlan.scss';
import { Link } from 'react-router-dom';

function MealPlan(props) {
    const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    const mealTimes = ['Breakfast', 'Lunch', 'Dinner'];


    return (
        <div className="weekday__wrapper">
            <h1 className="mealplan__title">Your Meal Plan</h1>

            {props.mealPlan.map((weekday, index) => {
                return(
                    <div className={`weekday ${index % 2 === 0 ? 'weekday--color': ''}`}>
                        <h2>{weekdays[index]}</h2>
                        <div className="weekday__meals">
                            {mealTimes.map((meal, mealNum) => {
                                return(
                                    <div className="weekday__meal">
                                        <h4>{meal}</h4>
                                        <p> - </p>
                                        {weekday[mealNum] ? 
                                            <>
                                                <img src={weekday[mealNum][1]} alt={weekday[mealNum][3]} className="weekday__img"/>
                                                <div>
                                                    <h3>{weekday[mealNum][3]}</h3>
                                                    <div className="meal__details">
                                                        <h5>{weekday[mealNum][4] === 0 ? '20 min' : `${weekday[mealNum][4]} min`} | {parseInt(weekday[mealNum][0])} Cal | Yields {weekday[mealNum][5]}</h5>
                                                        <a href={weekday[mealNum][6]} target="_blank" rel="noopener noreferrer">Link to Original Recipe</a>
                                                    </div>
                                                </div>
                                            </>
                                    : 
                                        <Link className="weekday__link" to="/search">Add Meal in Search Recipes</Link>
                                    }
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )})}
        </div>
    );
}

export default MealPlan;