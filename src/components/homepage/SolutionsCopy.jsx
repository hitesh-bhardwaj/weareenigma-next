"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger, SplitText);

const data = [
  {
    para: "A human-centred, design-led approach to product development that leverages cutting-edge technologies.A human-centred, design-led approach to product development that leverages cutting-edge technologies.",
    list: ["user interface design", "user interface design", "Design Systems Creation", "Design Systems Creation","user interface design", "Design Systems Creation", "Design Systems Creation"],
    link:"#"
  },
  {
    para: "We create seamless digital experiences by combining aesthetics with functionality.A human-centred, design-led approach to product development that leverages cutting-edge technologies.",
    list: ["Design Systems Creation", "Design Systems Creation", "user interface design", "user interface design","user interface design", "Design Systems Creation", "Design Systems Creation"],
    link:"#"
  },
  {
    para: "We amplify your message through data-driven strategies and creative storytelling.A human-centred, design-led approach to product development that leverages cutting-edge technologies.",
    list: ["Design Systems Creation", "user interface design", "user interface design", "Design Systems Creation","user interface design", "Design Systems Creation", "Design Systems Creation"],
    link:"#"
  },
  {
    para: "From brand positioning to digital transformation, we craft holistic strategies.A human-centred, design-led approach to product development that leverages cutting-edge technologies.",
    list: ["user interface design", "Design Systems Creation", "Design Systems Creation", "user interface design","user interface design", "Design Systems Creation", "Design Systems Creation"],
    link:"#"
  },
];

const SolutionsCopy = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const indexRef = useRef(null);
  const paraRefs = useRef([]);
  const listRefs = useRef([]);
  const buttonRefs = useRef([]);
  let currentStep = useRef(-1);
  let isTransitioning = useRef(false);

  paraRefs.current = [];
  listRefs.current = [];
  buttonRefs.current = [];

  const addParaToRefs = (el) => {
    if (el && !paraRefs.current.includes(el)) {
      paraRefs.current.push(el);
    }
  };

  const addListToRefs = (el) => {
    if (el && !listRefs.current.includes(el)) {
      listRefs.current.push(el);
    }
  };

  const addButtonToRefs = (el) => {
    if (el && !buttonRefs.current.includes(el)) {
      buttonRefs.current.push(el);
    }
  };

  // Function to prevent scrolling
  const preventScroll = (e) => {
    e.preventDefault();
    e.stopPropagation();
    return false;
  };

  // Function to disable scrolling
  const disableScroll = () => {
    document.addEventListener('wheel', preventScroll, { passive: false });
    document.addEventListener('touchmove', preventScroll, { passive: false });
    document.addEventListener('keydown', (e) => {
      if ([32, 33, 34, 35, 36, 37, 38, 39, 40].includes(e.keyCode)) {
        preventScroll(e);
      }
    });
  };

  // Function to enable scrolling
  const enableScroll = () => {
    document.removeEventListener('wheel', preventScroll);
    document.removeEventListener('touchmove', preventScroll);
    document.removeEventListener('keydown', preventScroll);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const stepHeight = window.innerHeight;
      const shiftAmount = 25;
      const steps = data.length;
      const splitTextInstances = paraRefs.current.map(
        (el) => new SplitText(el, { type: "lines", mask: "lines" })
      );

    

      paraRefs.current.forEach((para) => gsap.set(para, { opacity: 0, y: 30 }));
      buttonRefs.current.forEach((button) => gsap.set(button, { opacity: 0, y: 30, zIndex: 1 }));

      const handleStepChange = (i) => {
        if (i < 0 || isTransitioning.current) return;
        
        isTransitioning.current = true;
        currentStep.current = i;
        
        // Disable scrolling for 1 second
        disableScroll();
        
        // Re-enable scrolling after 1 second
        setTimeout(() => {
          enableScroll();
          isTransitioning.current = false;
        }, 500);

        gsap.to(titleRef.current, {
          yPercent: -shiftAmount * i,
          ease: "power1.out",
          duration: 0.6,
        });

        gsap.to(indexRef.current, {
          yPercent: -shiftAmount * i,
          ease: "power1.out",
          duration: 0.6,
        });

        paraRefs.current.forEach((el, j) => {
          if (j !== i) gsap.to(el, { opacity: 0, y: 30, duration: 0.4 });
        });

        const para = paraRefs.current[i];
        const split = splitTextInstances[i];
        gsap.to(para, { opacity: 1, duration: 0.5, delay: 0.2 });
        gsap.fromTo(
          split.lines,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.1,
            delay: 0.2,
            ease: "power2.out",
          }
        );

        listRefs.current.forEach((el, j) => {
          if (j !== i) gsap.to(el, { opacity: 0, y: 0, duration: 0.4 });
        });

        gsap.fromTo(
          listRefs.current[i],
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            delay: 0.3,
            duration: 0.7,
            ease: "power2.out",
            stagger: 0.1,
          }
        );

        // Handle button animations
        buttonRefs.current.forEach((button, j) => {
          if (j !== i) {
            gsap.to(button, { 
              opacity: 0, 
              y: -10, 
              duration: 0.4,
              zIndex: 1
            });
          }
        });

        // Animate active button
        gsap.fromTo(
          buttonRefs.current[i],
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            delay: 0.4,
            duration: 0.7,
            ease: "power2.out",
            zIndex: 10
          }
        );
      };

      for (let i = 0; i < steps; i++) {
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: `${i/2 * stepHeight}px top`,
          // end: `${(i + 1) * stepHeight}px bottom`,
          // markers:true,
          onEnter: () => handleStepChange(i),
          onLeaveBack: () => handleStepChange(i - 1),
          onEnterBack: () => handleStepChange(i),
        });
      }
    });

    return () => {
      ctx.revert();
      // Clean up event listeners on unmount
      enableScroll();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-screen h-[400vh] pt-[5%] z-[5] relative bg-[#fefefe] solutions-container"
    >
      <div className="w-screen h-screen sticky top-[10%]">
        <div className="w-full flex flex-col absolute top-0 left-0 px-[4vw] h-full z-[4]">
          <div className="w-full flex justify-between">
            <h2 className="w-full flex flex-col h-[19vh] justify-start gap-[2vw] overflow-hidden">
              <div ref={titleRef} className="flex flex-col solutions-title">
                <span className="capitalize">Development</span>
                <span className="capitalize">Design</span>
                <span className="capitalize">Marketing</span>
                <span className="capitalize">Strategy</span>
              </div>
            </h2>
            <div className="text-[8vw] leading-[1.2] font-display flex">
              00
              <div className="h-[18vh] overflow-hidden">
                <div ref={indexRef} className="flex flex-col solutions-index">
                  <span>1</span>
                  <span>2</span>
                  <span>3</span>
                  <span>4</span>
                </div>
              </div>
            </div>
          </div>

          <span className="w-full h-[1px] bg-black mt-[4vw]" />

          <div className="flex flex-col gap-[5vw] relative h-[10vw]">
            {data.map((item, i) => (
              <p
                key={i}
                ref={addParaToRefs}
                className="solutions-para w-[70%] text-[1.5vw] absolute top-0 left-0 font-medium"
              >
                {item.para}
              </p>
            ))}
          </div>

          <div className="w-full flex justify-between mt-[5vw]">
            <div className="w-[70%] uppercase text-[0.9vw] font-medium flex justify-between flex-wrap relative h-[12vw]">
              {data.map((item, i) => (
                <div
                  key={i}
                  ref={addListToRefs}
                  className="absolute top-0 left-0 w-full flex justify-start gap-x-[5vw] gap-y-[1vw] flex-wrap opacity-0"
                >
                  {item.list.map((text, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col gap-[0.7vw] w-[25%] list-content"
                    >
                      {text}
                      <span className="w-full h-[1px] bg-black"></span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
           
            <div className="relative w-[20%] h-fit mt-[20vh]">
              {data.map((item, i) => (
                <button 
                  key={i}
                  ref={addButtonToRefs}
                  className="w-fit flex group cursor-pointer absolute top-0 left-0 opacity-0"
                  style={{ zIndex: i === currentStep.current ? 10 : 1 }}
                >
                  <Link href={item.link} className="w-fit flex">
                    <div className="w-fit h-full px-[3.5vw] py-[0.7vw] text-black rounded-full border border-black font-medium font-display group-hover:bg-primary duration-300 ease-in-out">
                      Know More
                    </div>
                    <div className="w-[3.4vw] h-[3.4vw] p-[1.1vw] rounded-full border border-black group-hover:bg-primary duration-300 ease-in-out">
                      <Image
                        src={"/assets/icons/arrow-diagonal.svg"}
                        alt="arrow-diagonal"
                        width={50}
                        height={50}
                        className="w-full h-full object-contain invert"
                      />
                    </div>
                  </Link>
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="w-[110vw] h-auto absolute bottom-[-50%] left-0 z-[3]">
          <Image src={"/assets/images/gradient.webp"} alt="bg-gradient" width={1920} height={1080} className="w-full h-full object-cover"/>

        </div>
      </div>
    </section>
  );
};

export default SolutionsCopy;