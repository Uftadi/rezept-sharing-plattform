import React from 'react'
import { useContext, useState } from "react";
import { RecipeContext } from '../context/RecipeContext';



function SearchBar() {
  const {dishName, setDishName, setIsLoading, setRecipes} = useContext(RecipeContext);
  
  const [onFocus, setOnFocus] = useState(false);

  const fetchDish = async () => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${dishName}`);
    const data = await response.json(); 
    setRecipes(data.meals);
    setIsLoading(true);
  }

  const onClickhandlerSearch = async (event) => {
    event.preventDefault();
    await fetchDish();
    setDishName("");
    
  };

  return (
    <div className='my-[20px]'>
      <form action="">
        
          <input 
          className='border-black border-b-[2px]'
          type="text" 
          onFocus={() => setOnFocus(true)}
          onBlur={() => setOnFocus(false)}
          value={dishName}
          onChange={(event) => setDishName((prevValue) => event.target.value)}
          placeholder={`${onFocus ? "Dish" : ""}`}
          />
        
        
        <button type="submit" onClick={onClickhandlerSearch} className="text-text-gray">SEARCH</button>
      </form>
    </div>
  )
}

export default SearchBar