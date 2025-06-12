"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { PrimaryButton } from "../Buttons";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Copy from "../Copy";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(()=>{
    const ctx = gsap.context(()=>{
       gsap.to(".video-container",{
        top:"12%",
        left:"50%",
        scale:1,
        borderRadius:"2vw",
        ease:"none",
        scrollTrigger:{
          trigger:"#about",
          start:"top top",
          end:"80% bottom",
          scrub:true
        }
       })
    })
    return()=>ctx.revert()
  },[])

  return (
    <section className="w-screen h-[300vh] px-[4vw] py-[10%] pt-[20%] bg-black-1 relative" id="about">
      <div className="w-full flex justify-between text-white">
        <div className="flex flex-col justify-between">

        
        <div className="flex gap-[1vw] items-center h-fit">
          <span className="w-[5px] h-[5px] rounded-full bg-white" />
          <Copy>
          <p className="text-[1.5vw] uppercase">OUR CAPABILITIES</p>
          </Copy>
        </div>
        <div className="w-screen h-[300vh] absolute top-0 left-0 z-[10] flex pt-0">
          <div className="w-full h-[100vh] sticky top-0">

        <div
        className="h-[45vw] w-[90vw] rounded-[3vw] overflow-hidden scale-[0.25] translate-x-[-50%] absolute top-[35%] left-[15%] video-container"
      >
        <video
          src={"/assets/videos/showreel.mp4"}
          height={222}
          width={395}
          // controls
          muted
          autoPlay
          playsInline
          loop
          className="h-full w-full object-cover "
          alt="About poster"
        />
      </div>
          </div>

        </div>
        </div>
        <div className="flex flex-col gap-[4vw] w-[57%] relative z-[20]">
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
