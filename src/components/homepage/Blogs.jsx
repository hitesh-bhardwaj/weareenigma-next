"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import Image from "next/image";
import {LinkButton} from "../Buttons/index"
import Link from "next/link";
import Copy from "../Copy";
import { lineAnim } from "../gsapAnimations";

const BlogCard = ({ img, text, date, key }) => {
  return (
    <>
      <Link href={"/"}
        key={key}
        className="w-full h-full flex items-center"
      >
        <div className="flex flex-col items-start justify-between gap-[1vw] w-full h-full">
          <div className="w-full h-[60%] relative  overflow-hidden image-container group">
          <div className="w-full h-full absolute top-0 left-0 px-[1.5vw] pt-[1.5vw] flex justify-between z-[2]">
            <div className="w-fit h-fit px-[1.5vw] py-[0.7vw] bg-black-1 rounded-full flex justify-center items-center z-[2] text-white leading-[1] text-[0.8vw]">
              Digital Marketing

            </div>
            <div  className="w-[3vw] h-[3vw] p-[1vw] bg-black-1 rounded-full z-[2] arrow-div">
              <Image src={"/assets/icons/long-arrow.svg"} alt="arrow-diagonal" className="w-full h-full object-contain" width={50} height={50}/>

            </div>

          </div>
            <Image src={img} fill alt="awards-1" className="object-cover w-full h-full object-top group-hover:scale-[1.1] transition-all duration-500 ease" />
          </div>
          <div className="w-[95%] flex flex-col pl-[1vw] gap-[1vw] h-[40%]">
            <Copy>
            <p className="text-black-1 text-[1.4vw] font-light">
              {text}
            </p>
            </Copy>
            <Copy>
            <p className="!text-[0.9vw] opacity-75">{date}</p>
            </Copy>
            {/* <p className="content-white mobile:!text-[3.5vw] mobile:w-[90%] mobile:leading-[1.2]">{category}</p> */}
          </div>
        </div>
      </Link>
    </>
  );
};
const Blogs = () => {
  lineAnim();
  const swiperRef = useRef(null);

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
     
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
 
    }
  };
  return (
    <section
      id="blogs"
      className="w-full h-screen relative z-[10] bg-[#fefefe] py-[5%]"
    >
      <div className="">
        <div className="flex flex-col px-[4vw]">
            <div className="w-full flex justify-between items-end">
              <Copy>
          <h2 className="">Ideas in Motion</h2>
          </Copy>
          <LinkButton href={"/"} text={"View All"}/>

            </div>
          <span className="w-full h-[1px] bg-black my-[4vw] lineanim"/>
        </div>
        <div className="w-[100vw] h-full flex items-center justify-center fadeup  ">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            loop
            speed={500}
            initialSlide={0} // <== force slide 1 to be active initially
            // centeredSlides={true} 
            spaceBetween={30}
            slidesPerView={1.2}
            breakpoints={{
              480: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              720: {
                slidesPerView: 1.4,
                spaceBetween: 15,
              },

              1024: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              1536: {
                slidesPerView: 3,
                spaceBetween: 35,
              },
            }}
            modules={[FreeMode]}
            freeMode={true}
            className="awards-swiper w-full h-full flex items-center justify-center !px-[4vw] "
          >
            {content.map((item, index) => (
              <SwiperSlide key={index}>
                <BlogCard
                  img={item.img}
                  text={item.text}
                  date={item.date}
                  //   category={item.category}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="w-fit flex gap-[1vw] absolute bottom-[-5%] right-[5%] items-center z-[5]">
          <div  className="rotate-180 w-[1.5vw] h-[1.5vw] flex justify-center items-center cursor-pointer" onClick={handlePrev}>
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.09961 20.6162L17.5391 12.1768L9.09961 3.7373"
                stroke="#0E0E0E"
                strokeWidth="3.37578"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="w-[1.5vw] h-[1.5vw] flex justify-center items-center cursor-pointer" onClick={handleNext}>
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.09961 20.6162L17.5391 12.1768L9.09961 3.7373"
                stroke="#0E0E0E"
                strokeWidth="3.37578"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Blogs;

const content = [
  {
    img: "/assets/images/homepage/blogs/blog-img-1.png",
    text: "Beginners Guide To SEO: 30 Websites To Help You Getting Started On Your Link Building Journey.",
    date: "16 June’2025",
  },
  {
    img: "/assets/images/homepage/blogs/blog-img-2.png",
    text: "Beginners Guide To SEO: 30 Websites To Help You Getting Started On Your Link Building Journey.",
    date: "16 June’2025",
  },
  {
    img: "/assets/images/homepage/blogs/blog-img-3.png",
    text: "Beginners Guide To SEO: 30 Websites To Help You Getting Started On Your Link Building Journey.",
    date: "16 June’2025",
  },
  {
    img: "/assets/images/homepage/blogs/blog-img-1.png",
    text: "Beginners Guide To SEO: 30 Websites To Help You Getting Started On Your Link Building Journey.",
    date: "16 June’2025",
  },
  {
    img: "/assets/images/homepage/blogs/blog-img-2.png",
    text: "Beginners Guide To SEO: 30 Websites To Help You Getting Started On Your Link Building Journey.",
    date: "16 June’2025",
  },
  {
    img: "/assets/images/homepage/blogs/blog-img-1.png",
    text: "Beginners Guide To SEO: 30 Websites To Help You Getting Started On Your Link Building Journey.",
    date: "16 June’2025",
  },
  {
    img: "/assets/images/homepage/blogs/blog-img-2.png",
    text: "Beginners Guide To SEO: 30 Websites To Help You Getting Started On Your Link Building Journey.",
    date: "16 June’2025",
  },
];
