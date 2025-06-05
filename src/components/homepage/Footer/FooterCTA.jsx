"use client"
import React, { Suspense, useRef } from 'react'
import Image from 'next/image'
import ModelComp from '@/components/ModelComp'
import { ScrollScene, UseCanvas } from '@14islands/r3f-scroll-rig'
import Copy from '@/components/Copy'
import { EnigmaIconModel } from '@/components/TestingComponents/EnigmaIconModel'

const FooterCTA = () => {
  const meshWrapper = useRef(null);
  return (
    <>
    <section className='w-screen h-[45vw] bg-black-1'>
        <div className='w-full h-full px-[4vw] py-[4vw] flex items-start justify-between'>
            <div className='w-[60%] text-white flex flex-col items-start gap-[4vw]'>
              <Copy>
            <p className='text-[8vw] leading-[1.05] font-display'>Let's bring your
            ideas to life!</p>
            </Copy>
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
              <Suspense>
                                      <EnigmaIconModel />
                                  </Suspense>
              </div>

        </div>

    </section>
    </>
  )
}

export default FooterCTA