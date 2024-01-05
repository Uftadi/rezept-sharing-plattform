import React from "react";
import { useState, useEffect, useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import { Link } from "react-router-dom";
import heart from "../assets/Favorite_heart.svg";
import star from "../assets/Star-border.svg"

function Main() {
	const { recipes, setRecipes, isLoading, setMealId, category } =
		useContext(RecipeContext);

	return (
		<div>
			<Navbar />
			<SearchBar />
			<div className="max-container padding-container flex items-start">
				<div className="text-center basis-1/6">
					<h2 className="text-[32px] font-medium my-[50px]">{category}</h2>
				</div>
				<div className="flex flex-col basis-5/6">
					{isLoading ? (
						<ul className="flex flex-wrap items-start gap-[30px] justify-end">
							{recipes && recipes.length > 0 ? (
								recipes.map((recipe) => (
									<Link to={`/singlePage/${recipe.idMeal}`} key={recipe.idMeal} className="basis-1/3 max-w-[200px] recipe-transition hover:scale-[1.1]" onClick={() => setMealId(recipe.idMeal)}>
										<div className="relative">
											<img src={recipe.strMealThumb} alt={recipe.strMeal} className=""/>
											<div className="svg-heart-container">
												<svg className="hover:hidden svg-heart absolute z-10 right-[10px] top-[10px]" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path fill-rule="evenodd" clip-rule="evenodd" d="M12.0002 5.26717C13.7602 3.20717 17.0202 2.36717 19.6602 4.16717C21.0602 5.12717 21.9402 6.74717 22.0002 8.44717C22.1302 12.3272 18.7002 15.4372 13.4502 20.1972L13.3402 20.2972C12.5802 20.9972 11.4102 20.9972 10.6502 20.3072L10.5502 20.2172L10.4898 20.1623C5.27384 15.4233 1.86075 12.3223 2.00021 8.45717C2.06021 6.74717 2.94021 5.12717 4.34021 4.16717C6.98021 2.35717 10.2402 3.20717 12.0002 5.26717ZM12.0002 18.8272L12.1002 18.7272C16.8602 14.4172 20.0002 11.5672 20.0002 8.67717C20.0002 6.67717 18.5002 5.17717 16.5002 5.17717C14.9602 5.17717 13.4602 6.16717 12.9402 7.53717H11.0702C10.5402 6.16717 9.04021 5.17717 7.50021 5.17717C5.50021 5.17717 4.00021 6.67717 4.00021 8.67717C4.00021 11.5672 7.14021 14.4172 11.9002 18.7272L12.0002 18.8272Z" fill="white"/>
												</svg>
												<svg className="svg-heart absolute z-20 right-[10px] top-[10px] opacity-0 hover:opacity-100" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M19.6602 4.16741C17.0202 2.36741 13.7602 3.20741 12.0002 5.26741C10.2402 3.20741 6.98021 2.35741 4.34021 4.16741C2.94021 5.12741 2.06021 6.74741 2.00021 8.45741C1.86021 12.3374 5.30021 15.4474 10.5502 20.2174L10.6502 20.3074C11.4102 20.9974 12.5802 20.9974 13.3402 20.2974L13.4502 20.1974C18.7002 15.4374 22.1302 12.3274 22.0002 8.44741C21.9402 6.74741 21.0602 5.12741 19.6602 4.16741Z" fill="white"/>
												</svg>
											</div>
											
										</div>
										<div className="flex justify-between items-start text-[12px] leading-[100%] mt-[10px]">
											<p className="basis-1/2 max-w-[276px] text-gray64 ">{recipe.strMeal}</p>
											<div className="flex items-center basis-1/2 justify-end w-[12px] h-[12px]">
												<img src={star} alt="star" />
												<p>0/5</p>	
											</div>	
										</div>
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
		</div>
	);
}

export default Main;
