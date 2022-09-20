import React, { useState } from 'react';
import { useEffect } from 'react';
import '../styles/OverlayMealPlan.scss';

function OverlayMealPlan(props) {
    const [dayNum, setDayNum] = useState(null);
    const [day, setDay] = useState('');
    const [mealPlan, setMealPlan] = useState(props.mealPlan);
    const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    const [value, setValue] = useState(0);


    useEffect(( ) => {
        if (props.resetDay === false ) {
            setDay('');
        }
    }, [props.resetDay])

    const fixWeekday = (dayNum) => {
        setDayNum(dayNum);
        setDay(weekdays[dayNum]);
    };

    const transferMeal = (meal, weekDay, mealTime) => {
        const newMeals = mealPlan;
        newMeals[weekDay][mealTime] = meal;
        // is it cause useState is actually updating mealPlan so its not actually changing?
        setMealPlan(newMeals);
        // this is where i get react to force update the button
        setValue(value + 1);
        setDayNum(weekDay);
        props.transferMeal(meal, weekDay, mealTime);

    };


    return (
       
        <div className="overlay__wrapper">
            <div className="overlay__weekdays">
                <h1 className="overlay__weekdays__title">Select a Day</h1>
                <div className="overlay__weekday__btns">
                    <button className={`meal__btn ${value === 0 ? 'highlighted' : ''}`} onClick={() => fixWeekday(0)}>M</button>
                    <button className={`meal__btn ${day === 1 ? 'meal__btn--clicked' : ''}`} onClick={() => fixWeekday(1)}>T</button>
                    <button className={`meal__btn ${day === 2 ? 'meal__btn--clicked' : ''}`} onClick={() => fixWeekday(2)}>W</button>
                    <button className={`meal__btn ${day === 3 ? 'meal__btn--clicked' : ''}`} onClick={() => fixWeekday(3)}>Th</button>
                    <button className={`meal__btn ${day === 4 ? 'meal__btn--clicked' : ''}`} onClick={() => fixWeekday(4)}>F</button>
                </div>
            </div>
            { day &&
            <div className="overlay__mealtime">
                <h1>Pick <span>{day}'s</span> meal time</h1>
                <div className="overlay__mealtime__btns">
                    <h2>Breakfast -
                        <button 
                        className={`overlay__mealtime__btn `} 
                        onClick={() => transferMeal(props.recipe, dayNum, 0)}>
                        {mealPlan[dayNum][0][3] ?? "Add to Breakfast"}
                        </button>
                    </h2>
                    <h2>Lunch -
                        <button className="overlay__mealtime__btn" onClick={() => transferMeal(props.recipe, dayNum, 1)}>{mealPlan[dayNum][1][3] ?? "Add to Lunch"}</button>
                    </h2>
                    <h2>Dinner -
                            <button className="overlay__mealtime__btn" onClick={() => transferMeal(props.recipe, dayNum, 2)}>{mealPlan[dayNum][2][3] ?? "Add to Dinner"}</button>
                    </h2>
                    </div>
                </div>
            }

        </div>
    );
}

export default OverlayMealPlan;