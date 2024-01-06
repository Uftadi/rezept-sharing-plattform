import React from "react";
import { useState, useContext, useEffect } from "react";
import { RecipeContext } from "../context/RecipeContext";
import { Link } from "react-router-dom";
import avatar from "../assets/Avatar.svg"

function Navbar() {
	const [categories, setCategories] = useState([]);
	const { isLoading, setIsLoading, setCategory, category } = useContext(RecipeContext);
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

		<section>
			<div className="border-border-gray border-b-[1px]">
				<div className="flex justify-between items-center pb-[20px] max-container-nav padding-container">
					<div className="flex gap-[24px] uppercase text-[14px] font-poppins-regular text-text-gray ">
						<p>Recipes</p>
						<p>Tips & Tricks</p>
					</div>
					<h1 className="text-[36px] font-poppins-semi-bold leading-[110%]">GOOD FOOD</h1>
					<div className="flex items-center gap-[12px] uppercase text-[14px] font-poppins-regular text-text-gray">
						<img src={avatar} alt="avatar" className="w-[24px] h-[24px]" />
						<div className="border-l-[1px]">
							<Link className=" pl-[12px]" to="/user">{userFirstName} {userLastName}
							</Link>
						</div>
					</div>
				</div>
			</div>

			
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
		</section>


	);
}

export default Navbar;
