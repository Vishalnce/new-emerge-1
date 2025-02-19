"use client"

import React, { useState,useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Path = () => {

   
  
  const info = [
    {
      des: "Tailored Skill Assessments for Future Professional Journey",
      topic:"Assessment",
      sk1: "Quantitative Ability",
      sk2: "Logical Ability",
      sk3: "Verbal Ability",
    },
    {
      des: "In-Depth Psychological Insights to Unlock Your Potential",
      topic:"Psychometric Test",
      sk1: "Personality Type",
      sk2: "Cultural Fitment",
      sk3: "Winning Attitude",
    },
    {
      des: "Tailored Resumes That Stand Out in the World Competitive Market",
      topic:"Resume Building",
      sk1: "Resume Crafting",
      sk2: "Video Resume",
      sk3: "ATS Resume",
    },
    {
      des: "Empowering You with Essential Skills for Lifelong your Success ",
      topic:"Meta Skills",
      sk1: "Self Management",
      sk2: "Social Intelligence",
      sk3: "Innovation",
    },

    {
      des: "Building Confidence and Competence for Life Beyond the Campus.",
      topic:"Campus Readiness",

      sk1: "FAQs Strategies",
      sk2: "Role & JD Based PI",
      sk3: "Simulations",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useGSAP(() => {
    const interval = setInterval(() => {
      
      gsap.to(".text-animated", {
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
        onComplete: () => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % info.length);
          gsap.to(".text-animated", { opacity: 1, duration: 1.5, ease: "power2.out" });
        },
      });

      // Animate Borders
      gsap.to(".border-animated", {
        borderBottomWidth: "3px",
        
        duration: 1,
        ease: "power2.inOut",
      });
    }, 2000);
    return () => clearInterval(interval);
  });

  return (

    <>

    {/* heading  */}
    <div className="bg-[#FAF9FF] p-1">
    <div className='mx-auto m-8 p-4'>
        <p className='text text-center text-[#5083C1]'>Our Popular Services</p>
        <p className='text-2xl font-bold text-center '>Unlock your potential with our Services</p>

      </div>


    <div className=" bg-[#FAF9FF] w-[85vw] h-auto   mx-auto flex flex-col max-w-[1200px]   ">
      {/* Top Navigation */}
      <div className="m-3 flex flex-row justify-between max-md:flex-col items-center ">
        {info.map((_, index) => (
          <div
            key={index}
            className={`flex flex-row w-[20%] max-sm:w-[70%] max-sm:m-4 justify-center  border-animated  p-2 ${
              index === currentIndex ? " border-b-[3px] border-[#C8C7CC]" : "border-b-[3px] border-[#6466366] "
            }`}
          >
            <img src={`path${index + 1}.svg`} alt={`path${index + 1}`} />
            <p className="m-2 my-auto font-semibold text-sm  ">{_.topic}</p>
          </div>
        ))}
      </div>

      {/* Animated Section */}
      <div className="flex flex-row max-md:flex-col-reverse justify-between items-center  h-auto mb-7 max-sm:mb-12">
        {/* Left Card */}
        <div className="w-[20%]  h-auto max-sm:w-[60%] bg-[white] shadow-lg pb-3 ">
          <p className="text-center font-bold m-3">Step In, Level Up!</p>
          <p className="text-center text-sm text-gray-500 m-5 text-animated">
            {info[currentIndex].des}
          </p>
          <div className="flex flex-row justify-center">
            <button className=" rounded-full m-3 p-2 w-[60%] text-sm bg-[#5083C1] text-white">
              Explore More
            </button>
          </div>
        </div>

        {/* Skills & SVG Section */}
        <div className="w-[70%] h-[60vh] max-sm:h-[30vh] bg-[url('/vector1.svg')] bg-contain bg-no-repeat bg-center relative max-sm:hidden ">
          {[info[currentIndex].sk1, info[currentIndex].sk2, info[currentIndex].sk3].map((skill, i) => (
            <div
              key={i}
              className={`absolute flex flex-col justify-center items-center ${
                i === 0
                  ? "top-[43%] max-sm:top-[38%] max-sm:-left-[18%] -left-[8%]"
                  : i === 1
                  ? "top-[40%] max-sm:top-[35%] max-sm:left-[25%] left-[40%]"
                  : "top-[38%] -right-[8%] max-sm:top-[39%] max-sm:-right-[17%]"
              }`}
            >
              {/* Static SVG */}
              <img src={`n${i + 1}.svg`} className="mb-2 max-md:size-14 " />

              {/* Animated Text (Only Text Animates) */}
              <div className="w-[7rem]   p-2 text-animated">
                <p className="text-center text-sm font-semibold">{skill}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
    
    </>
  );
};

export default Path;
