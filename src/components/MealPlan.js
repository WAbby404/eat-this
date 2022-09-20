import React from 'react';
import '../styles/MealPlan.scss';
import { Link } from 'react-router-dom';

function MealPlan(props) {
    const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];


    return (
        <div className="weekday__wrapper">
            <h1 className="mealPlan__title">Your Meal Plan</h1>
            {/* {console.log(props.mealPlan)} */}

            {props.mealPlan.map((weekday, index) => {
                return(
                    <div className={`weekday ${index % 2 === 0 ? 'weekday--color': ''}`}>
                        <h2>{weekdays[index]}</h2>
                        <div className="weekday__meals">
                            <div className="weekday__meal">
                                <h4>Breakfast</h4>
                                <p> - </p>
                                {weekday[0] ? 
                                    <>
                                        <img src={weekday[0][1]} alt={weekday[0][3]} className="weekday__img"/>
                                        <div>
                                            <h3>{weekday[0][3]}</h3>
                                            <div className="meal__details">
                                                <h5>{weekday[0][4] === 0 ? '20 min' : `${weekday[0][4]} min`} | {parseInt(weekday[0][0])} Cal | Yields {weekday[0][5]}</h5>
                                                <a href={weekday[0][6]} target="_blank" rel="noopener noreferrer">Link to Original Recipie</a>
                                            </div>
                                        </div>
                                    </>
                                : 
                                    <Link className="weekday__link" to="/search">Add Meal in Search Recipies</Link>
                                }
                            </div>
                            <div className="weekday__meal">
                                <h4>Lunch</h4>
                                <p> - </p>
                                    {weekday[1] ? 
                                    <>
                                        <img src={weekday[1][1]} alt={weekday[1][3]} className="weekday__img"/>
                                        <div>
                                            <h3>{weekday[1][3]}</h3>
                                            <div className="meal__details">
                                                <h5>{weekday[1][4] === 0 ? '20 min' : `${weekday[1][4]} min`} | {parseInt(weekday[1][0])} Cal | Yields {weekday[1][5]}</h5>
                                                <a href={weekday[1][6]} target="_blank" rel="noopener noreferrer">Link to Original Recipie</a>
                                            </div>
                                        </div>
                                    </>
                                    : 
                                        <Link className="weekday__link" to="/search">Add Meal in Search Recipies</Link>
                                    }
                            </div>
                            <div className="weekday__meal">
                                <h4>Dinner</h4>
                                <p> - </p>
                                    {weekday[2] ? 
                                    <>
                                        <img src={weekday[2][1]} alt={weekday[2][3]} className="weekday__img"/>
                                        <div>
                                            <h3>{weekday[2][3]}</h3>
                                            <div className="meal__details">
                                                <h5>{weekday[2][4] === 0 ? '20 min' : `${weekday[2][4]} min`} | {parseInt(weekday[2][0])} Cal | Yields {weekday[2][5]}</h5>
                                                <a href={weekday[2][6]} target="_blank" rel="noopener noreferrer">Link to Original Recipie</a>
                                            </div>
                                        </div>
                                    </>
                                : 
                                    <Link className="weekday__link" to="/search">Add Meal in Search Recipies</Link>
                                }
                            </div>
                        </div>

                    </div>
                )
            })}
        </div>
    );
}

export default MealPlan;