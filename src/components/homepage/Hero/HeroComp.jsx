"use client";
import React from "react";
// import Hero from "../Hero"
import Hero2 from "./Hero2";

const HeroComp = () => {
  return (
    <section className="w-screen h-[400vh] px-[4vw] relative ">
      <div className="z-[5] relative h-screen  py-[10%]">
        <div className="flex items-end justify-end h-full">
          <div className="w-full">
            <h1 className="capitalize font-medium flex flex-col">
              <span className="text-white">Digital</span>{" "}
              <span>Experience</span>{" "}
              <span className="white-stroke-text">Design agency</span>
            </h1>
          </div>
        </div>
        <div className="flex items-end justify-end w-full">
          <p className="!text-white w-1/3">
            Harnessing the power of Emotion, Design, Technology &
            Neuromarketing, we create Digital Brand Experiences that propel your
            success in the enigmatic realm of bits & bytes.
          </p>
        </div>
      </div>
      <div className="absolute top-0 left-0 z-[1]">
        {/* <Hero/> */}
        <Hero2 />
      </div>
    </section>
  );
};

export default HeroComp;
