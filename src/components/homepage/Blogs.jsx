"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import Image from "next/image";
import {LinkButton} from "../Buttons/index"

const BlogCard = ({ img, text, date, key }) => {
  return (
    <>
      <div
        key={key}
        className="w-full rounded-[1.2vw] flex items-center"
      >
        <div className="flex flex-col items-start justify-between gap-[1vw] w-full">
          <div className="w-full h-[17vw] relative rounded-[2vw] overflow-hidden ">
            <Image src={img} fill alt="awards-1" className="object-cover" />
          </div>
          <div className="w-[90%] flex flex-col pl-[1vw] gap-[2vw]">
            <p className="text-black-1 text-[1.4vw] font-light">
              {text}
            </p>
            <p className="text-[1vw] opacity-75">{date}</p>
            {/* <p className="content-white mobile:!text-[3.5vw] mobile:w-[90%] mobile:leading-[1.2]">{category}</p> */}
          </div>
        </div>
      </div>
    </>
  );
};
const Blogs = () => {
  const swiperRef = useRef(null);
  const [activeButton, setActiveButton] = useState("");

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
      setActiveButton("next");
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
      setActiveButton("prev");
    }
  };
  return (
    <section
      id="blogs"
      className="w-full h-screen relative"
    >
      <div className="">
        <div className="flex flex-col px-[4vw]">
            <div className="w-full flex justify-between items-end">
          <h2 className="">Ideas in Motion</h2>
          <LinkButton href={"/"} text={"View All"}/>

            </div>
          <span className="w-full h-[1px] bg-black my-[4vw]"/>
        </div>
        <div className="w-[100vw] h-full flex items-center justify-center fadeup  ">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            // loop={true}
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
                slidesPerView: 2.7,
                spaceBetween: 35,
              },
              1536: {
                slidesPerView: 2.7,
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
        <div className="w-fit flex gap-[1vw] absolute bottom-[10%] right-[5%] items-center">
          <div  className="rotate-180 w-[1.5vw] h-[1.5vw] flex justify-center items-center" onClick={handlePrev}>
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
          <div className="w-[1.5vw] h-[1.5vw] flex justify-center items-center" onClick={handleNext}>
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
];
