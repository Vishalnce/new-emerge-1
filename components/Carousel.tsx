"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import horizontalLoop from "./helpers/horizontalLoop";

const stocks = [
  { path: "/logo/logo1.png" },
  { path: "/logo/logo2.png" },
  { path: "/logo/logo3.png" },
  { path: "/logo/logo4.png" },
  { path: "/logo/logo5.png" },
  { path: "/logo/logo6.png" },
  { path: "/logo/logo7.png" },
  { path: "/logo/logo8.png" },
  { path: "/logo/logo9.png" },
  { path: "/logo/logo10.png" },
  { path: "/logo/logo11.png" },
  { path: "/logo/logo12.png" },
  { path: "/logo/logo13.png" },
  { path: "/logo/logo14.png" },
  { path: "/logo/logo15.png" },
  { path: "/logo/logo16.png" },
];

function Test2() {
  const animationRef = useRef<gsap.core.Timeline | null>(null);

  useGSAP(() => {
    const slides = gsap.utils.toArray(".slide");

    if (!animationRef.current) {
      animationRef.current = horizontalLoop(slides, {
        repeat: -1, // Infinite loop
        paused: false, // Start playing immediately
        ease: "none",
        paddingRight: 20,
      });
    }

    return () => {
      animationRef.current?.kill();
      animationRef.current = null;
    };
  }, []);

  const handleMouseEnter = () => animationRef.current?.pause();
  const handleMouseLeave = () => animationRef.current?.play();

  return (
    <div className="overflow-hidden">
      <div
        className="h-[40vh] w-[200vw] max-md:w-[500vw] flex justify-center items-center  gap-4 "
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {stocks.map((item, index) => (
          <div
            key={index}
            className="slide  w-[500px] h-[20vh] flex justify-center items-center p-4 bg-white  rounded-lg"
          >
            <img
              src={item.path}
              alt={`logo ${index + 1}`}
              className="max-h-full max-w-full object-contain size-48"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Test2;
