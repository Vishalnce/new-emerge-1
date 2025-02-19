import Hero from "@/components/Hero";
import Model from "@/components/Model";
import Why from "@/components/Why";
import Carousel from "@/components/Carousel";
import Path from "@/components/Path";
import Review from "@/components/Review";
import Courses from "@/components/Courses";
import Quote from "@/components/Quote";

import Connect from "@/components/Connect";

export default function Home() {
  return (
    <div>
      <Hero />
      <Model />
      <Why />
      <Carousel />
      <Path />
      <Courses />
      <Quote />
      <Review />
      <Connect />
    </div>
  );
}
