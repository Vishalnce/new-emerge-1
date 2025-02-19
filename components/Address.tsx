
import React from "react";


function address() {
  return (
    <>
      <div className=" w-[35%] max-md:w-[82%] h-[75%] m-4 flex flex-col justify-center ">
        

        <div className="flex flex-row items-center ">
          <div className="w-[30%]">
            <img src = "/contact/c1.svg" alt ="c1"/>

          </div>
          <div className="">
            <p className="text-center">+44 1638 438094 </p>
          </div>
        </div>

        <div className="flex flex-row items-center ">
          <div className="w-[30%]">
            <img src = "/contact/c2.svg" alt ="c1"/>

          </div>
          <div className=" w-[70%] ">
            <p className="text text-sm ">hello@emergefinishingschool.com</p>
          </div>
        </div>
        
        <div className="flex flex-row items-center ">
          <div className="w-[30%]">
            <img src = "/contact/c3.svg" alt ="c1"/>

          </div>
          <div className=" w-[75%]">
            <p className="text">Address : Plot no-123-31, 12-145-45A Banjara Hills,Road No. – 12, Hyderabad 500034</p>
          </div>
        </div>
        
        

         
        
      </div>
    </>
  );
}

export default address;
