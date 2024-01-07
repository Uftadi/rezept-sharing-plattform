import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import star from "../assets/Star-border.svg"
import AddRecipeForm from "./AddRecipeForm";

function UserRecipes() {
    const {users, setUsers, fetchUserData, url, isLoading, isEditingRecipe, setIsEditingRecipe,
        isAddingRecipe, setIsAddingRecipe} = useContext(UserContext);

    useEffect(() => {
        fetchUserData();
      }, []);


  return (
    <section className="max-container-nav padding-container">
        <div className="mb-[25px]">
            <h2 className="uppercase text-[14px] font-poppins-regular">my recipes</h2>
        </div>
        <ul className="flex gap-[30px] flex-wrap">
        {isLoading ? (
            users[0].recipes?.map(recipe => (
            <li key={recipe?._id} className="max-w-[276px] recipe-transition hover:scale-[1.1]">
                <div className="relative">
                    <img src={recipe.image} alt={recipe.title} className=""/>
                </div>
                <div className="flex justify-between items-start text-[12px] leading-[100%] mt-[10px]">
                    <p className="basis-1/2 max-w-[276px] text-gray64">{recipe.title}</p>
                    <div className="flex items-center basis-1/2 justify-end w-[12px] h-[12px]">
                        <img src={star} alt="star" />
                        <p>0/5</p>	
                    </div>	
                </div>
            </li>
            ))
        ) : (
            <p>Loading...</p>
        )}
            <li className="bg-pinkF5 w-[276px] h-[276px] flex items-center justify-center recipe-transition hover:scale-[1.1]">
                <button onClick={() => setIsAddingRecipe(true)} className="uppercase text-[14px] font-poppins-semi-bold border-[1px] border-black px-[40px] py-[10px]">add new recipe</button>
            </li>
        </ul>

        <AddRecipeForm />


            
        
    </section>
  )
}

export default UserRecipes