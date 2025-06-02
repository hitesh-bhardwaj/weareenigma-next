"use client"
import React, { useRef } from 'react'
import Image from 'next/image'
import ModelComp from '@/components/ModelComp'
import { ScrollScene, UseCanvas } from '@14islands/r3f-scroll-rig'

const FooterCTA = () => {
  const el2 = useRef(null);
  return (
    <>
    <section className='w-screen h-[45vw] bg-black-1'>
        <div className='w-full h-full px-[4vw] py-[4vw] flex items-start justify-between'>
            <div className='w-[60%] text-white flex flex-col items-start gap-[4vw]'>
            <p className='text-[8vw] leading-[1.05] font-display'>Let's bring your
            ideas to life!</p>
             <button className="w-fit flex">
                        <div className="w-fit h-full px-[3.5vw] py-[0.7vw] rounded-full border border-primary font-medium font-display bg-primary">
                            Say Hi
                        </div>
                        <div className="w-[3.5vw] h-[3.5vw] p-[1.1vw] rounded-full border border-primary bg-primary">
                         <Image src={"/assets/icons/arrow-diagonal.svg"} alt="arrow-diagonal" width={50} height={50} className="w-full h-full object-contain"/>
                        </div>
            
                      </button>
            </div>
            <div className='w-[40%] relative'>
    <div ref={el2} className="h-screen w-screen absolute top-0 left-0 z-[10]"></div>
    <UseCanvas>
        <ScrollScene track={el2}>
        {(props) => (
  <ModelComp position={[-7, 2, 5]} rotation={[Math.PI / 35, Math.PI / 15, 0]} scale={1.2} materialsProps={{ thickness: 3.51,
      backsideThickness: 1.0,
      roughness: 0.05,
      reflectivity: 1.0,
      anisotropy: 0,
      chromaticAberration: 0.3,
      distortion: 0.0,
      temporalDistortion: 0.0,
      anisotropicBlur: 5.0,
      color: "#ffffff",
      backside: true,}}/>
    )}
    </ScrollScene>
  </UseCanvas>
            </div>


        </div>

    </section>
    </>
  )
}

export default FooterCTA