import './styles/Main.scss';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Search from './components/Search';
import List from './components/List';
import MealPlan from './components/MealPlan';
import Footer from './components/Footer';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [mealPlan, setMealPlan] = useState([['', '', ''], ['', '', ''], ['', '', ''], ['', '', ''], ['', '', '']]);
  const [ingredientList, setIngredientList] = useState([]);

  const transferMeal = (meal, weekDay, mealTime) => {
    const mealToArray = [meal.calories, meal.image, meal.ingredientLines, meal.label, meal.totalTime, meal.yield, meal.url];
    const meals = mealPlan;
    meals[weekDay][mealTime] = mealToArray;
    setMealPlan(meals);
  }

  const transferIngredients = (ingredients) => {
    const list = ingredientList;
    ingredients.forEach((ingredient) => {
      list.push(ingredient)
    })
    setIngredientList(list);
  }

  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/search" element={<Search transferMeal={transferMeal} transferIngredients={transferIngredients} mealPlan={mealPlan}/>}></Route>
          <Route path="/mealplan" element={<MealPlan mealPlan={mealPlan} />}></Route>
          <Route path="/list" element={<List ingredients={ingredientList} transferIngredients={transferIngredients}/>}></Route>
        </Routes>
        <Footer/>
      </div>
    </Router>

  );
}

export default App;
