import React, { useState, useEffect } from 'react';
import '../styles/OverlayMealPlan.scss';

function OverlayMealPlan(props) {
    const [dayNum, setDayNum] = useState(null);
    const [day, setDay] = useState('');
    const [mealPlan, setMealPlan] = useState(props.mealPlan);
    const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    const [value, setValue] = useState(0);
    const [selected, setSelected] = useState()


    useEffect(( ) => {
        if (props.resetDay === false ) {
            setDay('');
        }
    }, [props.resetDay])

    const fixWeekday = (dayNum) => {
        setDayNum(dayNum);
        setDay(weekdays[dayNum]);

        setSelected(dayNum);
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
                    <button className={`meal__btn ${selected === 0 ? 'darkbtn' : ''}`} onClick={() => fixWeekday(0)}>M</button>
                    <button className={`meal__btn ${selected === 1 ? 'darkbtn' : ''}`} onClick={() => fixWeekday(1)}>T</button>
                    <button className={`meal__btn ${selected === 2 ? 'darkbtn' : ''}`} onClick={() => fixWeekday(2)}>W</button>
                    <button className={`meal__btn ${selected === 3 ? 'darkbtn' : ''}`} onClick={() => fixWeekday(3)}>Th</button>
                    <button className={`meal__btn ${selected === 4 ? 'darkbtn' : ''}`} onClick={() => fixWeekday(4)}>F</button>
                </div>
            </div>
            { day &&
            <div className="overlay__mealtime">
                <h1>Pick <span>{day}'s</span> meal time</h1>
                <div className="overlay__mealtime__btns">
                    <div className="btns__show__food">
                        <h2>Breakfast - </h2>
                        <button className="overlay__mealtime__btn"
                            onClick={() => transferMeal(props.recipe, dayNum, 0)}>
                            <div className="overlay__btn__text">{mealPlan[dayNum][0][3] ?? "Add to Breakfast"}</div>
                        </button>
                    </div>
                    <div className="btns__show__food">
                        <h2>Lunch - </h2>
                        <button className="overlay__mealtime__btn" 
                            onClick={() => transferMeal(props.recipe, dayNum, 1)}>
                            <div className="overlay__btn__text">{mealPlan[dayNum][1][3] ?? "Add to Lunch"}</div>
                        </button>
                    </div>
                    <div className="btns__show__food">
                        <h2>Dinner - </h2>
                        <button className="overlay__mealtime__btn" 
                            onClick={() => transferMeal(props.recipe, dayNum, 2)}>
                            <div className="overlay__btn__text">{mealPlan[dayNum][2][3] ?? "Add to Dinner"}</div>
                        </button>
                    </div>
                    </div>
                </div>
            }

        </div>
    );
}

export default OverlayMealPlan;