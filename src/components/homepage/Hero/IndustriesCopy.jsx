"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import WaveShader from "../WaveShader";
import gsap from "gsap";

const Industries = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#industry",
          start: "30% top",
          end: "50% top",
          scrub: true,
          markers: true,
        },
        defaults:{
          ease:"none"
        }
      })
      gsap.set(".industry-image-1",{
        rotateX:-50,
        rotateY:80,
        scaleX:0.5,
        scaleY:0.5,
      })
     
      tl.from(".industry-1-container", {
        xPercent: 80,
        yPercent: 90,
      });
      tl.to(".industry-heading-1", {
        rotate: 0,
        delay: -0.5,
      })
      .to(".industry-image-1",{
        rotateX:0,
        rotateY:0,
        scaleX:1,
        scaleY:1,
        delay:-0.5
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
            <h2 className="text-[#C7C7C7] w-[70%]">Industries We Work with</h2>
          </div>
        </div>
      </div>
      <div className="w-screen h-screen sticky top-0 pt-[5%] z-[20] industry-container">
        <div className="w-fit h-fit absolute right-0 bottom-[30%] industry-1-container">
          <p className="text-[8vw] text-white leading-[1.05] font-display pb-[3vw] industry-heading-1 rotate-[20deg]">
            Fintech
          </p>
          <div className="flex items-start justify-between w-[55vw]">
            <div className=" w-[25vw] h-[15vw] overflow-hidden " style={{perspective:"30rem"}}>
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
        <div className="w-fit h-fit absolute right-0 translate-x-[100%] bottom-[30%] industry-2-container">
          <p className="text-[8vw] text-white leading-[1.05] font-display pb-[3vw] industry-heading-1 rotate-[15deg]">
            Fintech
          </p>
          <div className="flex items-start justify-between w-[55vw]">
            <div className=" w-[25vw] h-[15vw] overflow-hidden " style={{perspective:"30rem"}}>
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

export default Industries;
