/*import React from 'react';
import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/Avatar.svg";

function UpperNav() {
    const [userFirstName, setUserFirstName] = useState("");
	const [userLastName, setUserLastName] = useState("");

    useEffect(() => {
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
    <>

        <div className="border-border-gray border-b-[1px]">
            <div className="flex justify-between items-center pb-[20px] max-container-nav padding-container">
                <div className="flex gap-[24px] uppercase text-[14px] font-poppins-regular text-text-gray ">
                    <Link to="/">Recipes</Link>
                    <p>Tips & Tricks</p>
                </div>
                <h1 className="text-[36px] font-poppins-semi-bold leading-[110%]">
                    <Link to="/">GOOD FOOD</Link>
                </h1>
                <div className="flex items-center gap-[12px] uppercase text-[14px] font-poppins-regular text-text-gray">
                    <img src={avatar} alt="avatar" className="w-[24px] h-[24px]" />
                    <div className="border-l-[1px]">
                        <Link className=" pl-[12px]" to="/user">{userFirstName} {userLastName}
                        </Link>
                    </div>
                </div>
</div>
      <div className="relative border-border-gray border-b-[1px]">
        <div className=" flex justify-between items-center pb-[20px] max-container-nav padding-container">
          <div className="flex gap-[24px] uppercase text-[14px] font-poppins-regular text-text-gray ">
            <p>Recipes</p>
            <p>Tips & Tricks</p>
          </div>

          <div className="flex items-center gap-[12px] uppercase text-[14px] font-poppins-regular text-text-gray mt-3">
            <img src={avatar} alt="avatar" className="w-[24px] h-[24px]" />
            <div className="border-l-[1px]">
              <Link className=" pl-[12px]" to="/user">
                {userFirstName} {userLastName}
              </Link>

            </div>
          </div>
        </div>
        <div className="absolute inset-0 max-container-nav padding-container flex justify-center">
          <h1 className="text-[36px] font-poppins-semi-bold leading-[110%] w-fit">
            GOOD FOOD
          </h1>
        </div>
      </div>
    </>
  )
}

export default <UpperNav>*/

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import avatar from '../assets/Avatar.svg';

function UpperNav() {
  const [userFirstName, setUserFirstName] = useState('');
  const [userLastName, setUserLastName] = useState('');

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const response = await fetch('http://localhost:3001/');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();

        if (data && data.length > 0) {
          setUserFirstName(data[0].firstName);
          setUserLastName(data[0].lastName);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchUserName();
  }, []);

  return (
    <>
      <div className="border-border-gray border-b-[1px]">
        <div className="flex justify-between items-center pb-[20px] max-container-nav padding-container">
          <div className="flex gap-[24px] uppercase text-[14px] font-poppins-regular text-text-gray">
            <Link to="/">Recipes</Link>
            <p>Tips & Tricks</p>
          </div>
          <h1 className="text-[36px] font-poppins-semi-bold leading-[110%]">
            <Link to="/">GOOD FOOD</Link>
          </h1>
          <div className="flex items-center gap-[12px] uppercase text-[14px] font-poppins-regular text-text-gray">
            <img src={avatar} alt="avatar" className="w-[24px] h-[24px]" />
            <div className="border-l-[1px]">
              <Link className="pl-[12px]" to="/user">
                {userFirstName} {userLastName}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-border-gray border-b-[1px]">
        <div className="flex justify-between items-center pb-[20px] max-container-nav padding-container">
          <div className="flex gap-[24px] uppercase text-[14px] font-poppins-regular text-text-gray">
            <p>Recipes</p>
            <p>Tips & Tricks</p>
          </div>
          <div className="flex items-center gap-[12px] uppercase text-[14px] font-poppins-regular text-text-gray mt-3">
            <img src={avatar} alt="avatar" className="w-[24px] h-[24px]" />
            <div className="border-l-[1px]">
              <Link className="pl-[12px]" to="/user">
                {userFirstName} {userLastName}
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 max-container-nav padding-container flex justify-center">
          <h1 className="text-[36px] font-poppins-semi-bold leading-[110%] w-fit">
            GOOD FOOD
          </h1>
        </div>
      </div>
    </>
  );
}

export default UpperNav;
