'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const data = [
  {
    title: "Fintech",
    para: "We unite with big brands and startups in various industries to create memorable experiences driven by user‑centered design that drives productivity and increases revenue.",
    img: "/assets/images/solution-detail/fintech.png",
    link: "#",
    project: "Montra"
  },
  {
    title: "E-Commerce",
    para: "We unite with big brands and startups in various industries to create memorable experiences driven by user‑centered design that drives productivity and increases revenue.",
    img: "/assets/images/solution-detail/fintech.png",
    link: "#",
    project: "Montra"
  },
  {
    title: "HealthCare",
    para: "We unite with big brands and startups in various industries to create memorable experiences driven by user‑centered design that drives productivity and increases revenue.",
    img: "/assets/images/solution-detail/fintech.png",
    link: "#",
    project: "Montra"
  },
  {
    title: "Education",
    para: "We unite with big brands and startups in various industries to create memorable experiences driven by user‑centered design that drives productivity and increases revenue.",
    img: "/assets/images/solution-detail/fintech.png",
    link: "#",
    project: "Montra"
  }
]

const Industries = () => {
  const [openIndex, setOpenIndex] = useState(0)

  const toggleAccordion = (index) => {
    setOpenIndex(index === openIndex ? null : index)
  }

  return (
    <section className='w-screen h-full bg-gradient overflow-y-scroll '>
      <div className='w-full h-full p-[4vw] py-[6vw]'>
        <div className='w-full flex items-center justify-start gap-[1vw]'>
          <span className='bg-white block h-[5px] w-[5px] rounded-full'></span>
          <p className='text-white font-medium uppercase'>Industries</p>
        </div>

        <div className='flex items-center justify-center text-white gap-[4vw]'>
          <div className='w-[46%] '>
            <h2 className='text-[2.5vw] font-bold leading-tight mb-4'>Build for Impact</h2>
            <p className='text-lg'>
              We unite with big brands and startups in various industries to create memorable experiences driven by user‑centered design that drives productivity and increases revenue.
            </p>
          </div>

          <div className='w-1/2 space-y-[2vw]'>
            {data.map((item, index) => (
              <div key={index} className='space-y-2'>
                {/* Accordion Header */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className='w-full text-left font-bold text-[1.565vw] uppercase focus:outline-none'
                >
                  {item.title}
                </button>
                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className='overflow-hidden'
                    >
                      <p className='mb-4'>{item.para}</p>
                      <Link href={item.link}>
                        <div className='h-[27vw] w-[35.5vw] overflow-hidden rounded-[1.5vw] relative group cursor-pointer'>
                          <Image
                            src={item.img}
                            width={684}
                            height={512}
                            className='h-full w-full object-cover transition-transform duration-300 group-hover:scale-105'
                            alt={item.title}
                          />
                          <div className='h-[5vw] w-full backdrop-blur-lg absolute bottom-0 left-0 bg-[#9B9B9B40] flex items-center justify-between px-[3vw]'>
                            <p>{item.project}</p>
                            <div className='h-[1.5vw] w-[1.5vw] overflow-hidden'>
                              <Image
                                src={"/assets/icons/arrow-top-right.svg"}
                                height={10}
                                width={10}
                                alt='arrow'
                                className='h-full w-full object-cover'
                              />
                            </div>
                          </div>
                        </div>
                      </Link>
                     
                    </motion.div>
                  )}
                   <span className='w-full h-[1px] bg-white block mt-4'></span>
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Industries
