import Image from "next/image";
import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import WaveShader from "../WaveShader";
gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  return (
    <section className="w-screen h-[170vh] px-[4vw] py-[7vw] bg-black-1 relative z-0">
      <div className="w-full h-[170vh] flex justify-between gap-[1vw] sticky top-[5%] !z-[4]">
        <div className="w-full h-[90vh] rounded-[2.5vw] bg-primary p-[2vw] flex flex-col justify-between work-1-content">
          <p className="text-[8vw] w-[75%] font-display leading-[1]">
            Garden City Mall
          </p>
          <div className="flex justify-between text-white">
            <span>2023</span>
            <div className="flex gap-[2.5vw]">
              <span>Web Design</span>
              <span>Branding</span>
              <span>Marketing</span>
            </div>
          </div>
        </div>
        <div className="w-full h-[90vh] rounded-[2.5vw] bg-[#33EAFF] flex justify-center items-center work-1-mockup">
          <div className="w-full h-full">
            <Image
              src={"/assets/images/homepage/work/work-mockup-1.png"}
              alt=""
              className="w-full h-full object-contain"
              width={800}
              height={500}
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 h-screen w-screen z-[2]">
        <WaveShader
          topColor={[0.0, 0.0, 0.0]}
          middleColor={[1.0, 0.37, 0.0]}
          bottomColor={[1.0, 0.3, 0.0]}
          reverse={false}
          amplitude={0.1}
        />
      </div>
    </section>
  );
};

export default Work;
