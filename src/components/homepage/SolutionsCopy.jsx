"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Copy from "../Copy";

gsap.registerPlugin(ScrollTrigger, SplitText);

const data = [
  {
    title: "Development",
    number: "001",
    para: "A human-centred, design-led approach to product development that leverages cutting-edge technologies & agile methodology, committed to putting you on a path to success in the ever-changing technological landscape. We craft digital solutions that are not just functional, but also intuitive and engaging.",
    list: Array(8).fill("user interface design"),
  },
  {
    title: "Design",
    number: "002",
    para: "We create seamless digital experiences by combining aesthetics with functionality. Our design philosophy is rooted in empathy, ensuring we solve real problems for real people.",
    list: Array(8).fill("UX research"),
  },
  {
    title: "Marketing",
    number: "003",
    para: "We amplify your message through data-driven strategies and creative storytelling, ensuring your brand reaches and resonates with the right audience.",
    list: Array(8).fill("campaign planning"),
  },
  {
    title: "Strategy",
    number: "004",
    para: "From brand positioning to digital transformation, we craft holistic strategies that align your business goals with meaningful customer experiences.",
    list: Array(8).fill("growth strategy"),
  },
];

const SolutionCard = ({ title, number, para, list, index }) => {
  const titleRef = useRef(null);
  const paraRef = useRef(null);
 useEffect(() => {
    sectionsRef.current.forEach((el, index) => {
      const title = el.querySelector(".title");
      const para = el.querySelector(".para");

      const splitTitle = new SplitText(title, {
        type: "lines",
        linesClass: "overflow-hidden block",
      });
      const splitPara = new SplitText(para, {
        type: "lines",
        linesClass: "overflow-hidden block",
      });

      gsap.set([splitTitle.lines, splitPara.lines], {
        yPercent: 100,
        opacity: 0,
      });

      gsap.to([splitTitle.lines, splitPara.lines], {
        scrollTrigger: {
          trigger: el,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
        yPercent: 0,
        opacity: 1,
        stagger: 0.1,
        ease: "power3.out",
        duration: 1,
      });
    });
  }, []);

  return (
    <div className="w-full flex flex-col absolute top-0 left-0 px-[4vw] h-full z-[3]">
      <h2 className="w-full flex justify-between">
        <Copy>
          <span ref={titleRef} className="capitalize">
            {title}
          </span>
        </Copy>
        <span>{number}</span>
      </h2>

      <span className="w-full h-[1px] bg-black mt-[7vw] mb-[2vw]" />

      <div className="flex flex-col gap-[5vw]">
        <Copy>
          <p ref={paraRef} className="w-[70%] text-[1.5vw]">
            {para}
          </p>
        </Copy>

        <div className="w-full flex justify-between items-end">
          <div className="w-[70%] flex flex-wrap uppercase h-fit text-[0.9vw] gap-x-[4vw] gap-y-[1.5vw]">
            {list.map((content, index) => (
              <div key={index} className="flex w-[25%] flex-col gap-[0.5vw] h-fit">
                <Copy>
                  <p>{content}</p>
                </Copy>
                <span className="w-full h-[1px] bg-black" />
              </div>
            ))}
          </div>

          <button className="w-fit flex">
            <div className="w-fit h-full px-[3.5vw] py-[0.7vw] text-white rounded-full border border-white font-medium font-display">
              Know More
            </div>
            <div className="w-[3.4vw] h-[3.4vw] p-[1.1vw] rounded-full border border-white">
              <Image
                src={"/assets/icons/arrow-diagonal.svg"}
                alt="arrow-diagonal"
                width={50}
                height={50}
                className="w-full h-full object-contain"
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

const SolutionsCopy = () => {
  const containerRef = useRef(null);

  return (
    <section
      ref={containerRef}
      className="w-screen h-[400vh] pt-[5%] relative bg-[#fefefe] solutions-container"
    >
      <div className="w-screen h-screen sticky top-[15%]">
      <div className="w-full flex flex-col absolute top-0 left-0 px-[4vw] h-full z-[3]">
        <div className="w-full flex justify-between">
      <h2 className="w-full flex flex-col overflow-hidden justify-start gap-[2vw]">
       
          <span  className="capitalize">
            Development
          </span>
      
      </h2>
        <div className="text-[8vw] leading-[1.2] font-display flex">
            
            00<div className=" flex flex-col gap-[1vw]">
             <span>1</span>
            </div>
            
            </div>

        </div>

      <span className="w-full h-[1px] bg-black mt-[7vw] mb-[2vw]" />

      <div className="flex flex-col gap-[5vw]">
     
          <p  className="w-[70%] text-[1.5vw]">
          A human-centred, design-led approach to product development that leverages cutting-edge technologies & agile methodology, committed to putting you on a path to success in the ever-changing technological landscape. We craft digital solutions that are not just functional, but also intuitive and engaging.
          </p>
   

        <div className="w-full flex justify-between items-end">
          {/* <div className="w-[70%] flex flex-wrap uppercase h-fit text-[0.9vw] gap-x-[4vw] gap-y-[1.5vw]">
            {list.map((content, index) => (
              <div key={index} className="flex w-[25%] flex-col gap-[0.5vw] h-fit">
                <Copy>
                  <p>{content}</p>
                </Copy>
                <span className="w-full h-[1px] bg-black" />
              </div>
            ))}
          </div> */}

          <button className="w-fit flex">
            <div className="w-fit h-full px-[3.5vw] py-[0.7vw] text-white rounded-full border border-white font-medium font-display">
              Know More
            </div>
            <div className="w-[3.4vw] h-[3.4vw] p-[1.1vw] rounded-full border border-white">
              <Image
                src={"/assets/icons/arrow-diagonal.svg"}
                alt="arrow-diagonal"
                width={50}
                height={50}
                className="w-full h-full object-contain"
              />
            </div>
          </button>
        </div>
      </div>
    </div>
      </div>
    </section>
  );
};

export default SolutionsCopy;
