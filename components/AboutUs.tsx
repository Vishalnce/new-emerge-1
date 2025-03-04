"use client"

import React from "react";
import Image from "next/image";
import Connect from "./Connect";

const AboutUs = () => {
  const teamInfo = [
    {
      name: "Indrajit Gupta",
      role: "Strategic Advisor",
      desc: "XLRI| Ex. VP HR SREI Financial Services & Group Companies| Business Consultant",
      img: "/about-us/t1.png",
    },

    {
      name: "Ameeta Mehta",
      role: " Independent consultant",
      desc: "L&D professional | Career Development | People Development | Content Design & Development | Culture ",
      img: "/about-us/t2.png",
    },

    {
      name: "Sriram Mohan",
      role: " Strategic Advisor",
      desc: "Senior Management Professional | Transforming Sales Personnel into Leaders",
      img: "/about-us/t3.png",
    },

  ];

  return (
    <>
      <div className="max-w-[1400px] mx-auto  border-2 border-black  w-[100%] ">
        {/* heading Image */}

        <div className="">
          <Image
            src={"/about-us/a1.png"}
            alt="About Us Image"
            layout="responsive"
            width={1}
            height={1}
            objectFit="cover"
          />
        </div>

        {/* info */}

        <div className="w-[95%] border-2 border-yellow-500 flex flex-col   justify-around items-center   mx-auto pt-[4.7rem]">
          <div className="flex flex-row max-md:flex-col justify-around items-center  w-auto">
            <div className=" w-[40%] max-md:w-[95%] m-2    ">
              <div className="flex flex-col">
                <p className="text-[#5083C1] font-semibold">About Us</p>
                <p className="text-3xl font-bold">
                  Introducing Emerge – The Premier Finishing School!
                </p>
              </div>
            </div>

            <div className=" w-[30%] max-md:w-[95%] m-2  h-auto  ">
              <p className="text-sm text-[#00000080] pt-8">
                At Emerge Finishing School, Our tailored training programs are
                designed to equip you with the skills, confidence, and mindset.
              </p>
            </div>

            <div className=" w-[30%] max-md:w-[95%] m-2  h-auto  ">
              <p className="text-sm text-[#00000080] pt-8">
                14+ years of shaping and transforming close to 5 lakhs students
                career through our Campus Readiness Programs.
              </p>
            </div>
          </div>

          {/* deatail info */}

          <div className="flex flex-row max-md:flex-col justify-around items-center  pb-8 pt-5">
            <div className=" max-md:w-[95%] m-2  bg-[#FAF9FF] rounded-xl shadow-2xl h-[8rem] flex flex-row justify-center items-center">
              <div className=" w-[30%] m-2">
                <Image
                  src={"/about-us/a2.svg"}
                  alt="About Us Image"
                  layout="intrinsic"
                  width={60}
                  height={60}
                />
              </div>

              <div className="flex flex-col">
                <p className="font-bold"> Professional Team</p>

                <p className=" text-sm text-[#00000080] ">
                  Our Expert faculty at Emerge equips you with real-world skills
                  for corporate success.{" "}
                </p>
              </div>
            </div>

            <div className=" max-md:w-[95%] m-2  bg-[#FAF9FF] rounded-xl shadow-2xl h-[8rem] flex flex-row justify-center items-center">
              <div className="w-[30%] m-2">
                <Image
                  src={"/about-us/a3.svg"}
                  alt="About Us Image"
                  layout="intrinsic"
                  width={60}
                  height={60}
                />
              </div>

              <div className="flex flex-col">
                <p className="font-bold"> End-to-End Guidance</p>

                <p className=" text-sm text-[#00000080] ">
                  Our experts mentor you from skill development to successful
                  placement.{" "}
                </p>
              </div>
            </div>

            <div className=" max-md:w-[95%] m-2  bg-[#FAF9FF] rounded-xl shadow-2xl h-[8rem] flex flex-row justify-center items-center">
              <div className=" w-[30%] m-2">
                <Image
                  src={"/about-us/a4.svg"}
                  alt="About Us Image"
                  layout="intrinsic"
                  width={60}
                  height={60}
                />
              </div>

              <div className="flex flex-col">
                <p className="font-bold"> Flexible Learning</p>

                <p className=" text-sm text-[#00000080] ">
                  Flexible remote or hybrid training tailored to your
                  convenience and career goals.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* gropu pic */}
        <div className=" w-[95%] mx-auto pb-12 ">
          <Image
            src={"/about-us/a6.png"}
            alt="About Us Image"
            layout="responsive"
            width={1}
            height={1}
            objectFit="cover"
          />
        </div>

        {/* small team description */}

        <div className="w-[100%] bg-[#007A6F] h-auto mx-auto py-20 ">
          <div className="w-[85%] mx-auto flex flex-row max-md:flex-col justify-around items-center gap-4 ">
            {/* image */}
            <div className="w-[20%] max-md:w-[72%] ">
              <Image
                src="/about-us/p1.png"
                alt="About Us Image"
                width={280} // Your desired width
                height={328} // Your desired height
                className="mx-auto"
              />
            </div>

            {/* description */}
            <div className="  w-[60%] max-md:w-[80%] text-start max-md:text-center">
              <p className="font-semibold text-white text-lg">Our Founder</p>
              <p className="font-semibold text-white text-lg ">
                Sumanta Banerjee
              </p>
              <p className=" text-white my-1">
                Sumanta brings with him 25+ years of versatile experience in
                various facets of training as a soft skills trainer and has an
                expertise in conducting workshops on Managerial Skills, Advance
                Sales Techniques, Interpersonal Skills and Leadership Skills.
              </p>
              <p className=" text-white">
                Edupreneur| Leadership & Behavioural Facilitator| Image
                Consultant | XLRI Jamshedpur | Franklin Covey Certified Master
                Trainer
              </p>
            </div>
          </div>
        </div>

        {/* about team member */}

        <div className="bg-[#FFFAED] border-2 border-yellow-400 w-[100%]  ">
          {/* heading  */}
          <div className="flex flex-col items-center justify-center py-8 w-[50%] max-md:w-[85%] mx-auto border-2 border-red-700">
            <div className="text-center text-[#5083C1]">
              <p>Our Team</p>
            </div>

            <div className="">
              <p className="text-3xl font-bold text-center">Team Members</p>
            </div>

            <div className="pt-3">
              <p className="text-center text-[#00000080] ">
                Our team brings together experience top quality education,
                trainings, and tech as we build the deal platform for
                professionals by professionals.
              </p>
            </div>
          </div>

          {/* main team member */}
          <div className="border-2 border-green-800 flex flex-wrap justify-around w-[90%] mx-auto gap-4 pb-8">
            {teamInfo.map((item, index) => (
              <div
                key={index}
                className="w-[25%] min-w-[250px] m-2 rounded-xl bg-white shadow-xl"
              >
                {/* Image */}
                <div>
                  <Image
                    src={item.img}
                    alt="Team Image"
                    layout="responsive"
                    width={1}
                    height={1}
                    objectFit="cover"
                    className="rounded-t-xl"
                  />
                </div>

                {/* Info */}
                <div className="border-4 border-cyan-600 bg-[#5083C1] w-[70%] mx-auto rounded-xl -m-8 relative z-40">
                  <p className="text-center text-white m-1">{item.name}</p>
                  <p className="text-center text-white m-1 text-sm">
                    {item.role}
                  </p>
                </div>

                {/* Description */}
                <div className="pt-9 mx-3">
                  <p className="py-3 text-center text-sm text-[#00000080] ">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* contact us */}
        
        <Connect />


      </div>
    </>
  );
};

export default AboutUs;
