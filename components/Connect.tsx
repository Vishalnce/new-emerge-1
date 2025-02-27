"use client";

import Contact from "@/components/ContactForm/Contact";
import Address from "@/components/Address"

function Connect() {
  
  return (
    <>
      <div className="bg-[#FAF9FF] max-w-[1400px] mx-auto pt-4">
        <div className=" w-[85vw]   mx-auto max-w-[1200px] py-10  ">
          <div className="flex flex-row justify-between max-md:flex-col">
            <div className="">
              <div>
                <p className="text-lg text-[#5083C1] ">Contact us</p>
              </div>
              <div className="mb-4">
                <p className="text-3xl font-bold tracking-wide">
                  We are Just a Click Away! Let&apos;s Connect
                </p>
              </div>
              <div>
              <p>
                if you have any question, feel free to reach out . Send us message!
              </p>
            </div>
            </div>
            


          </div>


          {/* main form */}
          <div className="flex flex-row max-md:flex-col  justify-between ">
            
          
            <Contact />
            <Address/>

          </div>
        </div>
      </div>
    </>
  );
}

export default Connect;
