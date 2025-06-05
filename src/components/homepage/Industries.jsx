"use client";
import Image from "next/image";
import React, { useEffect } from "react";
// import WaveShader from "../WaveShader";
import gsap from "gsap";
import WaveShader from "@/components/WaveShader";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import Copy from "../Copy";

gsap.registerPlugin(ScrollTrigger, SplitText);

const IndustriesCopy = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
        const el1 = document.querySelector(".industry-para-1");
        const el2 = document.querySelector(".industry-para-2");
        const el3 = document.querySelector(".industry-para-3");
        const split1 = new SplitText(el1, {
            type: "lines",
            linesClass: "para-line"
          });
        const split2 = new SplitText(el2, {
            type: "lines",
            linesClass: "para-line"
          });
        const split3 = new SplitText(el3, {
            type: "lines",
            linesClass: "para-line"
          });
          gsap.set(split1.lines, { overflow: "hidden", display: "block" });
          gsap.set(split2.lines, { overflow: "hidden", display: "block" });
          gsap.set(split3.lines, { overflow: "hidden", display: "block" });
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#industry",
          start: "top top",
          end: "90% top",
          scrub: true,
        //   markers: true,
        },
        defaults:{
          ease:"none"
        }
      })
      gsap.set(".industry-image-1 , .industry-image-2 , .industry-image-3",{
        rotateX:-50,
        // rotateZ:-10,
        rotateY:90,
        yPercent:-40,
        scaleX:0.5,
        scaleY:0.5,
      })
     gsap.fromTo(".industry-container",{
        xPercent:50,
     },{
        xPercent:-150,
        ease:"none",
        scrollTrigger: {
            trigger: "#industry",
            start: "top top",
            end: "bottom bottom",
            scrub: true,
            // markers: true,
          },

     })
      
      tl.to(".industry-heading-1", {
        rotate: 0,
        // delay: -0.5,
      })
      .to(".industry-image-1",{
        rotateX:0,
        rotateZ:0,
        yPercent:0,
        rotateY:0,
        scaleX:1,
        scaleY:1,
        delay:-0.5
      })
      .from(split1.lines, {
        yPercent: 100,
        opacity: 0,
        delay:-0.3,
        stagger: 0.1,
        ease: "power2.out",
      })
      .fromTo(".industry-1-container",{
        yPercent:60,
      },{
        delay:-1.2,
        duration:2,
        yPercent:-50,
      })
      
      tl.to(".industry-heading-2", {
        rotate: 0,
        delay: -1.2,
      })
      .to(".industry-image-2",{
        rotateX:0,
        rotateZ:0,
        yPercent:0,
        rotateY:0,
        scaleX:1,
        scaleY:1,
        delay:-1.2
      })
      .from(split2.lines, {
        yPercent: 100,
        opacity: 0,
        delay:-1,
        stagger: 0.1,
        ease: "power2.out",
      })
      .fromTo(".industry-2-container",{
        yPercent:80,
      },{
        // xPercent:-220,
        delay:-1.3,
        duration:2,
        yPercent:-70,
      })
         
      tl.to(".industry-heading-3", {
        rotate: 0,
        delay: -1.1,
      })
      .to(".industry-image-3",{
        rotateX:0,
        rotateZ:0,
        yPercent:0,
        rotateY:0,
        scaleX:1,
        scaleY:1,
        delay:-1.1
      })
      .from(split3.lines, {
        yPercent: 100,
        opacity: 0,
        delay:-1,
        stagger: 0.1,
        ease: "power2.out",
      })
      .fromTo(".industry-3-container",{
        yPercent:80,
      },{
        // xPercent:-220,
        delay:-1.2,
        duration:1,
        yPercent:-20,
      })
    });
    return () => ctx.revert();
  }, []);
  return (
    <section
      className="w-screen h-[500vh] relative bg-black-1 py-[8%] pt-[25%]"
      id="industry"
    >
      <div className="w-full z-[6] relative">
        <div className="flex flex-col items-center justify-between gap-[12vw]  w-full">
          <div className="flex items-center justify-center text-center w-full">
            <Copy>
            <h2 className="text-[#C7C7C7] w-[70%]">Industries We Work with</h2>
            </Copy>
          </div>
        </div>
      </div>
      <div className="w-screen h-screen sticky top-0 pt-[5%] z-[20] industry-container ">
        <div className="w-fit h-fit absolute right-[-5%] bottom-[30%] industry-1-container">
          <p className="text-[8vw] text-white leading-[1.05] font-display pb-[3vw] industry-heading-1 rotate-[20deg]">
            Fintech
          </p>
          <div className="flex items-start justify-between w-[55vw]">
            <div className=" w-[25vw] h-[15vw] " style={{perspective:"30rem"}}>
              <Image
                src={"/assets/images/homepage/industries/fintech.png"}
                height={330}
                width={544}
                alt="fintech"
                className="w-full h-full object-cover industry-image-1 rounded-[1.5vw]"
              />
            </div>
            <p className="text-white w-[40%] industry-para-1">
              For BSFI-Fintech brands, we offer full-funnel digital marketing
              solutions that power growth at every stage. By merging data-driven
              strategies with innovative creative execution, we optimize
              customer journeys, boost product adoption, and secure long-term
              success in a rapidly evolving digital ecosystem.
            </p>
          </div>
        </div>
        <div className="w-fit h-fit absolute right-[-5%] translate-x-[120%] bottom-[30%] industry-2-container">
          <p className="text-[8vw] text-white leading-[1.05] font-display pb-[3vw] industry-heading-2 rotate-[15deg]">
            Fintech
          </p>
          <div className="flex items-start justify-between w-[55vw]">
            <div className=" w-[25vw] h-[15vw]" style={{perspective:"30rem"}}>
              <Image
                src={"/assets/images/homepage/industries/fintech.png"}
                height={330}
                width={544}
                alt="fintech"
                className="w-full h-full object-cover industry-image-2 rounded-[1.5vw]"
              />
            </div>
            <p className="text-white w-[40%] industry-para-2">
              For BSFI-Fintech brands, we offer full-funnel digital marketing
              solutions that power growth at every stage. By merging data-driven
              strategies with innovative creative execution, we optimize
              customer journeys, boost product adoption, and secure long-term
              success in a rapidly evolving digital ecosystem.
            </p>
          </div>
        </div>
        <div className="w-fit h-fit absolute right-[-5%] translate-x-[240%] bottom-[30%] industry-3-container">
          <p className="text-[8vw] text-white leading-[1.05] font-display pb-[3vw] industry-heading-3 rotate-[15deg]">
            Fintech
          </p>
          <div className="flex items-start justify-between w-[55vw]">
            <div className=" w-[25vw] h-[15vw]" style={{perspective:"30rem"}}>
              <Image
                src={"/assets/images/homepage/industries/fintech.png"}
                height={330}
                width={544}
                alt="fintech"
                className="w-full h-full object-cover industry-image-3 rounded-[1.5vw]"
              />
            </div>
            <p className="text-white w-[40%] industry-para-3">
              For BSFI-Fintech brands, we offer full-funnel digital marketing
              solutions that power growth at every stage. By merging data-driven
              strategies with innovative creative execution, we optimize
              customer journeys, boost product adoption, and secure long-term
              success in a rapidly evolving digital ecosystem.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full z-[5] flex justify-between">
        <span className="bg-[#CFCFCF63] h-full w-[1px] block opacity-[0.2]" />
        <span className="bg-[#CFCFCF63] h-full w-[1px] block opacity-[0.2]" />
        <span className="bg-[#CFCFCF63] h-full w-[1px] block opacity-[0.2]" />
        <span className="bg-[#CFCFCF63] h-full w-[1px] block opacity-[0.2]" />
        <span className="bg-[#CFCFCF63] h-full w-[1px] block opacity-[0.2]" />
        <span className="bg-[#CFCFCF63] h-full w-[1px] block opacity-[0.2]" />
        <span className="bg-[#CFCFCF63] h-full w-[1px] block opacity-[0.2]" />
        <span className="bg-[#CFCFCF63] h-full w-[1px] block opacity-[0.2]" />
      </div>
      <div className="absolute top-0 left-0 h-[10vh] w-screen z-[2]">
        <WaveShader
          topColor={[0.0235, 0.0275, 0.0353]}
          middleColor={[1.0, 0.37, 0.0]}
          bottomColor={[1.0, 0.3, 0.0]}
          reverse={true}
          amplitude={0.1}
        />
      </div>
    </section>
  );
};

export default IndustriesCopy;
