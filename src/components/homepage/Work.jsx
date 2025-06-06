"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import WaveShader from "../WaveShader";
import Copy from "../Copy";
import { fadeUpAnim } from "../gsapAnimations";
gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  fadeUpAnim();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".work-container",{
        scale:0.9,
        scrollTrigger:{
          trigger:"#work",
          start:"top 80%",
          end:"10% 80%",
          scrub:true,
        }
      })
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#work",
          start: "top top",
          end: "93% bottom",
          scrub: true,
          // markers: true,
        },
        defaults: {
          ease: "none",
        }
      });
      tl.to(".work-1-mockup-container", {
        xPercent: -105,
        ease: "none",
      })
        .to(".work-1-mockup", {
          clipPath: "inset(100% 0% 0% 0%)",
          delay: -0.5,
          ease: "none",
        })
        .to(".work-mockup-1-img", {
          scale: 1.4,
          delay: -0.5,
          // ease:"none"
        })
        .from(".work-mockup-2-img", {
          scale: 1.4,
          delay: -0.5,
          // ease:"none"
        })
        .to(".work-1-content", {
          scale: 0.9,
          delay: -0.5,
          opacity: 0.3,
          ease: "none",
        })
        .to(".work-2-mockup", {
          yPercent: -110,
          delay: -0.3,
          ease: "none",
        })
        .to(".work-1-content", {
          // scale:0.9,
          // delay:-0.2,
          opacity: 0,
          duration: 0,
          ease: "none",
        })
        .to(".work-1-mockup-container", {
          scale: 0.9,
          delay: 0,
          opacity: 0.3,
          ease: "none",
          onStart: () => {
            gsap.to(".work-1-mockup-container", {
              zIndex: 0,
              duration: 0,
            });
          },
          onReverseComplete: () => {
            gsap.to(".work-1-mockup-container", {
              zIndex: 4,
              duration: 0,
            });
          },
        })
        .to(".work-2-mockup", {
          xPercent: -104,
          delay: -0.5,
          ease: "none",
        })
        .to(".work-3-mockup-container", {
          yPercent: -110,
          ease: "none",
          delay: -0.5,
        });
    });
    return () => ctx.revert();
  }, []);
  return (
    <section
      className="w-screen h-[550vh] px-[4vw] py-[7vw] bg-black-1 relative z-0 dark"
      id="work"
    >
      <div className="w-full h-[100vh] flex flex-wrap justify-between gap-[1.5vw] gap-y-[5vw] sticky top-[5%] !z-[4] work-container">
        <div className="w-[45vw] h-[90vh] rounded-[2.5vw] bg-primary p-[2vw] flex flex-col justify-between work-1-content">
          <Copy>
          <p className="text-[8vw] w-[75%] font-display leading-[1]">
            Garden City Mall
          </p>
          </Copy>
          <div className="flex justify-between text-white ">
            <span className="fadeupanim">2023</span>
            <div className="flex gap-[2.5vw]">
              <span className="fadeupanim">Web Design</span>
              <span className="fadeupanim">Branding</span>
              <span className="fadeupanim">Marketing</span>
            </div>
          </div>
        </div>
        <div className="w-[45vw] h-[90vh] rounded-[2.5vw] overflow-hidden  flex justify-center items-center work-1-mockup-container relative z-[4]">
          <div
            className="w-full h-full bg-[#33EAFF] absolute z-[2] work-1-mockup "
            style={{ clipPath: "inset(0% 0% 0% 0%)" }}
          >
            <Image
              src={"/assets/images/homepage/work/work-mockup-1.png"}
              alt=""
              className="w-full h-full object-contain work-mockup-1-img"
              width={800}
              height={500}
            />
          </div>
          <div className="w-full h-[90vh] absolute rounded-[2.5vw] bg-[#FF2226] flex flex-col justify-between work-2-content">
            <Image
              src={"/assets/images/homepage/work/work-mockup-1.png"}
              alt=""
              className="w-full h-full object-contain work-mockup-2-img"
              width={800}
              height={500}
            />
          </div>
        </div>
        <div className="w-[45vw] h-[90vh] rounded-[2.5vw] overflow-hidden bg-primary p-[2vw] flex flex-col justify-between work-2-mockup translate-x-[104%] z-[3]">
          <Copy>
          <p className="text-[8vw] w-[75%] font-display leading-[1]">
            Garden City Mall
          </p>
          </Copy>
          <div className="flex justify-between text-white">
            <span>2023</span>
            <div className="flex gap-[2.5vw]">
              <span>Web Design</span>
              <span>Branding</span>
              <span>Marketing</span>
            </div>
          </div>
        </div>
        <div className="w-[45vw] h-[90vh] rounded-[2.5vw] overflow-hidden flex flex-col justify-between work-3-mockup-container z-[1] relative">
          <div
            className="w-full h-full bg-[#235DFF] absolute top-0 left-0 z-[2] work-3-mockup "
            style={{ clipPath: "inset(0% 0% 0% 0%)" }}
          >
            <Image
              src={"/assets/images/homepage/work/work-mockup-1.png"}
              alt=""
              className="w-full h-full object-contain work-mockup-3-img"
              width={800}
              height={500}
            />
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Work;
