import React from 'react'
import { useState, useContext, useEffect } from 'react';
import { RecipeContext } from '../context/RecipeContext';


function Navbar() {
    const [categories, setCategories] = useState ([]);
    const {isLoading, setIsLoading, setCategory, category} = useContext(RecipeContext);

    useEffect ( () => {
        const fetchCategories = async () => {
        const response = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
        const data = await response.json();
        console.log(data)
        setCategories(data);
        setIsLoading(true);
        }
        fetchCategories();

    },[])

  return (
    <div>
       
        {isLoading ? (
        <ul>
            {categories.categories.map(item => (
            <li key={item.idCategory}>
                
                <p onClick={() => setCategory(item.strCategory)}>{item.strCategory}</p>
                {console.log(category)}
                
            </li>
            ))}
        </ul>
        ) : (
        <p>Loading...</p>
        )}
         <h2>{category}</h2>
    </div>
  )
}

export default Navbar