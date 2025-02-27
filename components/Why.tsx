"use client"

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";


const Why = () => {

  const whyref = useRef(null)

  useGSAP(() => {

    const t3= gsap.timeline()

    t3.from(".boxx1",{y: 300,duration: 1,ease: "power4",})
      .from(".boxx2",{y: 300,duration: 1,ease: "power4",},1);

      ScrollTrigger.create({
    
        trigger: ".whybox",
        start: "20% 70%",
        end:"40% 50%" ,
        scrub: 1,
        
        animation:t3,
       
        
      })


  },{scope:whyref })


  return (
    <>
    <div className="bg-[#FFFAED] h-auto  flex flex-row max-md:flex-col items-center justify-around mx-auto  max-w-[1400px] " ref ={whyref } >
    

    {/* why to choose Us */}
    <div className='w-[40%] h-auto ml-2 max-md:w-[84%]'>

      <div className='m-4'>
        <p className='text-lg text-left text-[#5083C1] pb-3'>
        Why Choose us ?
        </p>
        <p className='text-2xl font-bold text-left'>
        Benefits of choosing Emerge finishing School
        </p>
      </div>

      <div className='flex flex-col'>

        {/* individual card */}

        <div className='flex flex-row m-3'>
          <div>
            <img src="/why.svg" alt="check" className=''/>
          </div>

          <div>
            <p className='text-xl font-bold'> Customised Campus Readiness Module & Behavioural Training</p>
            <p className='text-sm '>
            Pre-training psychometric tests help us design customized modules and behavioral interventions.
            </p>

          </div>

        </div>

        <div className='flex flex-row m-3'>
          <div>
            <img src="/why.svg" alt="check" className=''/>
          </div>

          <div>
            <p className='text-xl font-bold'> Customised Campus Readiness Module & Behavioural Training</p>
            <p className='text-sm '>
            Pre-training psychometric tests help us design customized modules and behavioral interventions.
            </p>

          </div>

        </div>

        <button className="border-2  rounded-full m-3 p-2 w-[30%]  max-sm:w-[40%] text-white text bg-[#5083C1]">
              Contact Us
            </button>



      </div>

    </div>  

    {/* images part */}

    <div className=" w-[40%] h-[38rem] max-sm:h-[22rem] relative max-md:w-[75%] max-md:h-[36rem] whybox">
      <div className=' w-[70%] absolute top-[7rem] max-sm:top-[4rem] right-0 overflow-hidden'>
      <img src="/why1.png" alt="check" className='object-contain boxx1 '/>

      </div>
      
      <div className='absolute top-[47%] max-sm:top-[55%] max-md:top-[50%] left-3 w-[50%] overflow-hidden'>
      <img src="/why2.svg" alt="check" className='object-contain boxx2'/>
      </div>
    </div>




    </div>
    
    
    </>
  )
}

export default Why