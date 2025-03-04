import React from "react";
import Image from "next/image";
import Connect from "./Connect";

const Services = () => {
  const info = [
    {
      topic: "Assessment",
      fill: "#5083C1",

      items: [
        {
          skill: "Quantitative Ability",
          des: "Tests numerical skills, data interpretation, and problem-solving skills for analytical decision-making.",
        },
        {
          skill: "Logical Ability",
          des: "Assesses critical thinking, pattern recognition, and logical reasoning to enhance structured problem-solving.",
        },
        {
          skill: "Verbal Ability",
          des: "Evaluates communication skills, grammar, and comprehension to improve clarity, articulation.",
        },
      ],
    },
    {
      topic: "Psychometric Test",
      fill: "#32C41B",
      items: [
        {
          skill: "Personality Type",
          des: "Identifies individual traits and behavioral patterns to align with career roles.",
        },
        {
          skill: "Cultural Fitment",
          des: "Assesses compatibility with workplace values, ethics, and team dynamics.",
        },
        {
          skill: "Winning Attitude",
          des: "Evaluates resilience, motivation, and growth mindset for professional success.",
        },
      ],
    },
    {
      topic: "Resume Building",
      fill:"#FF7E06",
      items: [
        {
          skill: "Resume Crafting",
          des: "Structuring a professional, impactful, and tailored resume highlighting skills and experience.",
        },
        {
          skill: "Video Resume",
          des: "A short, engaging self-introduction showcasing personality, communication skills, and expertise..",
        },
        {
          skill: "ATS Resume",
          des: "Optimized resumes designed to pass Applicant Tracking Systems, ensuring better visibility in job applications.",
        },
      ],
    },
    {
      topic: "Meta Skills",
      fill:"#FD1818",
      items: [
        {
          skill: "Self Management",
          des: "Enhancing discipline, time management, and adaptability for personal and professional growth.",
        },
        {
          skill: "Social Intelligence",
          des: "Building strong interpersonal skills, empathy, and effective communication for better collaboration.",
        },
        {
          skill: "Innovation",
          des: "Encouraging creative thinking, problem-solving, and adaptability to drive new ideas and solutions.",
        },
      ],
    },

    {
      topic: "Campus Readiness",
      fill:"#A13FB9",
      items: [
        {
          skill: "FAQs Strategies",
          des: "Guidance on common interview questions, industry expectations, and effective answering techniques.",
        },
        {
          skill: "Role & JD Based PI",
          des: "Guidance on Personalized interview preparation based on specific job roles and job descriptions.",
        },
        {
          skill: "Simulations",
          des: "Real-world mock interviews and workplace scenarios to enhance confidence and practical readiness",
        },
      ],
    },
  ];

  return (
    <>
      <div className="max-w-[1400px] mx-auto    w-[100%]">
        <div className="">
          <Image
            src={"/courses/h1.png"}
            alt="About Us Image"
            layout="responsive"
            width={1}
            height={1}
            objectFit="cover"
          />
        </div>

        {/* info */}

        <div className="bg-[#FAF9FF]">
          <div className="w-[90%]  flex flex-col   justify-around items-center   mx-auto pt-[4.7rem]">
            <div className="flex flex-row max-md:flex-col justify-around items-center gap-3 w-auto">
              <div className=" w-[36%] max-md:w-[95%] m-2    ">
                <div className="flex flex-col">
                  <p className="text-[#5083C1] font-semibold"> Our services </p>
                  <p className="text-3xl font-bold">
                    Empower Your Future with Our Service
                  </p>
                </div>
              </div>

              <div className=" w-[30%] max-md:w-[95%] m-2  h-auto  ">
                <p className="text-sm text-[#00000080] pt-8">
                  At Emerge, we provide a comprehensive suite of services
                  designed to help you step into the corporate world with
                  confidence.
                </p>
              </div>

              <div className=" w-[30%] max-md:w-[95%] m-2  h-auto  ">
                <p className="text-sm text-[#00000080] pt-8">
                  From assessments and psychometric tests that identify your
                  strengths to resume building and meta-skills that highlights
                  your potential.
                </p>
              </div>
            </div>

            {/* icons */}

            <div className="flex flex-row  justify-around items-center  pb-8 pt-5 sm:gap-8"></div>
          </div>
        </div>

        {/* services */}

        {info.map((it, index) => (
          <div
            key={index}
            className="w-[100%] flex flex-col justify-center items-center gap-8 h-auto py-14"
          >
            <div className=" w-[90%] flex flex-row max-md:justify-center ">
              {info.map((topicItem, i) => (
                <div
                  key={i}
                  className={`flex flex-row max-md:w-[60%] max-md:justify-center justify-center items-center border-b-2 border-black w-[20%] gap-2 transition-opacity duration-500 
                    ${i === index ? "opacity-100 max-md:flex border-b-4" : "opacity-30 max-md:hidden"}`}
                >
                  <div className="">
                    <Image
                      src={`/path${i + 1}.svg`} // Dynamically set image path
                      alt={topicItem.topic}
                      width={400}
                      height={400}
                      className="w-full h-auto"
                    />
                  </div>

                  <div className="mx-2">
                    <p className=" text-center font-semibold max-md:text-xl p-1">{topicItem.topic}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-row max-md:flex-col justify-around items-center  w-[85%] gap-2">
              {it.items.map((item, i) => (

                // card
                
                  <div key={i} className="  w-[40%]   shadow-xl rounded-lg bg-white py-3  m-4  min-h-[180px] max-md:w-[80%] ">
                    {/* card heading */}
                    <div className="flex flex-row justify-between items-center  m-2 px-1 ">
                      <div
                        className="w-12 rounded-full flex justify-center items-center  "
                        style={{ backgroundColor: it.fill }}
                      >
                        <p className="text-xl text-white py-2">{`0${i + 1}`}</p>
                      </div>
                      <div className="w-[75%]">
                        <p className="font-bold  px-2">{item.skill}</p>
                      </div>
                    </div>
                    {/* card body */}
                    <div className="m-2 px-1">
                      <p className="text-start text-[#00000080]">
                        {item.des}
                      </p>
                    </div>
                  </div>
                
              ))}
            </div>
          </div>
        ))}

        <Connect />
      </div>
    </>
  );
};

export default Services;
