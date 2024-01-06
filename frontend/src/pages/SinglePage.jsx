import React, { useState } from "react";
import { useContext, useEffect } from "react";
import { RecipeContext } from "../context/RecipeContext";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { MdSearch } from "react-icons/md";
import { GoClock } from "react-icons/go";
import { IoIosStarHalf } from "react-icons/io";
import { MdRoomService } from "react-icons/md";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import axios from "axios";
import SearchBar from "../components/SearchBar";


function SinglePage() {
	const navigate=useNavigate()
  const { mealId, setMealId } = useContext(RecipeContext);
  const [singleMeal, setSingleMeal] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isHeartActive, setIsActiveHeart] = useState(false);

  const url = "http://localhost:3001";

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

  
    console.log(singleMeal.meals);
  

  const onClickHandler = async () => {
    setIsActiveHeart(!isHeartActive);

    let newRecipeItem = singleMeal.meals?.map(meal => (
      {
        title:  meal?.strMeal,
        ingredients: meal?.strIngredient1, 
        steps: meal?.strInstructions,
        image: meal?.strMealThumb
        
      }
    ))
    console.log(newRecipeItem[0])
    await axios.post(url, newRecipeItem[0]);
  }



  return (
    <>
    
    <div >
       <Navbar />
      {isLoading
        ? singleMeal.meals?.map((item) => (
            <div 
              key={item.idMeal}
              className="bg-white min-h-screen text-black p-10"
            >
              <h2 className=" font-bold text-4xl font-Caveat">
                {item.strCategory}
              </h2>
              <SearchBar />
              <div className="grid grid-cols-1 lg:grid-cols-12 justify-items-center place-items-center">
                <div className=" relative col-span-6 flex justify-center">
                  <img
                    className=" w-[400px] h-[500px]"
                    src={item.strMealThumb}
                    alt="image"
                  />
                  <button
                    className=" absolute text-black font-semibold left-3 top-3 cursor-pointer"
                    onClick={onClickHandler}
                  >
                    <img
                      className={`w-12 h-12 ${
                        isHeartActive ? "hidden" : "flex"
                      }`}
                      src="/images/heart-notactive.png"
                    />
                    <img
                      className={`w-12 h-12 ${
                        isHeartActive ? "flex" : "hidden"
                      }`}
                      src="/images/heart-active.png"
                    />
                  </button>
                </div>
                <div className=" col-span-6 flex flex-col items-center">
                  <h2 className="text-3xl font-bold mb-4">{item.strMeal}</h2>
                  <div className="w-[300px] flex justify-between border-b-2 border-black py-2">
                    <div className=" flex items-center gap-2 font-bold">
                      <GoClock className="w-6 h-6" />
                      <p className="">1 H 20 M</p>
                    </div>
                    <div className="flex items-center gap-2 text-xl font-bold">
                      <IoIosStarHalf />
                      <p>4/5</p>
                    </div>
                  </div>
                  <div className="mt-3 text-xl flex items-center gap-4 uppercase font-bold">
                    <MdRoomService />
                    <h4>Difficult</h4>
                  </div>
                  <div className="flex text-3xl mt-16 gap-4">
                    <FaSquareXTwitter />
                    <FaFacebookSquare />
                    <FaInstagramSquare />
                    <FaPinterest />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-12 mt-8">
                <div className="col-span-6 flex justify-center">
                  <ul className="w-[400px] text-start font-bold text-lg text-gray-600">
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
                </div>
                <div className=" col-span-6 flex justify-center">
                  <p className="w-[400px] text-start font-bold text-lg text-gray-600">
                    {item.strInstructions}
                  </p>
                </div>
              </div>
              <div className="w-full flex justify-center my-8">
                <button className="px-5 py-2 w-64 bg-red-700 rounded-lg text-white font-semibold">
                  <Link
                    className=" flex text-xl justify-center items-center"
                    to="/"
                  >
                    back to Main
                  </Link>
                </button>
              </div>
            </div>
          ))
        : "is loading"}
                    
    </div>
    </>
  );
}

export default SinglePage;
