"use client"
import Image from 'next/image'
import React from 'react'
import { useState } from 'react'
import ThreeForm from './ThreeForm'

const ContactUs = () => {
 

  return (
    <>
    <div className=' mx-auto h-auto   max-w-[1400px]  w-[100%] bg-[#FAF9FF] '>
      {/* main div  */}
    <div className='flex  justify-around  w-[90%] max-md:flex-col mx-auto pb-20 max-md:pb-0 '>

      {/* contact icons */}
    <div className='flex flex-col  max-md:w-[100%] w-[35%] h-auto py-2 mx-auto'>
      
      <div className='my-4'>
        <p className='text-[#5083C1]'> Contact Us</p>
        <p className='font-semibold text-3xl'>Let’s Get in Touch</p>
      </div>

      <div className='my-3 py-6'>
            <p className='text-[#00000080]'>We're ready to help you enjoy innovative, secure data management solutions.</p>
      </div>
      
      <div className='flex flex-row  justify-center my-6'>
        <div className='w-[14%] mx-1'>
          <Image
            src = "/contact/d1.svg"
            width={100}
            height={100}
            alt ="contact us"
            />
        </div>

        <div className='flex flex-col w-[70%]  break-words whitespace-normal mx-2'>

          <p className='font-semibold text-lg'> Contact Us</p>
          <p className='text-[#00000080] text-md '> support@emergefinshingschool.com</p>

        </div>

      </div>

      <div className='flex flex-row  justify-center  my-6'>
        <div className='w-[14%] mx-1'>
          <Image
            src = "/contact/d2.svg"
            width={100}
            height={100}
            alt ="contact us"
            />
        </div>

        <div className='flex flex-col w-[70%]  break-words whitespace-normal mx-2'>

          <p className='font-semibold text-lg'> Visit Us</p>
          <p className='text-[#00000080] text-md '> Plot no-123-31, 12-145-45A Banjara Hills, Road No. 12, Hyderabad 500034</p>

        </div>

      </div>


    </div>

    {/* contact form menu  */}
    <div className=' w-[60%] max-md:w-[100%] h-auto mx-auto'>
      <ThreeForm/>
    </div>
    </div>
      

    </div>

    </>
  )
}

export default ContactUs