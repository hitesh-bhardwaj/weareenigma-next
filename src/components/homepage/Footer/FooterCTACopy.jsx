"use client"
import React, { Suspense, useRef } from 'react'
import Image from 'next/image'

import Copy from '@/components/Copy'


const FooterCTACopy = () => {

    return (
        <>
                <div className='w-full text-white flex flex-col items-start gap-[4vw] pl-[4vw] pt-[4vw]'>
                    <Copy>
                        <p className='text-[8vw] leading-[1.05] font-display'>Let's bring your
                            ideas to life!</p>
                    </Copy>
                    <button className="w-fit flex">
                        <div className="w-fit h-full px-[3.5vw] py-[0.7vw] rounded-full border border-primary font-medium font-display bg-primary">
                            Say Hi
                        </div>
                        <div className="w-[3.5vw] h-[3.5vw] p-[1.1vw] rounded-full border border-primary bg-primary">
                            <Image src={"/assets/icons/arrow-diagonal.svg"} alt="arrow-diagonal" width={50} height={50} className="w-full h-full object-contain" />
                        </div>

                    </button>
                </div>
        </>
    )
}

export default FooterCTACopy
