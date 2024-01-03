import React from 'react'
import { useState, useEffect, useContext } from 'react';
import { RecipeContext } from '../context/RecipeContext';

function Main() {
    const {recipes, setRecipes} = useContext(RecipeContext);



  return (
    <div>
        <ul>
            {console.log(recipes.meals[0].strMeal)}
            {recipes.meals.map(recipe => (
                <li>
                    <p>{recipe.strMeal}</p>
                    <img src={recipe.strMealThumb} alt="" />
                </li>
            ))}
        </ul>
        {console.log(recipes)}
    </div>
  )
}

export default Main