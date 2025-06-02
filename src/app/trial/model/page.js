"use client"
import CustomCanvas from '@/components/CustomCanvas'
import FractalWithWave from '@/components/homepage/FractalWithWave'
import ModelComp from '@/components/ModelComp'
import { ScrollScene, UseCanvas } from '@14islands/r3f-scroll-rig'
import React, { useRef } from 'react'

const page = () => {
  const el = useRef(null);
  return (
    <>
    <div ref={el} className="h-screen w-screen"></div>
    <UseCanvas>
        <ScrollScene track={el}>
        {(props) => (
          <>
        <ModelComp position={[-7, 2, 5]} rotation={[Math.PI / 35, Math.PI / 15, 0]} scale={1.2} materialsProps={{
          thickness: 3.51,
          backsideThickness: 1.0,
          roughness: 0.05,
          reflectivity: 1.0,
          anisotropy: 0,
          chromaticAberration: 0.3,
          distortion: 0.0,
          temporalDistortion: 0.0,
          anisotropicBlur: 5.0,
          color: "#ffffff",
          backside: true,
        }} />
        <FractalWithWave img={"/assets/models/hero-bg.png"} />
        </>
        
      )}
      
      </ScrollScene>
    </UseCanvas>
    </>
  )
}

export default page