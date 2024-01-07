import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UpperNav from "../components/UpperNav";
import UserProfile from "../components/UserProfile";
import { UserContext } from "../context/UserContext";
import UserRecipes from "../components/UserRecipes";


const User = () => {
  const {fetchUserData} = useContext(UserContext);
  // useEffect(() => {
  //   fetchUserData();
  // }, []);


  return (
    <>
    <UpperNav />
    <UserProfile />
    <UserRecipes />
      <Link to="/">back to Main</Link>
    </>
  );
};

export default User;



