import Image from "next/image";
import React from "react";
import { PrimaryButton } from "../Buttons";

const Intro = () => {
  return (
    <section className="w-screen h-screen px-[4vw] py-[10%] bg-black-1" id="about">
      <div className="w-full flex justify-between text-white h-full">
        <div className="flex items-start w-1/2 h-full">
            <h3 className="w-[70%]">
            Driving results through excellence.
            </h3>
            </div>
            <div className="h-full w-1/2 flex  flex-col items-start justify-end gap-[2vw]">
          <p className=" text-[1.05vw] text-[#c7c7c7] w-[90%]">
          Leveraging the power of modern tools, understanding of human behavioural patterns and our unique approach, we transform your vision into visually appealing and functionally seamless digital experiences that users love to explore and engage with. By understanding the needs of your users and your business goals, we approach the design process with an emotionally balanced human-centric approach. This enables us to deliver simple, stunning and user centric designs that engage your customers and boost your conversion rates as a by-product.
          </p>
          <PrimaryButton text={"Get Free Consultation"} href={"#"}/>
          </div>
        </div>
      
    </section>
  );
};

export default Intro;
