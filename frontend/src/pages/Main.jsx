import React from 'react'
import { useState, useEffect, useContext } from 'react';
import { RecipeContext } from '../context/RecipeContext';
import Navbar from '../components/Navbar';

function Main() {
    const {recipes, setRecipes, isLoading} = useContext(RecipeContext);



  return (
    <div>
        <Navbar />
        {isLoading ? (
                <ul>
                    {recipes && recipes.length > 0 ? (
                        recipes.map(recipe => (
                            <li key={recipe.idMeal}>
                                <p>{recipe.strMeal}</p>
                                <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                            </li>
                        ))
                    ) : (
                        <p>No recipes available</p>
                    )}
                </ul>
            ) : (
                <p>Loading...</p>
            )}
    </div>
  )
}

export default Main