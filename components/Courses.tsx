"use client"
import React from 'react'


const Courses = () => {

  return (
    <>
      <div className='w-[85vw]  mx-auto max-w-[1200px] m-14 p-1'>
        {/* heading */}
        <div className='flex flex-row justify-between max-md:flex-col'>
          <div className='' >
            <div>
              <p className=' text-lg  text-[#5083C1] '>
                Our courses
              </p>
            </div>
            <div>
              <p className='text-2xl font-bold tracking-wide'>
                Courses that build careers
              </p>
            </div>
          </div>

          <button className="border-2 border-[#5083C1] rounded-full m-2 px-2 text-md max-sm:w-[37%] w-[15%] max-sm:py-2">
            <p className='max-sm:text-sm text-[#5083C1]'>
              Explore more
            </p>
          </button>
        </div>

        {/* courses detail */}
        <div className='flex flex-row max-md:flex-col  justify-between items-center m-4'>
         
            <div className='w-[20%] max-md:w-[48%] m-3 flex flex-col '> {/* Added key prop */}
              <div className='flex flex-col items-center'>
                <img src="/courses/c1.svg" alt="c1" className='w-[60%] max-md:w-[100%]' /> 
              </div>
              <div>
                <p className='text-center text-md font-semibold '>
                Programming   & Development
                </p>
              </div>
            </div>

            <div className='w-[20%] max-md:w-[48%] m-3 flex flex-col '> {/* Added key prop */}
              <div className='flex flex-col items-center'>
                <img src="/courses/c2.svg" alt="c1" className='w-[60%] max-md:w-[100%]' /> 
              </div>
              <div>
                <p className='text-center text-md font-semibold '>
                Data Science & AI
                </p>
              </div>
            </div>


            <div className='w-[20%] max-md:w-[48%] m-3 flex flex-col '> {/* Added key prop */}
              <div className='flex flex-col items-center'>
                <img src="/courses/c3.svg" alt="c1" className='w-[60%] max-md:w-[100%]' /> 
              </div>
              <div>
                <p className='text-center text-md font-semibold '>
                Cloud Computing
                </p>
              </div>
            </div>
            <div className='w-[20%] max-md:w-[48%] m-3 flex flex-col '> {/* Added key prop */}
              <div className='flex flex-col items-center'>
                <img src="/courses/c4.svg" alt="c1" className='w-[60%] max-md:w-[100%]' /> 
              </div>
              <div>
                <p className='text-center text-md font-semibold'>
                Cybersecurity & Blockchain
                </p>
              </div>
            </div>
            <div className='w-[20%] max-md:w-[48%] m-3 flex flex-col '> {/* Added key prop */}
              <div className='flex flex-col items-center'>
                <img src="/courses/c5.svg" alt="c1" className='w-[60%] max-md:w-[100%]' /> 
              </div>
              <div>
                <p className='text-center text-md font-semibold '>
                
                Frontline Technology
                </p>
              </div>
            </div>

            <div className='w-[20%] max-md:w-[48%] m-3 flex flex-col '> {/* Added key prop */}
              <div className='flex flex-col items-center'>
                <img src="/courses/c6.svg" alt="c1" className='w-[60%] max-md:w-[100%]' /> 
              </div>
              <div>
                <p className='text-center text-md font-semibold '>
               Interview Preprations
                </p>
              </div>
            </div>
         
        </div>
      </div>
    </>
  )
}

export default Courses;