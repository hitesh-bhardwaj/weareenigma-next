"use client"
import FractalWithWave from '@/components/homepage/FractalWithWave'
import { ScrollScene, UseCanvas } from '@14islands/r3f-scroll-rig'
import React, { useRef } from 'react'

const page = () => {
  const containerRef = useRef(null);
  const el = useRef()
  return (
    <>
    <div ref={el} className="h-screen w-screen"></div>
    <UseCanvas>
        <ScrollScene track={el}>
        {(props) => (
          <FractalWithWave img={"/assets/models/hero-bg.png"} />
        )}
        </ScrollScene>
      </UseCanvas>
      </>
  )
}

export default page