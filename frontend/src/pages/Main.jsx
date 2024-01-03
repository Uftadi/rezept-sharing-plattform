import React from 'react'
import { useState, useEffect, useContext } from 'react';
import { RecipeContext } from '../context/RecipeContext';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';

function Main() {
    const {recipes, setRecipes, isLoading} = useContext(RecipeContext);

  return (
    <div>
        <Navbar />
        <SearchBar />
        {isLoading ? (
                <ul className='flex flex-wrap gap-[10px] items-end justify-center'>
                    {recipes && recipes.length > 0 ? (
                        recipes.map(recipe => (
                            <li key={recipe.idMeal}>
                                <p className='max-w-[200px]'>{recipe.strMeal}</p>
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