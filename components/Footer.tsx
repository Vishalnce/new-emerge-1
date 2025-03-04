
import React from 'react'
import Link from 'next/link'

const Footer = () => {




  return (
    <>

    <div className='flex flex-col max-w-[1400px] mx-auto'>

      {/* logo */}



      {/* small nav */}

      <div className='flex flex-row max-md:flex-col justify-between  items-center py-3'>

        {/* nav */}
        <div className='flex flex-row gap-6 mx-4 mt-3'>
          <Link href="/about-us"><p className='font-bold text-sm underline m-2'> About-Us</p></Link>
          
          <Link href="/contact-us"><p className='font-bold text-sm underline m-2'> Contact us</p></Link>
          

          

        </div>



        {/* icons */}

        <div className='flex flex-row gap-3 mx-4 mt-4'>
          
          <Link target='_next' href="https://www.linkedin.com/company/emerge-finishing-school/?viewAsMember=true">
          <img src = "/footer/f3.svg"/>
          </Link>
          <Link  target='_next' href="https://www.instagram.com/emerge2010/">
          <img src = "/footer/f4.svg"/>
          </Link>
          <Link  target='_next' href="https://www.facebook.com/Emerge2010/">
          <img src = "/footer/f5.svg"/>
          </Link>




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