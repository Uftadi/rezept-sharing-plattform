import React from 'react'
import { useState, useContext, useEffect } from "react";
import { RecipeContext } from "../context/RecipeContext";


function CategoriesList() {
    const [categories, setCategories] = useState([]);  
    const { isLoading, setIsLoading, setCategory, category } = useContext(RecipeContext);

    useEffect(() => {
		const fetchCategories = async () => {
			const response = await fetch(
				"https://www.themealdb.com/api/json/v1/1/categories.php"
			);
			const data = await response.json();
			console.log(data);
			setCategories(data);
			setIsLoading(true);
		};
		fetchCategories();
	}, []);

  return (
    <>
        <div className="py-[20px] border-border-gray border-b-[1px]">
            {isLoading ? (
                <ul className="flex gap-[24px] justify-center text-[14px] uppercase">
                    {categories.categories?.map((item, index) => (
                        index < 10 ? 
                        <li key={item.idCategory} className="hover:underline cursor-pointer flex items-center">
                            <p onClick={() => setCategory(item.strCategory)}>
                                {item.strCategory}
                            </p>
                            {index === 6 ? 
                            (<div className="rounded-[50%] bg-black w-[10px] h-[10px] mx-[40px]"></div>)
                            : ""
                            }
                        </li> : ""
                    ))}
                </ul>
            ) : (
                <p>Loading...</p>
            )}
        </div>
        <div className="py-[20px] border-border-gray border-b-[1px]">
            {isLoading ? (
                <ul className="flex gap-[24px] justify-center text-[14px] uppercase">
                    {categories.categories?.map((item, index) => (
                        index >= 10 ? 
                        <li key={item.idCategory} className="hover:underline cursor-pointer flex items-center">
                            <p onClick={() => setCategory(item.strCategory)}>
                                {item.strCategory}
                            </p>
                            {index === 11 ? 
                            (<div className="rounded-[50%] bg-black w-[10px] h-[10px] mx-[40px]"></div>)
                            :
                            ""
                            }
                        </li> : ""
                    ))}
                </ul>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    </>
  )
}

export default CategoriesList