import React from "react";

const Review = () => {
  const info = [
    {
      path: "/review/review1.svg",
      name: "Subhangi Ghosh",
      add: "Kolkata",
      review:
        "Nilu Ma'am, Divya Ma'am and Sumanta Sir, you'll always be my favourite. You guys know magic. People, who actually feels like changing themselves for a betterment would always want to be a part of it.",
    },

    {
      path: "/review/review2.svg",
      name: "Pranit Padhi",
      add: "Bhubaneswar",
      review:
        "There are very few teachers who can connect with you and your soul and I am pretty sure that all the teachers here at emerge are the ones among the few. hank you so much for being such fun mentors.",
    },

    {
      path: "/review/review3.svg",
      name: "Naivedya Mohanty",
      add: "Rourkela",
      review:
        "Sumant sir: These are the words of a soldier the best thing which will make all of us remember all your hardwork . Keep doing it sir , despite JAG  is your choice , but your hardwork will get you ASTON",
    },
  ];

  return (
    <>
      <div className="max-w-[1400px] mx-auto bg-[#FFFAED]    pt-7 pb-12   w-[100%]">
        {/* heading */}
        <div className="mx-auto  w-[80%] py-8   flex flex-row justify-center">
          <div className="m-2">
            <img src="/review/a1.svg" className="size-10" />
          </div>
          <div>
            <p className="text text-center text-[#5083C1]">Our Testimonials</p>

            <p className="text-2xl font-bold text-center ">
              Words from our successfull Graduates
            </p>
          </div>
          <div className="m-2">
            <img src="/review/a2.svg" className="size-10" />
          </div>
        </div>

        {/* cards */}

        <div className="flex flex-row max-md:flex-col justify-around items-center mx-auto  py-4 h-auto ">
          {info.map((item) => (
            <div
              className="flex flex-col   w-[25%] h-[80%] max-md:w-[80%] shadow-lg hover:shadow-2xl  group rounded-b-2xl m-3"
              key={item.name}
            >
              {/* Top section */}
              <div className="flex flex-col  items-center bg-[#5083C1B2] group-hover:bg-[#5083C1] h-[40%] transition-colors duration-300 rounded-t-2xl ">
                <div className="w-[28%] m-2 flex justify-center">
                  <img src={item.path} />
                </div>
                <div>
                  <p className="text-white text-lg">{item.name}</p>
                </div>
                <div>
                  <p className="text-white text-sm m-2">{item.add}</p>
                </div>
              </div>

              {/* Review section */}
              <div className=" mx-auto  transition-colors duration-300 bg-white rounded-b-2xl ">
                <p className="text-center text m-2 text-gray-500 w-[80%] mx-auto ">
                  {item.review}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Review;
