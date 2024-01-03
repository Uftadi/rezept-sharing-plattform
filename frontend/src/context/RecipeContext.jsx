import { createContext, useState, useEffect } from "react";

const RecipeContext = createContext();

const RecipeContextProvider = ({ children }) => {
    const [recipes, setRecipes] = useState([]);
    const [category, setCategory] = useState("Seafood");
    const [isLoading, setIsLoading]= useState(false);
    const [dishName, setDishName] = useState("");

    useEffect ( () => {
        const fetchRecipes = async () => {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
        console.log(response)
        const data = await response.json();
        console.log(data.meals);    
        setRecipes(data.meals);
        setIsLoading(true);
        }
        fetchRecipes();

    },[category])

    return (
        <RecipeContext.Provider value={ {recipes, setRecipes, isLoading, setIsLoading, setCategory, category, dishName, setDishName} } >
            {children}
        </RecipeContext.Provider>
    )

}

export { RecipeContext, RecipeContextProvider}