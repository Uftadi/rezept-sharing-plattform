import React from "react";
import { useState, useEffect, useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import { Link } from "react-router-dom";

function Main() {
	const { recipes, setRecipes, isLoading, setMealId, category } =
		useContext(RecipeContext);

	return (
		<div>
			<Navbar />
			<SearchBar />
			<div>
			<div className="text-center">
				<h2 className="text-[32px] font-medium my-[50px]">{category}</h2>
			
			</div>
			{isLoading ? (
				<ul className="flex flex-wrap gap-[10px] items-end justify-center">
					{recipes && recipes.length > 0 ? (
						recipes.map((recipe) => (
							<Link to={`/singlePage/${recipe.idMeal}`} key={recipe.idMeal}>
								<li onClick={() => setMealId(recipe.idMeal)}>
									<p className="max-w-[200px]">{recipe.strMeal}</p>
									<img src={recipe.strMealThumb} alt={recipe.strMeal} />
								</li>
							</Link>
						))
					) : (
						<p>No recipes available</p>
					)}
				</ul>
			) : (
				<p>Loading...</p>
			)}
			</div>
		</div>
	);
}

export default Main;
