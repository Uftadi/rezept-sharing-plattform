import React from "react";
import { useState, useContext, useEffect } from "react";
import { RecipeContext } from "../context/RecipeContext";

function Navbar() {
	const [categories, setCategories] = useState([]);
	const { isLoading, setIsLoading, setCategory, category } =
		useContext(RecipeContext);

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
		<div className="mb-[30px]">
			{isLoading ? (
				<ul className="flex gap-[10px] justify-center">
					{categories.categories?.map((item) => (
						<li key={item.idCategory} className="cursor-pointer">
							<p onClick={() => setCategory(item.strCategory)}>
								{item.strCategory}
							</p>
							{console.log(category)}
						</li>
					))}
				</ul>
			) : (
				<p>Loading...</p>
			)}
			<h2 className="text-3xl font-bold underline my-[15px]">{category}</h2>
		</div>
	);
}

export default Navbar;
