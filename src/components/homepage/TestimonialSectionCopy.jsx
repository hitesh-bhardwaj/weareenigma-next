"use client";
import React, { useEffect, useRef } from "react";
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
      "Enigma Digital's mastery of web design and development is truly unparalleled. Their ability to craft a website that not only captured our essence but also transformed our digital presence is nothing short of miraculous.",
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

const TestimonialSection = () => {
  const paraContainerRef = useRef(null);
  const nameRef = useRef(null);
  const desigRef = useRef(null);
  const indexRef = useRef(0);
  const splitRef = useRef(null); // Store the active SplitText instance for cleanup

  const animateIn = () => {
    if (splitRef.current) splitRef.current.revert(); // Clean up any previous instance
    splitRef.current = new SplitText(paraContainerRef.current, {
      type: "lines",
      linesClass: "testimonial-split-line overflow-hidden block",
    });

    gsap.set(splitRef.current.lines, { yPercent: 100, opacity: 0 });
    gsap.to(splitRef.current.lines, {
      yPercent: 0,
      opacity: 1,
      stagger: 0.1,
      ease: "power2.out",
      duration: 0.6,
    });
  };

  const animateOut = (onComplete) => {
    if (!splitRef.current) return;
    gsap.to(splitRef.current.lines, {
      yPercent: -100,
      opacity: 0,
      stagger: 0.1,
      ease: "power2.in",
      duration: 0.5,
      onComplete,
    });
  };

  const updateContent = (i) => {
    paraContainerRef.current.innerText = data[i].para;
    nameRef.current.innerText = data[i].name;
    desigRef.current.innerText = data[i].designation;
  };

  useEffect(() => {
    // Initial setup
    updateContent(indexRef.current);
    animateIn();

    const interval = setInterval(() => {
      animateOut(() => {
        indexRef.current = (indexRef.current + 1) % data.length;
        updateContent(indexRef.current);
        animateIn();
      });
    }, 6000);

    return () => {
      clearInterval(interval);
      if (splitRef.current) splitRef.current.revert();
    };
  }, []);

  return (
    <section className="w-screen h-screen px-[4vw] bg-gradient text-white relative overflow-hidden">
      <div className="w-full h-full flex justify-between pl-[5vw] pt-[12%]">
        <div className="flex flex-col gap-[1vw]">
          <Image
            src="/assets/images/homepage/testimonial/testimonial-image-1.png"
            alt="testimonial"
            width={100}
            height={100}
            className="w-[7.5vw] h-[7.5vw] rounded-full"
          />
          <p ref={nameRef} className="text-[5.5vw] font-display leading-[1]" />
          <p ref={desigRef} className="text-[1.2vw]" />
        </div>

        <div className="flex flex-col gap-[2vw] w-[45%]">
          <Image
            src={"/assets/icons/quote-icon.svg"}
            alt="quote icon"
            width={50}
            height={50}
          />
          <p
            ref={paraContainerRef}
            className="testimonial-para text-[1.1vw] font-light leading-[1.6]"
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
