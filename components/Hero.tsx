"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import Link from "next/link";


const Hero = () => {
  const square = useRef(null);
 
  useGSAP(() => {


    const t1 = gsap.timeline(); 

    t1.from(".box1", {y: 300,duration: 1,ease: "power1.inOut",})
      .from(".box2", {y: 300,duration: 1,ease: "power1.inOut",},0.5)
      .from(".box3", {y: 300,duration: 1,ease: "power1.inOut",},1);


      



  }, { scope: square });

  return (
    <>
      <div className="w-[85vw] max-sm:w-[100%] h-auto   md:mx-auto  mb-8  flex justify-between items-center flex-row max-md:flex-col md:mt-6 max-w-[1400px] mx-auto ">
        {/* information */}
        <div className="flex flex-col  w-[60%] max-md:w-[90%] mb-8 ">
          <div className="m-4">
            <p className="text-4xl font-bold">
              
              Your Smart start to a <br />
              Corporate Ready
            </p>
            <p className="text-4xl font-bold text-[#FF7E06]">Future</p>
          </div>

          <div className="m-4">
            <p className=" text-gray-500">
              We are on a mission to transform college graduates into corporate{" "}
               ready professionals.
            </p>
          </div>

          {/* button */}
          <div className="flex flex-row justify-start max-sm:justify-center items-center ">
          <Link href="/contact-us">
            <button  className=" rounded-full m-3 px-4 py-2   text-sm bg-[#FF7E06]">
              Contact Us
            </button >
            </Link>
            
            <Link href="/technical-skills">
            <button className="border-2  border-black rounded-full  m-3  px-3 py-2 text-sm ">
              See Courses
            </button>
            </Link>
          </div>

          {/* placement */}
          <div className="flex flex-row  justify-around items-center mt-4 ">
            <div className="flex items-center flex-col m-2">
              <p className="font-bold text-4xl ">66+</p>
              <p className="text-sm text-gray-600 text-center ">Top Universities</p>
            </div>
            <div className="flex items-center flex-col m-2">
              <p className="font-bold text-4xl">39K+</p>
              <p className="text-sm text-gray-600 text-center ">Students in MNCs</p>
            </div>
            <div className="flex items-center flex-col m-2">
              <p className="font-bold text-4xl">29LPA</p>
              <p className="text-sm text-gray-600 text-center ">Highest Package Offered</p>
            </div>
          </div>
        </div>

        {/* images */}
        <div className="relative -2  ml-14 max-lg:ml-0" ref={square}>
          {/* for picture */}
          <div className="flex flex-row justify-center">
            <div className="my-auto m-4 w-[45%] overflow-hidden">
              <img  src="/hero3.png" alt="hero1" className="w-full object-contain box1" />
            </div>

            <div className=" flex items-center flex-col w-[40%]">
              <div className="w-[100%]">
                <img src="/hero1.png" alt="hero1" className="w-full object-contain " />
              </div>
              <div className="w-[100%] overflow-hidden">
                <img src="/hero2.png" alt="hero1" className="w-full object-contain box2" />
              </div>
            </div>
          </div>

          {/* for review */}
          <div className="absolute lg:bottom-8 lg:left-32 bottom-8 left-20 w-[40%] max-sm:left-14 max-sm:bottom-4 overflow-hidden ">
            <img src="/hero4.svg" alt="hero1" className="w-full object-contain box3" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
