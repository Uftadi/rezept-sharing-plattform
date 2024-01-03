import { createContext, useState, useEffect } from "react";

const RecipeContext = createContext();

const RecipeContextProvider = ({ children }) => {
    const [recipes, setRecipes] = useState([]);

    useEffect ( () => {
        const fetchRecipes = async () => {
        const response = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood");
        const data = await response.json();
        setRecipes(data);
        }
        fetchRecipes();
    },[])

    return (
        <RecipeContext.Provider value={ {recipes, setRecipes} } >
            {children}
        </RecipeContext.Provider>
    )

}

export { RecipeContext, RecipeContextProvider}