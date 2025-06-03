import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WaveShader from "../WaveShader";

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

const SolutionCard = ({ title, number, para, list }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="w-full flex flex-col relative z-[3] h-screen"
    >
      <motion.h2 
        className="w-full flex justify-between"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        <span className="capitalize">{title}</span>
        <span>{number}</span>
      </motion.h2>
      
      <motion.span 
        className="w-full h-[1px] bg-black mt-[7vw] mb-[2vw]"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        style={{ transformOrigin: "left" }}
      />
      
      <div className="flex flex-col gap-[5vw]">
        <motion.p 
          className="w-[70%] text-[1.5vw]"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {para}
        </motion.p>
        
        <div className="w-full flex justify-between items-end">
          <motion.div 
            className="w-[70%] flex flex-wrap uppercase h-fit text-[0.9vw] gap-x-[4vw] gap-y-[1.5vw]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            {list.map((content, index) => (
              <motion.div 
                key={index} 
                className="flex w-[25%] flex-col gap-[0.5vw] h-fit"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.3 }}
              >
                <p className="">{content}</p>
                <span className="w-full h-[1px] bg-black" />
              </motion.div>
            ))}
          </motion.div>
          
          <motion.button 
            className="w-fit flex"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const containerRef = useRef(null);
  const scrollTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = (e) => {
      e.preventDefault();
      if (isScrolling) return;
      const delta = e.deltaY;
      if (Math.abs(delta) < 10) return;
      setIsScrolling(true);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      if (delta > 0 && currentIndex < data.length - 1) {
        setCurrentIndex(prev => {
          console.log('Scrolling down from', prev, 'to', prev + 1);
          return prev + 1;
        });
      } else if (delta < 0 && currentIndex > 0) {
        setCurrentIndex(prev => {
          console.log('Scrolling up from', prev, 'to', prev - 1);
          return prev - 1;
        });
      } else {
        setIsScrolling(false);
        return;
      }
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleScroll, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleScroll);
      }
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [currentIndex, isScrolling]);


  return (
    <section 
      ref={containerRef}
      className="w-screen px-[4vw] h-screen py-[5vw] relative overflow-hidden"
    >
      <AnimatePresence mode="wait">
        <SolutionCard
          key={currentIndex}
          title={data[currentIndex].title}
          para={data[currentIndex].para}
          number={data[currentIndex].number}
          list={data[currentIndex].list}
        />
      </AnimatePresence>

      <div className="absolute bottom-0 left-0 h-screen w-screen z-[2]">
        <WaveShader
          topColor={[1.0, 1.0, 1.0]}
          middleColor={[1.0, 0.4, 0.0]}
          bottomColor={[1.0, 0.3, 0.0]}
          reverse={false}
          amplitude={0.1}
        />
      </div>
    </section>
  );
};

export default Solutions;