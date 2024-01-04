import React from "react";
import { useState, useContext, useEffect } from "react";
import { RecipeContext } from "../context/RecipeContext";
import { Link } from "react-router-dom";

function Navbar() {
	const [categories, setCategories] = useState([]);
	const { isLoading, setIsLoading, setCategory, category } =
		useContext(RecipeContext);
	const [userFirstName, setUserFirstName] = useState("");
	const [userLastName, setUserLastName] = useState("");

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
		const fetchUserName = async () => {
			const response = await fetch("http://localhost:3001/");
			const data = await response.json();
			console.log(data[0]);
			setUserFirstName(data[0].firstName);
			setUserLastName(data[0].lastName);
		};
		fetchUserName();
	}, []);

	return (
		<div className="mb-[30px]">
			<div>
				<Link to="/user">
					{userFirstName}
					{userLastName}
				</Link>
			</div>
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
			<Link to="/">back to Main</Link>
		</div>
	);
}

export default Navbar;
