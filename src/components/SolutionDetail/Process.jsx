'use client'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'

const data = [
  {
    title: "Discover",
    para: "A human-centred, design-led approach to product development that leverages cutting-edge technologies & agile methodology, committed to putting you on a path to success in the ever-changing technological landscape. We craft digital solutions that are not just functional, but also intuitive and engaging.",
    number: "01"
  },
  {
    title: "Define",
    para: "We define a clear strategy that aligns with your business goals, ensuring all team members are on the same page from the beginning.",
    number: "02"
  },
  {
    title: "Design",
    para: "We create compelling visuals and intuitive interfaces through UX/UI best practices, enhancing user satisfaction and engagement.",
    number: "03"
  },
  {
    title: "Develop",
    para: "Our developers bring the designs to life with clean, efficient code using modern frameworks and scalable architectures.",
    number: "04"
  },
  {
    title: "Deliver",
    para: "We ensure seamless delivery with rigorous testing, smooth deployment, and ongoing support to maintain product excellence.",
    number: "05"
  },
  {
    title: "Iterate",
    para: "Continuous improvement through feedback and iteration keeps your product relevant and high-performing over time.",
    number: "06"
  }
]

const ProcessCard = ({ title, para, number }) => {
  return (
    <div className='flex flex-col rounded-[3vw] bg-primary h-[34vw] w-[34vw] justify-between p-[2.5vw] text-white'>
      <div className='flex w-full justify-between items-center'>
        <p className='!text-[2.8vw] font-medium'>{title}</p>
        <div className='border border-white rounded-full flex items-center justify-center h-[3vw] w-[3vw]'>
          <p className='!text-[1.02vw]'>{number}</p>
        </div>
      </div>
      <div>
        <p className='!text-[1.02vw]'>{para}</p>
      </div>
    </div>
  )
}

const Process = () => {
  return (
    <section className='h-full w-screen py-[5%]'>
      <div className='w-full h-full px-[4vw] space-y-[8vw]'>
        <h1 className='text-[3vw] font-bold'>Design Process</h1>

        <div className='h-full w-full'>
          <Swiper
            className='h-[35vw] w-full'
            spaceBetween={30}
            slidesPerView={2}
            grabCursor={true}
          >
            {data.map((item, index) => (
              <SwiperSlide key={index}>
                <ProcessCard
                  title={item.title}
                  para={item.para}
                  number={item.number}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Process
