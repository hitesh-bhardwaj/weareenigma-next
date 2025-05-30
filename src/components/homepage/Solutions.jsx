import Image from "next/image";
import React from "react";
import WaveShader from "../WaveShader";

const Solutions = () => {
  return (
    <section className="w-screen px-[4vw] h-screen py-[5vw] relative">
      <div className="w-full flex flex-col relative z-[3] ">
        <h2 className="w-full flex justify-between">
          <span>Development</span>
          <span>001</span>
        </h2>
        <span className="w-full h-[1px] bg-black mt-[7vw] mb-[2vw]" />
        <div className="flex flex-col gap-[5vw]">
          <p className="w-[70%] text-[1.5vw]">
            A human-centred, design-led approach to product development that
            leverages cutting-edge technologies & agile methodology, committed
            to putting you on a path to success in the ever-changing
            technological landscape. We craft digital solutions that are not
            just functional, but also intuitive and engaging.
          </p>
          <div className="w-full flex justify-between items-end">
            <div className="w-[70%] flex flex-wrap uppercase h-fit text-[0.9vw] gap-x-[4vw] gap-y-[1.5vw]">
              <div className="flex w-[25%] flex-col gap-[0.5vw] h-fit">
                <p className="">user interface design</p>
                <span className="w-full h-[1px] bg-black" />
              </div>
              <div className="flex w-[25%] flex-col gap-[0.5vw] h-fit">
                <p className="">user interface design</p>
                <span className="w-full h-[1px] bg-black" />
              </div>
              <div className="flex w-[25%] flex-col gap-[0.5vw] h-fit">
                <p className="">user interface design</p>
                <span className="w-full h-[1px] bg-black" />
              </div>
              <div className="flex w-[25%] flex-col gap-[0.5vw] h-fit">
                <p className="">user interface design</p>
                <span className="w-full h-[1px] bg-black" />
              </div>
              <div className="flex w-[25%] flex-col gap-[0.5vw] h-fit">
                <p className="">user interface design</p>
                <span className="w-full h-[1px] bg-black" />
              </div>
              <div className="flex w-[25%] flex-col gap-[0.5vw] h-fit">
                <p className="">user interface design</p>
                <span className="w-full h-[1px] bg-black" />
              </div>
              <div className="flex w-[25%] flex-col gap-[0.5vw] h-fit">
                <p className="">user interface design</p>
                <span className="w-full h-[1px] bg-black" />
              </div>
              <div className="flex w-[25%] flex-col gap-[0.5vw] h-fit">
                <p className="">user interface design</p>
                <span className="w-full h-[1px] bg-black" />
              </div>
              <div className="flex w-[25%] flex-col gap-[0.5vw] h-fit">
                <p className="">user interface design</p>
                <span className="w-full h-[1px] bg-black" />
              </div>
              <div className="flex w-[25%] flex-col gap-[0.5vw] h-fit">
                <p className="">user interface design</p>
                <span className="w-full h-[1px] bg-black" />
              </div>
              <div className="flex w-[25%] flex-col gap-[0.5vw] h-fit">
                <p className="">user interface design</p>
                <span className="w-full h-[1px] bg-black" />
              </div>
              <div className="flex w-[25%] flex-col gap-[0.5vw] h-fit">
                <p className="">user interface design</p>
                <span className="w-full h-[1px] bg-black" />
              </div>
            </div>
            <button className="w-fit flex">
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
            </button>
          </div>
        </div>
      </div>
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
