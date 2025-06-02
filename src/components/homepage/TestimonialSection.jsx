'use client'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'


const data =[
  {
      img:"/assets/images/homepage/testimonial/testimonial-image-1.png",
      name:" Paul Lees",
      designation:"CEO , Patronum",
      para:"Enigma Digital's mastery of web design and development is truly unparalleled. Their ability to craft a website that not only captured our essence but also transformed our digital presence is nothing short of miraculous. We are beyond thrilled with the results and can't thank the Enigma team enough for their tireless dedication and creativity. Our collaboration has been a game-changer for Wragby Business Solutions, and we wholeheartedly recommend Enigma Digital to anyone seeking a top-notch digital partner!"
  },
  {
      img:"/assets/images/homepage/testimonial/testimonial-image-1.png",
      name:" Paul Lees",
      designation:"CEO , Patronum",
      para:"Enigma Digital's mastery of web design and development is truly unparalleled. Their ability to craft a website that not only captured our essence but also transformed our digital presence is nothing short of miraculous. We are beyond thrilled with the results and can't thank the Enigma team enough for their tireless dedication and creativity. Our collaboration has been a game-changer for Wragby Business Solutions, and we wholeheartedly recommend Enigma Digital to anyone seeking a top-notch digital partner!"
  },
  {
      img:"/assets/images/homepage/testimonial/testimonial-image-1.png",
      name:" Paul Lees",
      designation:"CEO , Patronum",
      para:"Enigma Digital's mastery of web design and development is truly unparalleled. Their ability to craft a website that not only captured our essence but also transformed our digital presence is nothing short of miraculous. We are beyond thrilled with the results and can't thank the Enigma team enough for their tireless dedication and creativity. Our collaboration has been a game-changer for Wragby Business Solutions, and we wholeheartedly recommend Enigma Digital to anyone seeking a top-notch digital partner!"
  },
  {
      img:"/assets/images/homepage/testimonial/testimonial-image-1.png",
      name:" Paul Lees",
      designation:"CEO , Patronum",
      para:"Enigma Digital's mastery of web design and development is truly unparalleled. Their ability to craft a website that not only captured our essence but also transformed our digital presence is nothing short of miraculous. We are beyond thrilled with the results and can't thank the Enigma team enough for their tireless dedication and creativity. Our collaboration has been a game-changer for Wragby Business Solutions, and we wholeheartedly recommend Enigma Digital to anyone seeking a top-notch digital partner!"
  },
  {
      img:"/assets/images/homepage/testimonial/testimonial-image-1.png",
      name:" Paul Lees",
      designation:"CEO , Patronum",
      para:"Enigma Digital's mastery of web design and development is truly unparalleled. Their ability to craft a website that not only captured our essence but also transformed our digital presence is nothing short of miraculous. We are beyond thrilled with the results and can't thank the Enigma team enough for their tireless dedication and creativity. Our collaboration has been a game-changer for Wragby Business Solutions, and we wholeheartedly recommend Enigma Digital to anyone seeking a top-notch digital partner!"
  },
]

const TestimonialCard = ({ img, name, designation, para }) => {
  return (
    <div className='w-full h-full flex justify-between pl-[5vw] pt-[12%]'>
      <div className='flex flex-col gap-[1vw] '>
        <Image src={img} alt='testimonial image' className='w-[7.5vw] h-[7.5vw] rounded-full' width={100} height={100} />
        <p className='text-[5.5vw] font-display leading-[1]'>{name}</p>
        <p>{designation}</p>
      </div>
      <div className='flex flex-col gap-[2vw] w-[45%]'>
        <Image src={"/assets/icons/quote-icon.svg"} alt='quote icon' width={50} height={50}/>
        <p>{para}</p>
      </div>
    </div>
  )
}

const TestimonialSection = () => {
  const [index, setIndex] = useState(0)
  const [lines, setLines] = useState([])

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % data.length)
    }, 4000) 

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const lineCount = 150
    const generatedLines = Array.from({ length: lineCount }).map((_, i) => ({
      height: Math.floor(Math.random() * 20 + 15),
      delay: (i % 10) * 0.1,
    }))
    setLines(generatedLines)
  }, [])

  return (
    <section className='w-screen h-screen px-[4vw] bg-gradient text-white relative overflow-hidden opacity-0' id='testimonial-section'>
      <div className='w-full h-full flex justify-between'>
        <div className='w-full relative h-full overflow-hidden'>
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              className="absolute top-0 left-0 w-full h-full"
            >
              <TestimonialCard {...data[index]} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Animated lines */}
        <div className='w-screen absolute bottom-[-5vw] left-0 h-[30vh]'>
          <div className="w-full absolute bottom-0 left-0 h-[30vh] flex justify-between items-end">
            {lines.map((line, i) => (
              <div
                key={i}
                className="line bg-white w-[1px]"
                style={{
                  height: `${line.height}vh`,
                  animationDelay: `${line.delay}s`
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection
