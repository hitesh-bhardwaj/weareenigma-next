"use client"
import React from 'react'
import Hero from "../Hero"

const HeroComp = () => {
  return (
    <section className="w-screen h-screen px-[4vw] py-[10%] relative " id="hero">
        <div className='z-[5] relative h-full'>
        <div className='flex items-end justify-end h-full' >
            <div className='w-full'>
            <h1 className='capitalize font-medium'><span className='text-white'>Digital</span> <span>Experience</span> <span className='white-stroke-text'>Design agency</span></h1>

            </div>
            <div className='w-1/2'>

            </div>

        </div>
        <div className='flex items-end justify-end w-full'>
            <p className='!text-white w-1/3'>Harnessing the power of Emotion, Design, Technology & Neuromarketing, we create Digital Brand Experiences that propel your success in the enigmatic realm of bits & bytes.</p>
        </div>
        </div>
        <div className='absolute top-0 left-0 z-[1]'>
        <Hero/>
        </div>
    </section>
  )
}

export default HeroComp