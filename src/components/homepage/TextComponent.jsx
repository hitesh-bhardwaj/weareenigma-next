import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const TextComponent = () => {
  useEffect(() => {
    const ctx = gsap.context(()=>{

        const el = document.querySelector(".animated-paragraph");
    
        if (!el) return;
    
        const split = new SplitText(el, {
          type: "lines",
          linesClass: "para-line"
        });
    
        gsap.set(split.lines, { overflow: "hidden", display: "block" });
    
        gsap.from(split.lines, {
          yPercent: 100,
          opacity: 0,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "bottom 60%",
            scrub: true
          }
        });
    
        return () => {
          split.revert();
        };

    })
    return()=>ctx.revert()
  }, []);

  return (
    <div className="w-screen h-[200vh] flex justify-center items-center bg-white">
      <p className="animated-paragraph w-[40%] leading-[1.6]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minima
        totam ducimus. Esse et eligendi vitae numquam earum nesciunt, quidem autem
        blanditiis culpa dicta officiis magnam error cupiditate quam laboriosam.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus fugit in
        iusto asperiores, error eius cupiditate odit ullam quidem reiciendis,
        itaque, temporibus commodi unde autem necessitatibus. Illo itaque
        dignissimos inventore!
      </p>
    </div>
  );
};

export default TextComponent;
