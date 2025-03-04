"use client"
import React from "react";
import Image from "next/image";
import Connect from "./Connect";

const MainCourses = () => {
  const path = [
    {
      img: "/courses/c1.svg",
    },
    {
      img: "/courses/c2.svg",
    },
    {
      img: "/courses/c3.svg",
    },
    {
      img: "/courses/c4.svg",
    },
    {
      img: "/courses/c5.svg",
    },
    {
      img: "/courses/c6.svg",
    },
  ];

  const courses = [
    {
      heading: "Programming and Development",
      bg: "#A13FB91A",

      items: [
        {
          name: "Advanced Java Programming",
          desc: "Focus on Building scalable, enterprise-grade apps with Spring Boot, Hibernate & Microservices.",
          fill: "#A13FB9",
        },
        {
          name: "Python for Real-World Applications",
          desc: "Data manipulation, automation, web development (Django/Flask) to solve practical problems using Python..",
          fill: "#A13FB9",
        },
        {
          name: "Full-Stack Development",
          desc: "Full-stack development with ReactJS, Angular, VueJS & NodeJS, Django, Spring Boot for deployment.",
          fill: "#A13FB9",
        },
        {
          name: "Mobile App Development",
          desc: "Focus on Cross-platform app development with Flutter, React Native & Swift for deployment.",
          fill: "#A13FB9",
        },
        {
          name: "C++ Advanced Programming",
          desc: "Data Structures, STL, Competitive Programming & System Design for coding interviews and efficient solutions.",
          fill: "#A13FB9",
        },
      ],
    },

    {
      heading: "Data Science & AI",
      bg: "#FFB9001A",

      items: [
        {
          name: "Foundations of Machine Learning",
          desc: "Focus on Supervised & unsupervised learning, regression & classification for data-driven ML solutions.",
          fill: "#FFB900",
        },
        {
          name: "Learn with TensorFlow and PyTorch",
          desc: "Focus on Neural networks, CNNs, RNNs & Transfer Learning for AI models in real-world applications.",
          fill: "#FFB900",
        },

        {
          name: "Natural Language Processing",
          desc: "Focus on Text preprocessing, sentiment analysis & BERT for extracting insights from text data.",
          fill: "#FFB900",
        },
        {
          name: "Data Visualization and Analysis",
          desc: "Focus on Tableau, Power BI & Python (Matplotlib, Seaborn) for effective data visualization.",
          fill: "#FFB900",
        },
        {
          name: "Big Data with Hadoop and Spark",
          desc: "Focus on Distributed computing, HDFS, MapReduce & Spark for large-scale data analysis.",
          fill: "#FFB900",
        },
      ],
    },

    {
      heading: "Cloud Computing & DevOps",
      bg: "#32C41B1A",

      items: [
        {
          name: "Cloud Fundamentals",
          desc: "Focus on AWS, Azure & Google Cloud for understanding of essential cloud computing services.",
          fill: "#32C41B",
        },
        {
          name: "DevOps Practices",
          desc: "Focus on CI/CD pipelines, Docker, Kubernetes & Git for optimizing the software development lifecycle.",
          fill: "#32C41B",
        },

        {
          name: "Site Reliability Engineering",
          desc: "System monitoring, incident response & infrastructure automation for reliability and scalability.",
          fill: "#32C41B",
        },
      ],
    },

    {
      heading: "Cybersecurity & Blockchain",
      bg: "#5083C11A",

      items: [
        {
          name: "Ethical Hacking Penetration Testing",
          desc: "Focus on Vulnerability scanning, OWASP & penetration tools to identify and secure system vulnerabilities.",
          fill: "#5083C1",
        },
        {
          name: "Blockchain Development",
          desc: "Focus on Smart Contracts, Ethereum, Solidity & DApps to develop decentralized applications.",
          fill: "#5083C1",
        },

        {
          name: "Cybersecurity Essentials",
          desc: "Focus on Network security, cryptography & incident management for foundational security skills.",
          fill: "#5083C1",
        },
      ],
    },
    {
      heading: "Emerging Technologies",
      bg: "#FD18181A",

      items: [
        {
          name: "Introduction to Generative AI",
          desc: "Focus on Vulnerability scanning, OWASP & penetration tools to identify and secure system vulnerabilities.",
          fill: "#FD1818",
        },
        {
          name: "Internet of Things (IoT)",
          desc: "Focus on Arduino, Raspberry Pi, and IoT protocols to build IoT devices and applications.",
          fill: "#FD1818",
        },

        {
          name: "Robotics Process Automation",
          desc: "Focus on UiPath & Automation Anywhere for automating repetitive processes efficiently.",
          fill: "#FD1818",
        },
      ],
    },

    {
      heading: "Interview & Career Preparation",
      bg: "#FF7E061A",

      items: [
        {
          name: "Cracking the Coding Interview",
          desc: "Focus on Problem-solving, algorithm design & mock interviews to excel in technical interviews.",
          fill: "#FF7E06",
        },
        {
          name: "System Design Masterclass",
          desc: "Focus on High-level & low-level design, scalability & performance for large-scale system architecture.",
          fill: "#FF7E06",
        },

        {
          name: "Resume and Portfolio Building",
          desc: "Focus on Resumes, LinkedIn optimization & GitHub presentation to stand out in job applications.",
          fill: "#FF7E06",
        },
        {
          name: "Soft Skills for Tech Roles",
          desc: "Communication, teamwork & presentation skills to enhance employability and professional growth.",
          fill: "#FF7E06",
        },
      ],
    },
  ];

  return (
    <>
      <div className="max-w-[1400px] mx-auto    w-[100%]">
        {/* heading images */}
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
          <div className="w-[90%] flex flex-col   justify-around items-center   mx-auto pt-[4.7rem]">
            <div className="flex flex-row max-md:flex-col justify-around items-center gap-3 w-auto">
              <div className=" w-[36%] max-md:w-[95%] m-2    ">
                <div className="flex flex-col">
                  <p className="text-[#5083C1] font-semibold"> Our Courses </p>
                  <p className="text-3xl font-bold">
                    Courses that build careers
                  </p>
                </div>
              </div>

              <div className=" w-[30%] max-md:w-[95%] m-2  h-auto  ">
                <p className="text-sm text-[#00000080] pt-8">
                  Industry-relevant courses to build technical expertise, soft
                  skills, and career readiness. ensuring career success.!
                </p>
              </div>

              <div className=" w-[30%] max-md:w-[95%] m-2  h-auto  ">
                <p className="text-sm text-[#00000080] max-md:pt-0 pt-8">
                Explore our courses and training programs tailored to your needs, and begin your transformation today with confidence!
                </p>
              </div>
            </div>

            {/* icons */}

            <div className="flex flex-row  justify-around items-center  pb-8 pt-5 sm:gap-8">
              {path.map((item, index) => (
                <div key={index}>
                  <Image
                    src={item.img}
                    alt="About Us Image"
                    layout="responsive"
                    width={1}
                    height={1}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* detail courses */}

        {courses.map((it, index) => (
          <div
            className=" w-[100%] h-auto     "
            key={index}
          >
            {/* heading */}
            <div className=" bg-white py-8">
              <p className="text-center text-lg font-bold  ">{it.heading}</p>
            </div>

            {/* courses body */}
            <div
              className="flex flex-wrap justify-around items-center gap-2  py-14 min-h-[70vh]    "
              style={{ background: it.bg }}
            >
              {/* card */}

              {it.items.map((item, index) => (
                <div
                  className=" max-md:w-[80%] w-[25%]  h-auto shadow-xl rounded-lg bg-white py-3 min-h-[180px] m-4"
                  key={index}
                >
                  {/* card heading */}
                  <div className="flex flex-row justify-between items-center  m-2 px-1">
                    <div
                      className="w-12 rounded-full flex justify-center items-center  "
                      style={{ backgroundColor: item.fill }}
                    >
                      <p className="text-xl text-white py-2">      {`0${index + 1}`}</p>
                    </div>
                    <div className="w-[75%]">
                      <p className="font-bold  px-2">{item.name}</p>
                    </div>
                  </div>
                  {/* card body */}
                  <div className="m-2 px-1 py-1">
                    <p className="text-start text-[#00000080]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* award sectioonm */}

        <div className="w-[100%] bg-[#5083C1] h-auto">
          <div className="flex flex-row max-md:flex-col justify-between items-center w-[80%] mx-auto py-8">
            <div className="w-[10%] max-md:w-[30%]">
              <Image
                src={"/courses/a1.svg"}
                alt="About Us Image"
                layout="responsive"
                width={1}
                height={1}
                objectFit="cover"
              />
            </div>

            <div className=" w-[85%]">
              <p
                className="italic text-xl text-white max-md:text-center font-light "
              >
                We stand by you at every step of your journey. Stay focused,
                stay fearless—your success is our mission! Your growth is our
                priority—let’s achieve greatness together.
              </p>
            </div>
          </div>
        </div>

        <Connect/>
      </div>
    </>
  );
};

export default MainCourses;
