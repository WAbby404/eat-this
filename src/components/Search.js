import React, { useEffect, useState } from 'react'; 
import Recipe from './Recipe';
import '../styles/Search.scss'; 

const Search = (props) => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    const token = '0686bc8e';
    const key = `${process.env.REACT_APP_FOOD_API_KEY}`;
    const getRecipes = async () => {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${token}&app_key=${key}`);
      const data = await response.json();
      setRecipes(data.hits);
    }
    
    getRecipes();
  }, [query])

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
  }

  const transferMeal = (meal, weekDay, mealTime) => {
    props.transferMeal(meal, weekDay, mealTime);
  }

  const transferIngredients = (ingredients) => {
    props.transferIngredients(ingredients);
  }

  return(
    <div className="search">
      <h1 className="search__title">Search for recipes with your favorite ingredient</h1>
      <form className="search__form" onSubmit={getSearch}>
        <input 
        placeholder="Type ingredient here...."
        className="search__input" 
        type="text" 
        onChange={updateSearch} 
        value={search}/>
        <button type="submit" className="search__btn">Search</button>
      </form>
      <div className="recipe__cards">
        { !recipes ? <p>rRecipes loading..</p> :
        recipes.map((recipe, index) => {
          return(
            <Recipe
              key={index}
              data={recipe}
              transferMeal = {transferMeal}
              transferIngredients = {transferIngredients}
              mealPlan={props.mealPlan}
              />
          )})}
      </div>
    </div>
  )
}

export default Search;