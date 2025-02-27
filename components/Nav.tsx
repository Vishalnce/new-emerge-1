"use client";

import React, { useState } from "react";

import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = () => {
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isExploreDropdownOpen, setIsExploreDropdownOpen] = useState(false);
  const [dropmenu, setdropmenu] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center  bg-white text-black  w-[100%] border-b-2 shadow-md z-50 sticky max-w-[1400px] mx-auto top-0">
        <div className="flex justify-between items-center  ">
          {/* logo */}

          <div className="mx-2 p-2 ">
            {" "}
            {/* Example dimensions */}
            <img
              src="/logo.svg"
              alt="logo"
              className="w-full h-full object-contain"
            />
          </div>

          {/* nav links */}

          <div className="flex justify-between items-center gap-10 m-2 max-lg:hidden ">
            <Link href="/">
              <span>Home</span>
            </Link>
            <div // Container for About Us and dropdown
              className="relative flex items-center"
              onMouseEnter={() => setIsAboutDropdownOpen(true)}
              onMouseLeave={() => setIsAboutDropdownOpen(false)}
            >
              <Link href="/about" className="flex items-center">
                <span>About Us</span>
                <IoIosArrowDown className="ml-1" />
              </Link>

              {isAboutDropdownOpen && (
                <div className="absolute top-full left-0 bg-white text-black p-2 rounded shadow-md z-10">
                  <Link href="/about-us" className="block py-1">
                    <span>Our Team</span>
                  </Link>
                  <Link href="/gallery" className="block py-1">
                    <span>Gallery</span>
                  </Link>
                </div>
              )}
            </div>
            <div // Container for About Us and dropdown
              className="relative flex items-center"
              onMouseEnter={() => setIsExploreDropdownOpen(true)}
              onMouseLeave={() => setIsExploreDropdownOpen(false)}
            >
              <Link href="/about" className="flex items-center">
                <span>Courses</span>
                <IoIosArrowDown className="ml-1" />
              </Link>

              {isExploreDropdownOpen && (
                <div className="absolute top-full left-0 bg-white text-black p-2 rounded shadow-md z-10">
                  <Link href="/services" className="block py-1">
                    <span>Services</span>
                  </Link>
                  <Link href="/courses" className="block py-1">
                    <span>Courses</span>
                  </Link>
                </div>
              )}
            </div>
            <Link href="/">
              <span>Contact Us</span>
            </Link>
          </div>


        </div>

        {/* external link  */}
        <div className="mx-4 max-lg:hidden ml-auto "> {/* Right side container with ml-auto */}
          <button className="border-2  border-black rounded-full m-2 px-3 py-1 text-sm ">
            Jobs & Internships
          </button>
          <button className="border-2 border-black rounded-full m-2 px-3 py-1 text-sm">
            LMS Portal
          </button>
          <button className="border-2 border-black rounded-full m-2 px-3 py-1 text-sm">
            Excel & Elevate
          </button>
        </div>


        {/* for small screen drop down */}


        {dropmenu ? <div className='backdrop-blur-sm w-[65%] mx-auto flex justify-center items-center z-10 absolute top-3 left-1/2 transform -translate-x-1/2 lg:hidden'>
        <ul className='flex flex-col items-center gap-4'>
            <li className='text-xl'>Home</li>
            <li className='text-xl'> About Us</li>

            <li className='text-xl'>Explore</li>

            <li className='text-xl'>Contact Us</li>
            <button className="border-2  border-black rounded-full m-3 p-2 text-lg">
            Jobs & Internships{" "}
          </button>
          <button className="border-2  border-black rounded-full m-3 p-2 text-lg">
            LMS Portal{" "}
          </button>
          <button className="border-2  border-black rounded-full m-3 p-2 text-lg">
            Excel & Elevate{" "}
          </button>





        </ul>
      </div>  : null}
        
      


      {/* icon for drop down */}
      <div onClick={() => setdropmenu((prevState) => !prevState)}  >
          < GiHamburgerMenu
            className=" h-7 w-10 text-black hidden max-lg:block text-right"
          />
        </div>


    </div> 




      
    </>
  );
};

export default Nav;
