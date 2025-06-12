import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { initSplit } from "../splitTextUtils";
gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);
  const [isInverted, setIsInverted] = useState(false);
  useEffect(() => {
    initSplit();
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastY && currentY > 100) {
        setHidden(true);
      } else if (currentY < lastY) {
        setHidden(false);
      }

      setLastY(currentY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastY]);

  useEffect(() => {
    const triggers = [];

    document.querySelectorAll(".dark").forEach((section) => {
      const trigger = ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "bottom top",
        onEnter: () => setIsInverted(true),
        onEnterBack: () => setIsInverted(true),
        onLeave: () => setIsInverted(false),
        onLeaveBack: () => setIsInverted(false),
      });

      triggers.push(trigger);
    });

    return () => {
      triggers.forEach((trigger) => trigger.kill());
    };
  }, []);
  return (
    <section
      className={`w-screen fixed top-0 left-0 z-[200] transform transition-transform duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
      id="header"
    >
      <div className="w-full h-fit flex justify-between px-[4vw] pt-[2vw]">
        <Link href={"/"} className="w-[3vw] h-[3vw]">
          <Image
            src={"/assets/icons/enigma-logo.svg"}
            alt="enigma-logo"
            width={100}
            height={100}
            className={`w-full h-full object-contain ${isInverted ? " brightness-[16]" : ""}`}
          />
        </Link>
        <div className="w-fit  flex gap-[1vw] text-white">
          <Link
            href={"/"}
            className="bg-primary w-fit h-fit flex justify-center items-center rounded-full px-[2vw] py-[1vw] leading-[1] buttonSplit hover:scale-[0.98] duration-500 ease-in-out "
            data-split="letters"
            data-letters-delay
          >
            <div className="overflow-clip">
              <p className="buttonTextShadow ">Let's Talk</p>
            </div>
          </Link>
          <div className="w-fit flex  hover:scale-[0.98] duration-500 ease-in-out">
            <Link
              href={"/"}
              className="bg-black-1 px-[2vw] py-[1vw] leading-[1] w-fit h-fit text-white rounded-full buttonSplit"
              data-split="letters"
              data-letters-delay
            >
              <div className="overflow-clip">
              <p className="buttonTextShadow ">Menu</p>
            </div>
            </Link>
            <div className="w-[3vw] h-[3vw] flex flex-col gap-[0.5vw] justify-center items-center rounded-full bg-black-1 cursor-pointer">
              <span className="w-[1.5vw] bg-white h-[1.5px] rounded-full" />
              <span className="w-[1.5vw] bg-white h-[1.5px] rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
