"use client";

import React, { useState, useEffect } from "react";
import Input from "./Input";

import { useForm } from "react-hook-form";
import conf from "@/conf/conf";

interface FormData {
  Yourname: string;
  Email: string;
  YourMessage: string;
}

function Form() {
  const { register, handleSubmit, reset } = useForm<FormData>();

  // State to manage the display of the success message
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Function to handle form submission
  const submit = async (data: FormData) => {
    // Add the access_key to the submitted data
    const modifiedData = {
      ...data,
      access_key: conf.formKey,
    };

    // Convert the data to JSON format
    const json = JSON.stringify(modifiedData);

    try {
      // Send the data to Web3Forms using a POST request
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      // If the submission is successful
      if (res.success) {
        reset(); // Reset the form fields to make it blank
        setIsSubmitted(true); // Display the success message
      } else {
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  // useEffect to hide the message after 2 seconds
  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        setIsSubmitted(false); // Hide the message after 2 seconds
      }, 2000);

      return () => clearTimeout(timer); // Cleanup the timer on component unmount
    }
  }, [isSubmitted]);

  return (
    <>
      <div className="relative max-md:mb-[42px]  w-[50%]  max-md:w-[100%] flex flex-col justify-center items-center ">
        <form
          onSubmit={handleSubmit(submit)}
          className="flex flex-col justify-center m-4 w-[100%] h-auto max-md:w-[82%]  mx-auto"
        >
          {/* Input field for "Your name" */}

          <Input
            placeholder="Your name"
            className="mb-4 m-2 p-1 pl-3  bg-white  focus:outline-none  text-black w-[90%] border-b-4 border-b-white  placeholder:text-[#00000080] rounded-lg shadow-md "
            {...register("Yourname", { required: true })}
          />
          {/* Input field for "Email" */}
          <Input
            placeholder="Email"
            className="mb-4 m-2 p-1  pl-3  bg-white  focus:outline-none  text-black w-[90%]   placeholder:text-[#00000080] rounded-lg  shadow-md  "
            {...register("Email", { required: true })}
          />
          {/* Input field for "Your Message" */}
          <textarea
            placeholder="Your Message"
            className="mb-4 m-2 p-1 pl-3 h-[20vh] bg-white focus:outline-none  text-black w-[90%] 
  shadow-xl placeholder:text-[#00000080] text-start pt-2 rounded-lg resize-none"
            {...register("YourMessage", { required: true })}
          />

          {/* Submit button to send the form data */}
          <button className=" rounded-full m-3 p-2 w-[40%] max-md:w-[60%] text bg-[#5083C1] text-white py-3">
            Send Message
          </button>
        </form>

        {/* Display the success message after submission */}

        {isSubmitted && (
          <div className="text-center   left-[4rem]  text-black border-2 rounded-full py-2 px-4 mt-4 ml-2 max-md:text-[13px]">
            Your message has been sent
          </div>
        )}
      </div>
    </>
  );
}

export default Form;
