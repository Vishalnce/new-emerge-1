"use client";

import React, { useState, useEffect } from "react";

import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { usePathname } from "next/navigation";
import { IoMdClose } from "react-icons/io";

const Nav = () => {
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isExploreDropdownOpen, setIsExploreDropdownOpen] = useState(false);
  const [dropmenu, setdropmenu] = useState(false);

  const pathname = usePathname();

  return (
    <>
      <div className="flex justify-between items-center  bg-white text-black  w-[100%] border-b-2 shadow-md z-50 sticky max-w-[1400px] mx-auto top-0">
        <div className="flex justify-between items-center  ">
          {/* logo */}

          <div className="mx-2 p-2 ">
            {" "}
            {/* Example dimensions */}
            <Link href="/">
              <img
                src="/logo.svg"
                alt="logo"
                className="w-full h-full object-contain"
              />
            </Link>
          </div>

          {/* nav links */}

          <div className="flex  items-center gap-8 m-2 ml-8 max-lg:hidden ">
            <Link href="/" className={pathname === "/" ? "text-[#FF7E06]" : ""}>
              <span>Home</span>
            </Link>

            <div // Container for About Us and dropdown
              className="relative flex items-center"
              onMouseEnter={() => setIsAboutDropdownOpen(true)}
              onMouseLeave={() => setIsAboutDropdownOpen(false)}
            >
              <div
                className={`flex items-center ${
                  pathname.startsWith("/about-us") || pathname === "/gallery"
                    ? "text-[#FF7E06]"
                    : ""
                }`}
              >
                <span>About Us</span>
                <IoIosArrowDown className="ml-1" />
              </div>

              {isAboutDropdownOpen && (
                <div className="absolute w-[100%] top-full left-0 bg-white text-black p-2 rounded shadow-md z-10">
                  <Link
                    href="/about-us"
                    className={`block py-1 ${
                      pathname === "/about-us" ? "text-[#FF7E06]" : ""
                    }`}
                  >
                    <p className="text-sm ">Our Team</p>
                  </Link>
                  <Link
                    href="/gallery"
                    className={`block py-1 ${
                      pathname === "/gallery" ? "text-[#FF7E06]" : ""
                    }`}
                  >
                    <p className="text-sm">Gallery</p>
                  </Link>
                </div>
              )}
            </div>

            <div // Container for Course and dropdown
              className="relative flex items-center"
              onMouseEnter={() => setIsExploreDropdownOpen(true)}
              onMouseLeave={() => setIsExploreDropdownOpen(false)}
            >
              <div
                className={`flex items-center ${
                  pathname === "/soft-skills" ||
                  pathname === "/technical-skills"
                    ? "text-[#FF7E06]"
                    : ""
                }`}
              >
                <span>Courses</span>
                <IoIosArrowDown className="ml-1" />
              </div>

              {isExploreDropdownOpen && (
                <div className="absolute w-[150%]  top-full left-0 bg-white text-black p-2 rounded shadow-md z-10">
                  <Link
                    href="/soft-skills"
                    className={`block py-1 ${
                      pathname === "/soft-skills" ? "text-[#FF7E06]" : ""
                    }`}
                  >
                    <span className="text-sm">Soft Skills </span>
                  </Link>
                  <Link
                    href="/technical-skills"
                    className={`block py-1 ${
                      pathname === "/technical-skills" ? "text-[#FF7E06]" : ""
                    }`}
                  >
                    <span className="text-sm">Technical Skills</span>
                  </Link>
                </div>
              )}
            </div>
            <Link
              href="/contact-us"
              className={pathname === "/contact-us" ? "text-[#FF7E06]" : ""}
            >
              <span>Contact Us</span>
            </Link>
          </div>
        </div>

        {/* external link  */}
        <div className="mx-4 max-lg:hidden ml-auto ">
          {" "}
          {/* Right side container with ml-auto */}
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

        {dropmenu ? (
          <div className="bg-white w-[100%] mx-auto flex justify-center items-center z-10 absolute top-12 left-1/2 transform -translate-x-1/2 lg:hidden py-2">
            <ul className="flex flex-col items-center gap-4">
              <Link
                href="/"
                className={pathname === "/" ? "text-[#FF7E06]" : ""}
              >
                <li
                  className="text-xl"
                  onClick={() => setdropmenu((prevState) => !prevState)}
                >
                  Home
                </li>
              </Link>
              <Link href="/about-us" className={pathname === "/about-us" ? "text-[#FF7E06]" : ""}>
                <li
                  className="text-xl"
                  onClick={() => setdropmenu((prevState) => !prevState)}
                >
                  About Us
                </li>
              </Link>
              <Link href="/gallery" className={pathname === "/gallery" ? "text-[#FF7E06]" : ""}>
                <li
                  className="text-xl"
                  onClick={() => setdropmenu((prevState) => !prevState)}
                >
                  Gallery
                </li>
              </Link>
              <Link href="/soft-skills" className={pathname === "/soft-skills" ? "text-[#FF7E06]" : ""}>
                <li
                  className="text-xl"
                  onClick={() => setdropmenu((prevState) => !prevState)}
                >
                  Soft Skills
                </li>
              </Link>
              <Link href="/technical-skills" className={pathname === "/technical-skills" ? "text-[#FF7E06]" : ""}>
                <li
                  className="text-xl"
                  onClick={() => setdropmenu((prevState) => !prevState)}
                >
                  Technical Skills
                </li>
              </Link>
              <Link href="/contact-us" className={pathname === "/contact-us" ? "text-[#FF7E06]" : ""}>
                <li
                  className="text-xl"
                  onClick={() => setdropmenu((prevState) => !prevState)}
                >
                  Contact Us
                </li>
              </Link>

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
          </div>
        ) : null}

        {/* icon for drop down */}
        {!dropmenu && (
          <div onClick={() => setdropmenu((prevState) => !prevState)}>
            <GiHamburgerMenu className=" h-7 w-10 text-black hidden max-lg:block text-right" />
          </div>
        )}

        {dropmenu && (
          <div onClick={() => setdropmenu((prevState) => !prevState)}>
            <IoMdClose className=" h-7 w-10 text-black hidden max-lg:block text-right" />
          </div>
        )}
      </div>
    </>
  );
};

export default Nav;
