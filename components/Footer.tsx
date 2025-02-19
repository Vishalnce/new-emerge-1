
import React from 'react'

const Footer = () => {




  return (
    <>

    <div className='flex flex-col max-w-[1400px] mx-auto'>

      {/* logo */}



      {/* small nav */}

      <div className='flex flex-row max-md:flex-col justify-between  items-center py-3'>

        {/* nav */}
        <div className='flex flex-row gap-6 mx-4 mt-3'>
          <p className='font-bold text-sm underline m-2'> About</p>
          <p className='font-bold text-sm underline m-2'> Contact us</p>

          <p className='font-bold text-sm underline m-2'> Services</p>

        </div>



        {/* icons */}

        <div className='flex flex-row gap-3 mx-4 mt-4'>
          <img src = "/footer/f1.svg"/>
          <img src = "/footer/f2.svg"/>

          <img src = "/footer/f3.svg"/>
          <img src = "/footer/f4.svg"/>
          <img src = "/footer/f5.svg"/>




        </div>



      </div>


      {/* last  */}

      <div className='flex flex-row max-md:flex-col bg-black p-3 justify-around items-center py-5'>

        <p className='text-white text-xs'>©2025 Emerge Finishing School. All rights reserved. </p>
        <p className='text-white text-xs '>Return and Refund policy</p>
     
        <p className='text-white text-xs ' >NRC Policy</p>
        <p className='text-white text-xs ' >Privacy Policy</p>
        <p className='text-white text-xs ' >Terms & Conditions</p>
      </div>

    </div>
    
    </>
  )
}

export default Footer