"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const Model = () => {

  const anim = useRef(null)

  useGSAP(() => {

    const t1 = gsap.timeline({ paused: true })

    t1.from(".box1",{ scale:0,duration:1,opacity: 0, ease: "power4", })
    .from(".box2",{ scale:0,duration:1,opacity: 0, ease: "power4", },0.5)
    .from(".box3",{ scale:0,duration:1,opacity: 0, ease: "power4", },1)
    .from(".box4",{ scale:0,duration:1,opacity: 0, ease: "power4", },1.5)

    ScrollTrigger.create({
    
      trigger: ".mod",
      start: "20% 70%",
      end:"30% 50%" ,
      scrub: 1,
      
      animation:t1,
     
      
    })





  },{scope:anim})

  return (
    <>

    {/* this */}
      {/* text  */}
      <div className="bg-[#007A6F] mx-auto h-auto  flex items-center justify-center">
        <p className="text-md text-white text-center p-4">
          Open to Graduates, B.Techs, BBAs, MBAs, Hospitality Management
          students, and all career aspirants!
        </p>
      </div>

      {/* model */}

      <div className="w-[80%] h-auto mx-auto   " ref={anim}>
        {/* heading */}
        <div className="flex flex-col items-center justify-center mt-14 mb-8 ">
          <div className="text-center text-[#5083C1]">
            <p>Our Success Model</p>
          </div>

          <div className="">
            <p className="text-3xl font-bold text-center">
              We follow 4 ‘S’ student success model
            </p>
          </div>
        </div>

        {/* model graph */}

        <div className=" w-[95%] mx-auto  h-auto mb-14 mod  ">
          {/* dotted line */}

          <div className="border-dotted border-2 border-black w-[87%] mx-auto mt-32 relative z-20 
   max-md:hidden"></div>



          {/* model graph */}

          <div className="flex flex-row justify-between items-center -mt-14 max-md:flex-col max-md:mt-0 max-sm:gap-5"  >
            {/* invidudal card */}
            <div className=" w-[20%] h-[40%] flex flex-col items-center realtive z-30 max-md:w-[47%] box1 ">
              <div className="w-29 h-28 ">
                <img
                  src="/model1.svg"
                  alt="logo"
                  className=" object-contain "
                />
              </div>

              
              <div className="">
                <p className="text-center text-xl font-bold">Spark</p>
                <p className="text-center text-sm mt-3 text-[#00000080]">
                  Skill Assessment and gap analysis to identify strengths and
                  areas for growth
                </p>
              </div>
            </div>

            
            <div className=" w-[20%] h-[40%] flex flex-col items-center realtive z-30 max-md:w-[47%] box2 ">
              <div className="w-29 h-28 ">
                <img
                  src="/model2.svg"
                  alt="logo"
                  className=" object-contain "
                />
              </div>

              
              <div className="">
                <p className="text-center text-xl font-bold">Shape</p>
                <p className="text-center text-sm mt-3 text-[#00000080] ">
                Build professional, meta, and technical skills through focused your training and skills.
                </p>
              </div>
            </div>


            <div className=" w-[20%] h-[40%] flex flex-col items-center  realtive z-30 max-md:w-[47%] box3">
              <div className="w-29 h-28 ">
                <img
                  src="/model3.svg"
                  alt="logo"
                  className=" object-contain "
                />
              </div>

              
              <div className="">
                <p className="text-center text-xl font-bold">Sprint</p>
                <p className="text-center text-sm mt-3 text-[#00000080] ">
                Get interview-ready and craft professional resumes to showcase your strengths.
                </p>
              </div>
            </div>

            <div className=" w-[20%] h-[40%] flex flex-col items-center realtive z-30 max-md:w-[47%] box4  ">
              <div className="w-28 h-28 ">
                <img
                  src="/model4.svg"
                  alt="logo"
                  className=" object-contain "
                />
              </div>

              
              <div className="">
                <p className="text-center text-xl font-bold">Soar</p>
                <p className="text-center text-sm mt-3 text-[#00000080] ">
                Build a skill portfolio showcasing achievements, abilities, and job alignment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Model;
