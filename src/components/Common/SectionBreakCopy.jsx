"use client"
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(ScrollTrigger, SplitText)

const SectionBreakCopy = ({ text }) => {
  const containerRef = useRef(null)

  useEffect(() => {
    const split = new SplitText(containerRef.current, {
      type: 'words'})

    gsap.fromTo(
      split.words,
      {
        y: 20,
        opacity: 0,
        filter: 'blur(8px)',
      },
      {
        y: 0,
        opacity: 1,
        filter: 'blur(0px)',
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
          scrub: 1,
        },
      }
    )
    return () => {
      split.revert() 
    }
  }, [])

  return (
    <div className="relative z-[5] text-center w-[90%] h-fit mx-auto">
      <h3 ref={containerRef} className="text-white !text-[4.5vw] leading-tight">
        {text}
      </h3>
    </div>
  )
}

export default SectionBreakCopy
