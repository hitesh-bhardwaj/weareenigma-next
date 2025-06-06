"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import TestimonialSectionCopy from "./TestimonialSectionCopy";
gsap.registerPlugin(ScrollTrigger);
const Testimonials = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#testimonials",
          start: "top 60%",
          end: "80% 60%",
          scrub: true,
          // markers: true,
        },
        defaults:{
          ease:"none"
        }
      })
      tl.from(".bg-circle",{
        yPercent:-10,
        scale:0,
      })
      .from(".lower-circle",{
        scale:0,
        top:"19.5%",
        // yPercent:-80,
        delay:-0.5
      })
      .to(".testimonial-heading",{
        yPercent:-30,
        opacity:1,
        // duration:0.2,
        delay:-0.5
      })
      .to(".bg-circle", {
        // scale: 55,
        // left: "0%",
        duration:2,
        width: "200vw",
        clipPath: "circle(80%)",
        // yPercent: -60,
       
      })
      .to(".lower-circle",{
        scale:0,
        duration:1.5,

        delay:-1.9
      })
      .to(".testimonial-heading",{
        x:"-7vw",
        duration:2,
        delay:-1.9
      })
      .to(".testimonial-heading",{
        opacity:0,
        delay:-1.1
      })
      .to("#testimonial-section",{
        opacity:1,
        delay:-0.6
      })
    });
    return () => ctx.revert();
  }, []);
  return (
    <section className="w-screen h-[400vh] relative bg-[#fefefe] " id="testimonials">
      <div className="w-full h-screen flex items-center gap-[4vw] sticky top-0 px-[4vw]">
        {/* <div className="w-[4vw] h-[4vw] absolute top-[33%] left-[5%] bg-gradient rounded-full mt-[3vw] upper-circle z-[3]">
         
        </div> */}
        <div className="w-screen h-screen absolute top-0 left-0"></div>
        <div
          className="w-screen absolute left-[-43%] top-[-58%] h-[200vh] bg-gradient flex items-center z-[2] bg-circle"
          style={{ clipPath: "circle(2%)" }}
        >
          <div className="w-screen h-screen flex flex-nowrap absolute items-center ml-[55vw] pt-[16vh] z-[10]">
            <h2 className="text-white w-[70%] z-[4] pointer-events-none translate-y-[30%] testimonial-heading">
              Stories that stick, results that show.
            </h2>
          </div>
        </div>
        <div className="w-[3vw] h-[3vw] absolute top-[39.3%] left-[5.5%] rounded-full bg-white lower-circle z-[4]" />

        <div className="relative w-[70%] ml-[8vw] testimonial-heading translate-y-[30%]">
          {/* Primary text (fallback/base layer) */}
          <h2 className="text-primary relative z-[1]">
            Stories that stick, results that show.
          </h2>
        </div>
      </div>
      <div className="sticky top-0">
        <TestimonialSectionCopy />
      </div>
    </section>
  );
};

export default Testimonials;
