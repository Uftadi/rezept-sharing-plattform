import React, { useState } from "react";
import { useContext, useEffect } from "react";
import { RecipeContext } from "../context/RecipeContext";
import { Link } from "react-router-dom";

function SinglePage() {
	const { mealId, setMealId } = useContext(RecipeContext);
	const [singleMeal, setSingleMeal] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	useEffect(() => {
		(async function fetchMealById() {
			const response = await fetch(
				`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
			);
			const data = await response.json();
			setSingleMeal(data);
			setIsLoading(true);
			console.log(data);
		})();
	}, []);
	{
		console.log(singleMeal.meals);
	}

	return (
		<div>
			{isLoading
				? singleMeal.meals.map((item) => (
						<div key={item.idMeal}>
							<h2>{item.strMeal}</h2>
							<img src={item.strMealThumb} alt="image" />
							<ul>
								<li>{item.strIngredient1}</li>
								<li>{item.strIngredient2}</li>
								<li>{item.strIngredient3}</li>
								<li>{item.strIngredient4}</li>
								<li>{item.strIngredient5}</li>
								<li>{item.strIngredient6}</li>
								<li>{item.strIngredient7}</li>
								<li>{item.strIngredient8}</li>
								<li>{item.strIngredient9}</li>
								<li>{item.strIngredient10}</li>
								<li>{item.strIngredient11}</li>
								<li>{item.strIngredient12}</li>
								<li>{item.strIngredient13}</li>
								<li>{item.strIngredient14}</li>
								<li>{item.strIngredient15}</li>
								<li>{item.strIngredient16}</li>
								<li>{item.strIngredient17}</li>
								<li>{item.strIngredient18}</li>
								<li>{item.strIngredient19}</li>
								<li>{item.strIngredient20}</li>
							</ul>
							<p>{item.strInstructions}</p>
						</div>
				  ))
				: "is loading"}
			<Link to="/">back to Main</Link>
		</div>
	);
}

export default SinglePage;
