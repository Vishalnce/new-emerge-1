import React from 'react'

const Quote = () => {
  return (
    <>
    <div className='flex flex-row max-md:flex-col justify-center items-center bg-[#007A6F] w-[100%] mx-auto h-auto gap-4 max-w-[1400px]  pt-7 pb-5 mt-4'>
      {/* images */}
      

      <div className='  m-3 w-[30%] max-md:w-[60%]  h-auto flex flex-col items-center'>
        <div>
          <img src = "/q1.png" className='size-20'></img>
        </div>
        <div>
          <p className='text-lg font-bold text-white text-center tracking-wide '>Sumanta Banerjee</p>
        </div>
        <div className='w-[80%] text-center'>
          <p className='text:xm '>
          Founder Director at 
          
          </p>
          <p className='text:xm  '>
      
          Emerge Finishing School
          </p>

         
        </div>

      </div>

      <div className='flex flex-row w-[50%] max-md:w-[65%] m-4  my-12'>
        <div className='w-[42%] max-md:w-[83%]'>
          <img src ="/review/a3.png" className='size-14 max-sm:size-10 '/>
        </div>

        <div className=''>
          <p className='text-xl  italic text-white word-spacing-[0.5rem] leading-relaxed '> With 25+ years of experience in leadership and skills training, I believe success comes from hard work and perseverance. Wishing you all the best for a bright and thriving future—keep learning, keep growing!</p>
        </div>

       

      </div>

    </div>
    
    </>
  )
}

export default Quote