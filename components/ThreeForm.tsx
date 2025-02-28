"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import conf from "@/conf/conf";



const ThreeForm = () => {
  const [activeTab, setActiveTab] = useState<"Student" | "Tutor" | "Partner">("Student");


  const { register, handleSubmit, reset } = useForm<any>();

  // State to manage the display of the success message
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Function to handle form submission
 
  
  const submit = async (data: any) => {
    // Add the access_key to the submitted data
    
    let formattedData = {};
    if(activeTab === "Student"){
     formattedData = {
      Name: data.Name,
      Email: data.Email,
      "Field of Study": data.FieldOfStudy,
      "Course Interested In": data.CourseInterestedIn,
      Organisation: data.Organisation,
      "How You Heard About Us": data.HowYouHeardAboutUs,
      "How We Can Help You": data.HowWeCanHelpYou,
    };
    }
    if(activeTab === "Tutor"){
       formattedData = {
        Name: data.Name,
        Email: data.Email,
        "Field of Expertise": data.FieldOfExpertise,
        "Course You Can Teach": data.CourseYouCanTeach,
        "Year of Experience": data.YearOfExperience,
        "How You Heard About Us": data.HowYouHeardAboutUs,
        "How We Can Help You": data.HowWeCanHelpYou,
      };
      }
      if(activeTab === "Partner"){
        formattedData = {
         Name: data.Name,
         Email: data.Email,
         "Business Name": data.BusinessName,
         "Business Type": data.BusinessType,
         "Year Of Business Experience": data.YearOfBusinessExperience,
         "How You Heard AboutUs": data.HowYouHeardAboutUs,
         "How We Can Help You": data.HowWeCanHelpYou,
       };
       }

    const modifiedData = {
      ...formattedData,
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
      <div className="flex flex-col items-center justify-start min-h-screen    ">
        {/* Buttons */}
        <div className="flex flex-row w-[90%]  my-7 justify-between">
          {["Student", "Tutor", "Partner"].map((type) => (
            <button
              key={type}
              onClick={() =>
                setActiveTab(type as "Student" | "Tutor" | "Partner")
              }
              className={`border-2  rounded-full my-3 p-2 w-[25%]  max-sm:w-[40%] transition-all duration-200 ${
                activeTab === type
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Input Fields */}
        {activeTab === "Student" && (
          <form
            onSubmit={handleSubmit(submit)}
            className="w-[90%]  flex flex-col border-2 border-black justify-around gap-4"
          >
            <div className="flex flex-row justify-between">
              <input
                type="text"
                placeholder="Name"
                className="input-field p-2 rounded-md w-[47%]"
                {...register("Name", { required: true })}
              />
              <input
                type="email"
                placeholder="Email"
                className="input-field p-2 rounded-md w-[47%]"
                {...register("Email", { required: true })}
              />
            </div>

            <div className="flex flex-row justify-between">
              <input
                type="field"
                placeholder="Field of Study"
                className="input-field p-2 rounded-md w-[47%]"
                {...register("FieldOfStudy", { required: true })}
              />
              <input
                type="text"
                placeholder="Courses Instrested In"
                className="input-field p-2 rounded-md w-[47%]"
                {...register("CourseInterestedIn", { required: true })}
              />
            </div>

            <input
              type="text"
              placeholder="Organisation"
              className="input-field p-2 rounded-md"
              {...register("Organisation", { required: true })}

            />

            <input
              type="text"
              placeholder="How you heard about us?"
              className="input-field p-2 rounded-md"
              {...register("HowYouHeardAboutUs", { required: true })}

            />

            <textarea
              placeholder="How we can help you "
              className="input-field p-2 rounded-md"
              {...register("HowWeCanHelpYou", { required: true })}

              rows={3}
            />
            <button className=" rounded-full m-3 p-2 w-[30%] max-md:w-[60%] text bg-[#5083C1] text-white py-3">
            Send Message
          </button>
          </form>
          
        )}

        {activeTab === "Tutor" && (
          <form
            onSubmit={handleSubmit(submit)}
            className="w-[90%]  flex flex-col border-2 border-black justify-around gap-4"
          >
            <div className="flex flex-row justify-between">
              <input
                type="text"
                placeholder="Name"
                className="input-field p-2 rounded-md w-[47%]"
                {...register("Name", { required: true })}
              />
              <input
                type="email"
                placeholder="Email"
                className="input-field p-2 rounded-md w-[47%]"
                {...register("Email", { required: true })}
              />
            </div>

            <div className="flex flex-row justify-between">
              <input
                type="Field"
                placeholder="Field of Expertise"
                className="input-field p-2 rounded-md w-[47%]"
                {...register("FieldOfExpertise", { required: true })}
              />
              <input
                type="text"
                placeholder="Course You Can Teach"
                className="input-field p-2 rounded-md w-[47%]"
                {...register("CourseYouCanTeach", { required: true })}
              />
            </div>

            <input
              type="Number"
              placeholder="Year Of Experience"
              className="input-field p-2 rounded-md"
              {...register("YearOfExperience", { required: true })}

            />

            <input
              type="text"
              placeholder="How you heard about us?"
              className="input-field p-2 rounded-md"
              {...register("HowYouHeardAboutUs", { required: true })}

            />

            <textarea
              placeholder="How we can help you "
              className="input-field p-2 rounded-md"
              {...register("HowWeCanHelpYou", { required: true })}

              rows={3}
            />
            <button className=" rounded-full m-3 p-2 w-[30%] max-md:w-[60%] text bg-[#5083C1] text-white py-3">
            Send Message
          </button>
          </form>
        )}

        {activeTab === "Partner" && (
           <form
           onSubmit={handleSubmit(submit)}
           className="w-[90%]  flex flex-col  justify-around gap-4"
         >
           <div className="flex flex-row justify-between">
             <input
               type="text"
               placeholder="Name"
               className="input-field p-2 rounded-md w-[47%]"
               {...register("Name", { required: true })}
             />
             <input
               type="email"
               placeholder="Email"
               className="input-field p-2 rounded-md w-[47%]"
               {...register("Email", { required: true })}
             />
           </div>

           <div className="flex flex-row justify-between">
             <input
               type="Field"
               placeholder="Business Name"
               className="input-field p-2 rounded-md w-[47%]"
               {...register("BusinessName", { required: true })}
             />
             <input
               type="text"
               placeholder=" Business Type"
               className="input-field p-2 rounded-md w-[47%]"
               {...register("BusinessType", { required: true })}
             />
           </div>

           <input
             type="Number"
             placeholder="Year Of Business Experience"
             className="input-field p-2 rounded-md"
             {...register("YearOfBusinessExperience", { required: true })}

           />

           <input
             type="text"
             placeholder="How you heard about us?"
             className="input-field p-2 rounded-md"
             {...register("HowYouHeardAboutUs", { required: true })}

           />

           <textarea
             placeholder="How we can help you "
             className="input-field p-2 rounded-md"
             {...register("HowWeCanHelpYou", { required: true })}

             rows={3}
           />
           <button className=" rounded-full m-3 p-2 w-[30%] max-md:w-[60%] text bg-[#5083C1] text-white py-3">
           Send Message
         </button>
         </form>
        )}

{isSubmitted && (
          <div className="text-center   left-[4rem]  text-black border-2 rounded-full py-2 px-4 mt-4 ml-2 max-md:text-[13px]">
            Your message has been sent
          </div>
        )}
      </div>
    </>
  );
};

export default ThreeForm;
