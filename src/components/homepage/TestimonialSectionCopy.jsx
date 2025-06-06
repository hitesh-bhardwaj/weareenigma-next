"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const data = [
  {
    img: "/assets/images/homepage/testimonial/testimonial-image-1.png",
    name: "Paul Lees",
    designation: "CEO , Patronum",
    para:
      "Enigma Digital's mastery of web design and development is truly unparalleled. Their ability to craft a website that not only captured our essence but also transformed our digital presence is nothing short of miraculous. We are beyond thrilled with the results and can't thank the Enigma team enough for their tireless dedication and creativity. Our collaboration has been a game-changer for Wragby Business Solutions, and we wholeheartedly recommend Enigma Digital to anyone seeking a top-notch digital partner!",
  },
  {
    img: "/assets/images/homepage/testimonial/testimonial-image-1.png",
    name: "Alice Smith",
    designation: "CTO , TechCorp",
    para:
      "Their creativity and attention to detail elevated our brand beyond expectations. A phenomenal experience from start to finish.",
  },
  {
    img: "/assets/images/homepage/testimonial/testimonial-image-1.png",
    name: "John Doe",
    designation: "Marketing Lead, BigBiz",
    para:
      "Professional, passionate, and pixel-perfect. Working with Enigma Digital has been a true game-changer for our campaigns.",
  },
];

const TestimonialSectionCopy = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);
  const imageRef = useRef(null);
  const [lines, setLines] = useState([])
  const paraContainerRef = useRef(null);
  const nameRef = useRef(null);
  const desigRef = useRef(null);

  const splitParaRef = useRef(null);
  const splitNameRef = useRef(null);
  const splitDesigRef = useRef(null);

  const animateIn = () => {
    splitParaRef.current?.revert();
    splitNameRef.current?.revert();
    splitDesigRef.current?.revert();

    splitParaRef.current = new SplitText(paraContainerRef.current, {
      type: "lines",
      mask:"lines",
      linesClass: "testimonial-split-line overflow-hidden block",
    });

    splitNameRef.current = new SplitText(nameRef.current, {
      type: "lines",
      mask:"lines",
      linesClass: "testimonial-split-line overflow-hidden block",
    });

    splitDesigRef.current = new SplitText(desigRef.current, {
      type: "lines",
      mask:"lines",
      linesClass: "testimonial-split-line overflow-hidden block",
    });

    const allLines = [
      ...splitNameRef.current.lines,
      ...splitDesigRef.current.lines,
      ...splitParaRef.current.lines,
    ];

    gsap.set(allLines, { yPercent: 100 });
    gsap.to(allLines, {
      yPercent: 0,
      stagger: 0.1,
      ease: "power2.out",
      duration: 0.6,
    });
    gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "power2.out",
        }
      );
  };

  const animateOut = (onComplete) => {
    if (!splitParaRef.current || !splitNameRef.current || !splitDesigRef.current) return;

    const allLines = [
      ...splitNameRef.current.lines,
      ...splitDesigRef.current.lines,
      ...splitParaRef.current.lines,
    ];

    gsap.to(allLines, {
      yPercent: -100,
      stagger: 0.1,
      ease: "power2.in",
      duration: 0.5,
      onComplete,
    });
    gsap.to(imageRef.current, {
        opacity: 0,
        scale: 0.95,
        duration: 0.4,
        ease: "power2.in",
      });
      
  };

  const updateContent = (i) => {
    splitParaRef.current?.revert();
    splitNameRef.current?.revert();
    splitDesigRef.current?.revert();

    paraContainerRef.current.textContent = data[i].para;
    nameRef.current.textContent = data[i].name;
    desigRef.current.textContent = data[i].designation;
  };

  const goToIndex = (i) => {
    if (i === activeIndex) return;
    animateOut(() => {
      updateContent(i);
      setActiveIndex(i);
      animateIn();
    });
  };

  useEffect(() => {
    updateContent(activeIndex);
    animateIn();

    intervalRef.current = setInterval(() => {
      const nextIndex = (activeIndex + 1) % data.length;
      goToIndex(nextIndex);
    }, 6000);

    return () => {
      clearInterval(intervalRef.current);
      splitParaRef.current?.revert();
      splitNameRef.current?.revert();
      splitDesigRef.current?.revert();
    };
  }, []);

  // Reset interval on dot click
  useEffect(() => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      const nextIndex = (activeIndex + 1) % data.length;
      goToIndex(nextIndex);
    }, 6000);
  }, [activeIndex]);

    useEffect(() => {
      const lineCount = 150
      const generatedLines = Array.from({ length: lineCount }).map((_, i) => ({
        height: Math.floor(Math.random() * 20 + 15),
        delay: (i % 10) * 0.1,
      }))
      setLines(generatedLines)
    }, [])

  return (
    <section className="w-screen h-screen px-[4vw] bg-gradient text-white relative overflow-hidden opacity-0" id="testimonial-section">
      <div className="w-full h-full flex justify-between pl-[10vw] pt-[12%]">
        <div className="flex flex-col gap-[0.5vw]">
          <Image
            src={data[activeIndex].img}
            ref={imageRef}
            alt="testimonial"
            width={100}
            height={100}
            className="w-[7.5vw] h-[7.5vw] rounded-full"
          />
          <p ref={nameRef} className="text-[5vw] font-display leading-[1] mt-[1.5vw]" />
          <p ref={desigRef} className="text-[1.2vw]" />
        </div>

        <div className="flex flex-col gap-[2vw] w-[45%] relative">
          <Image
            src={"/assets/icons/quote-icon.svg"}
            alt="quote icon"
            width={50}
            height={50}
          />
          <p
            ref={paraContainerRef}
            className="testimonial-para text-[1.1vw] font-light leading-[1.6] pr-[4vw]"
          />

          {/* Pagination dots */}
        </div>
      </div>
          <div className="absolute left-[6.4%] top-[-8.2%] h-full flex flex-col items-center justify-center gap-[1vw]">
            {data.map((_, i) => (
                <div key={i}
                 className={`border rounded-full p-[0.15vw] flex justify-center items-center  ${i===activeIndex?"border-white":"border-transparent"}`}>

                    <div
                      
                      onClick={() => goToIndex(i)}
                      className={` transition-all cursor-pointer rounded-full bg-white ${
                        i === activeIndex
                          ? "h-[0.8vw] w-[0.8vw] opacity-100"
                          : "h-[0.6vw] w-[0.6vw] opacity-50"
                      }`}
                    />

                    </div>
            ))}
          </div>
          <div className='w-screen absolute bottom-[-5vw] left-0 h-[30vh]'>
          <div className="w-full absolute bottom-0 left-0 h-[30vh] flex justify-between items-end">
            {lines.map((line, i) => (
              <div
                key={i}
                className="testimonial-line bg-white w-[1px]"
                style={{
                  height: `${line.height}vh`,
                  animationDelay: `${line.delay}s`
                }}
              />
            ))}
          </div>
        </div>
    </section>
  );
};

export default TestimonialSectionCopy;
