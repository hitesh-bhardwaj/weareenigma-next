"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { PrimaryButton } from "../Buttons";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Copy from "../Copy";

gsap.registerPlugin(ScrollTrigger);

const About = () => {

  return (
    <section className="w-screen h-screen px-[4vw] py-[10%] bg-black-1" id="about">
      <div className="w-full flex justify-between text-white">
        <div className="flex flex-col justify-between">

        
        <div className="flex gap-[1vw] items-center h-fit">
          <span className="w-[5px] h-[5px] rounded-full bg-white" />
          <Copy>
          <p className="text-[1.5vw] uppercase">OUR CAPABILITIES</p>
          </Copy>
        </div>
        <div
        className="h-[11.5vw] w-[20.5vw] rounded-[1vw] overflow-hidden "
      >
        <Image
          src={"/assets/images/solutions/video-poster.png"}
          height={222}
          width={395}
          className="h-full w-full object-cover"
          alt="About poster"
        />
      </div>
        </div>
        <div className="flex flex-col gap-[4vw] w-[57%]">
          <Copy>
          <h3>
            From Concept to Conversion We're Changing the Face of Web.
          </h3>
          </Copy>
          <Copy>
          <p className=" text-[1.5vw] text-[#c7c7c7] w-[90%]">
            We unravel complex design challenges through meticulous user research,
            expert analysis, prototyping, and collaborative design with users and
            stakeholders. Harnessing the power of cutting-edge tools and our
            proprietary approach we craft delightful and intuitive experiences.
          </p>
          </Copy>
          <PrimaryButton text={"Say Hi"} href={"#"} />
        </div>
      </div>

     
    </section>
  );
};

export default About;
