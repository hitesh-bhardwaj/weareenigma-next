import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import WaveShader from "../WaveShader";
import Copy from "../Copy";
import { lineAnim } from "../gsapAnimations";

const data = [
  {
    title: "Development",
    number: "001",
    para: " A human-centred, design-led approach to product development that leverages cutting-edge technologies & agile methodology, committed to putting you on a path to success in the ever-changing technological landscape. We craft digital solutions that are not just functional, but also intuitive and engaging.",
    list: [
      "user interface design",
      "user interface design",
      "user interface design",
      "user interface design",
      "user interface design",
      "user interface design",
      "user interface design",
      "user interface design",
    ]
  },
  {
    title: "Design",
    number: "002",
    para: " A human-centred, design-led approach to product development that leverages cutting-edge technologies & agile methodology, committed to putting you on a path to success in the ever-changing technological landscape. We craft digital solutions that are not just functional, but also intuitive and engaging.",
    list: [
      "user interface design",
      "user interface design",
      "user interface design",
      "user interface design",
      "user interface design",
      "user interface design",
      "user interface design",
      "user interface design",
    ]
  },
  {
    title: "Marketing",
    number: "003",
    para: " A human-centred, design-led approach to product development that leverages cutting-edge technologies & agile methodology, committed to putting you on a path to success in the ever-changing technological landscape. We craft digital solutions that are not just functional, but also intuitive and engaging.",
    list: [
      "user interface design",
      "user interface design",
      "user interface design",
      "user interface design",
      "user interface design",
      "user interface design",
      "user interface design",
      "user interface design",
    ]
  },
  {
    title: "Strategy",
    number: "004",
    para: " A human-centred, design-led approach to product development that leverages cutting-edge technologies & agile methodology, committed to putting you on a path to success in the ever-changing technological landscape. We craft digital solutions that are not just functional, but also intuitive and engaging.",
    list: [
      "user interface design",
      "user interface design",
      "user interface design",
      "user interface design",
      "user interface design",
      "user interface design",
      "user interface design",
      "user interface design",
    ]
  },
];

const SolutionCard = ({ title, number, para, list, opacity, translateY }) => {
  return (
    <motion.div
    style={{ opacity, y: translateY }}
    className="w-full flex flex-col absolute top-0 left-0 px-[4vw] h-full z-[3]"
  >
      <motion.h2 className="w-full flex justify-between" >
        <Copy>
        <span className="capitalize">{title}</span>
        </Copy>
        <span>{number}</span>
      </motion.h2>

      <motion.span className="w-full h-[1px] bg-black mt-[7vw] mb-[2vw]" />

      <div className="flex flex-col gap-[5vw]">
        <Copy>
        <motion.p className="w-[70%] text-[1.5vw]">{para}</motion.p>
        </Copy>

        <div className="w-full flex justify-between items-end">
          <motion.div className="w-[70%] flex flex-wrap uppercase h-fit text-[0.9vw] gap-x-[4vw] gap-y-[1.5vw]">
            {list.map((content, index) => (
              <div
                key={index}
                className="flex w-[25%] flex-col gap-[0.5vw] h-fit"
              >
                <Copy>
                <p>{content}</p>
                </Copy>
                <span className="w-full h-[1px] bg-black " />
              </div>
            ))}
          </motion.div>

          <motion.button className="w-fit flex">
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
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

const Solutions = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const totalSections = data.length;

  const cardTransforms = data.map((_, index) => {
    const sectionHeight = 1 / totalSections;
    const start = index * sectionHeight;
    const mid = start + sectionHeight / 2;
    const end = (index + 1) * sectionHeight;
  
    const isFirst = index === 0;
    const isLast = index === data.length - 1;
  
    const opacity = isFirst
      ? useTransform(scrollYProgress, [start, end], [1, 0])
      : isLast
      ? useTransform(scrollYProgress, [start, end], [0, 1])
      : useTransform(scrollYProgress, [start, mid, end], [0, 1, 0]);
  
    const translateY = isFirst
      ? useTransform(scrollYProgress, [start,mid, end], [50,0, -50])
      : isLast
      ? useTransform(scrollYProgress, [start, end], [50, 0])
      : useTransform(scrollYProgress, [start, mid, end], [50, 0, -50]);
  
    return { opacity, translateY };
  });
  
  

  return (
    <section
      ref={containerRef}
      className="w-screen h-[400vh] pt-[5%] relative bg-[#fefefe] solutions-container"
    >
      <div className="w-screen h-screen sticky top-[5%] ">
        {data.map((card, i) => (
          <SolutionCard
            key={i}
            title={card.title}
            para={card.para}
            number={card.number}
            list={card.list}
            opacity={cardTransforms[i].opacity}
            translateY={cardTransforms[i].translateY}
          />
        ))}

        <div className="absolute bottom-0 left-0 h-screen w-screen z-[2]">
          <WaveShader
            topColor={[1.0, 1.0, 1.0]}
            middleColor={[1.0, 0.4, 0.0]}
            bottomColor={[1.0, 0.3, 0.0]}
            reverse={false}
            amplitude={0.1}
          />
        </div>
      </div>
    </section>
  );
};


export default Solutions;