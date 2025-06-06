import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useAnimation,
  useInView,
} from "framer-motion";
import WaveShader from "../WaveShader";
import Copy from "../Copy";
import { lineAnim } from "../gsapAnimations";
import { PrimaryButton } from "../Buttons";
import Link from "next/link";

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
    ],
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
    ],
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
    ],
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
    ],
  },
];

const SolutionCard = ({ title, number, para, list, opacity }) => {
  const controls = useAnimation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const unsubscribe = opacity.onChange((value) => {
      if (value > 0.5 && !visible) {
        setVisible(true);
        controls.start("visible");
      }
    });
    return unsubscribe;
  }, [opacity, visible, controls]);

  const lineVariant = {
    hidden: { scaleX: 0, originX: 0 },
    visible: { scaleX: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const textVariant = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      style={{ opacity }}
      className="w-full flex flex-col absolute top-0 left-0 px-[4vw] h-full z-[3]"
    >
      <motion.h2
        className="w-full flex justify-between"
        variants={textVariant}
        initial="hidden"
        animate={controls}
      >
        <Copy>
          <motion.span className="capitalize" variants={textVariant}>
            {title}
          </motion.span>
        </Copy>
        <motion.span variants={textVariant}>{number}</motion.span>
      </motion.h2>

      <motion.span
        className="w-full h-[1px] bg-black mt-[7vw] mb-[2vw]"
        variants={lineVariant}
        initial="hidden"
        animate={controls}
      />

      <div className="flex flex-col gap-[5vw]">
        <Copy>
          <motion.p
            className="w-[70%] text-[1.5vw]"
            variants={textVariant}
            initial="hidden"
            animate={controls}
          >
            {para}
          </motion.p>
        </Copy>

        <div className="w-full flex justify-between items-end">
          <motion.div
            className="w-[70%] flex flex-wrap uppercase h-fit text-[0.9vw] gap-x-[4vw] gap-y-[1.5vw]"
            variants={textVariant}
            initial="hidden"
            animate={controls}
          >
            {list.map((content, index) => (
              <motion.div
                key={index}
                className="flex w-[25%] flex-col gap-[0.5vw] h-fit"
                variants={textVariant}
              >
                <Copy>
                  <motion.p>{content}</motion.p>
                </Copy>
                <motion.span
                  className="w-full h-[1px] bg-black"
                  variants={lineVariant}
                />
              </motion.div>
            ))}
          </motion.div>

          <motion.button
            className="w-fit flex"
            variants={textVariant}
            initial="hidden"
            animate={controls}
          >
            <Link
              href={"#"}
              className="w-fit flex group hover:scale-[0.97] duration-500 ease-out relative z-[20]"
            >
              <div className="w-fit relative h-full px-[3.5vw] overflow-hidden py-[0.7vw] rounded-full border border-black-1 font-medium  font-display">
                <span className="z-[1] relative">know more</span>
                <span className="w-full h-full absolute bottom-0 left-0 bg-primary origin-bottom scale-y-0 group-hover:scale-y-100 duration-300 ease-out" />
              </div>
              <div className="w-[3.5vw] h-[3.5vw] p-[1.1vw] relative rounded-full border border-black-1 overflow-hidden">
                <span className="w-full h-full absolute bottom-0 left-0 bg-primary origin-bottom scale-y-0 group-hover:scale-y-100 duration-300 ease-out" />
                <Image
                  src={"/assets/icons/arrow-diagonal.svg"}
                  alt="arrow-diagonal"
                  width={50}
                  height={50}
                  className="w-full h-full object-contain group-hover:rotate-45 duration-300 invert"
                />
              </div>
            </Link>
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

    return { opacity };
  });

  return (
    <section
      ref={containerRef}
      className="w-screen h-[400vh] pt-[5%] relative bg-[#fefefe] solutions-container"
    >
      <div className="w-screen h-screen sticky top-[15%] z-[20] ">
        {data.map((card, i) => (
          <SolutionCard
            key={i}
            title={card.title}
            para={card.para}
            number={card.number}
            list={card.list}
            opacity={cardTransforms[i].opacity}
          />
        ))}
      </div>
    </section>
  );
};

export default Solutions;
