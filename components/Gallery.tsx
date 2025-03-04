"use client"
import React from "react";
import Image from "next/image";
import Connect from "./Connect";

const Gallery = () => {
  const images = [
    { src: "/gallery/g1.png", alt: "Gallery Image" },
    { src: "/gallery/g2.png", alt: "Gallery Image" },
    { src: "/gallery/g3.png", alt: "Gallery Image" },
    { src: "/gallery/g4.png", alt: "Gallery Image" },

    { src: "/gallery/g5.png", alt: "Gallery Image" },

    { src: "/gallery/g6.png", alt: "Gallery Image" },

    { src: "/gallery/g7.png", alt: "Gallery Image" },

    { src: "/gallery/g8.png", alt: "Gallery Image" },

    { src: "/gallery/g9.png", alt: "Gallery Image" },
    { src: "/gallery/g10.png", alt: "Gallery Image" },

    { src: "/gallery/g11.png", alt: "Gallery Image" },

    { src: "/gallery/g12.png", alt: "Gallery Image" },

  ];

  return (
    <>
      <div className="max-w-[1400px] mx-auto    w-[100%]">
        {/* heading image */}

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

        {/* Gallery Heading  */}
        <div className="flex flex-col items-center justify-center py-8 w-[50%] max-md:w-[85%] mx-auto ">
          <div className="text-center text-[#5083C1]">
            <p>Our Gallary</p>
          </div>

          <div className="">
            <p className="text-3xl font-bold text-center">
              Some Glimpses of Emerge
            </p>
          </div>
        </div>

        {/* images */}
        <div className="flex flex-wrap justify-center items-center gap-4  w-[90%] mx-auto pt-8 pb-12">
          {images.map((image, index) => (
            <div
              key={index}
              className="w-[30%] max-sm:w-[80%] "
            >
              <Image src={image.src} alt={image.alt} width={500} height={500} className="w-full h-full" />
            </div>
          ))}
        </div>
        <Connect/>


      </div>
    </>
  );
};

export default Gallery;
