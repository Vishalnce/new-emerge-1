import React from "react";
import Image from "next/image";

const aboutus = () => {
  return (
    <>
      <div className="max-w-[1400px] mx-auto">
        {/* heading image */}
        <div>
          <Image
            src={"/about-us/a1.png"}
            alt="About Us Image"
            width={"1400"}
            height={"400"}
            className=""
          />
        </div>

        {/* About us description */}

        <div className=" w-[100%] h-auto p-1">
          <div className="flex flex-row  border-2 border-blue-700 m-4  mt-14 max-sm:flex-col  items-center ">


            <div className="border-2 border-black w-[40%] max-sm:w-[75%] h-auto m-4">
            
            <div>
              <p className="text-[#5083C1] font-semibold ">About Us</p>

            </div>
                        
            <div>
              <p className=" font-bold text-3xl ">Introducing Emerge - The Premier Finishing School!</p>

            </div>

            </div>



            <div className="border-2 border-black w-[30%] h-auto m-3 ">
              <div className="mt-5">
                <p className="text-[#00000080] ">At Emerge Finishing School, Our tailored training programs are designed to equip you with the skills, confidence, and mindset.</p>
              </div>
            </div>

            <div className="border-2 border-black w-[30%] h-auto m-3 ">    <div className="mt-5">
                <p className="text-[#00000080] ">14+ years of shaping and transforming
close to 5 lakhs students career through
our Campus Readiness Programs.</p>
              </div></div>



          </div>
        </div>
      </div>
    </>
  );
};

export default aboutus;
