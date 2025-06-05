import React from 'react'
import Image from "next/image";

const Header = () => {
  return (
    <section className='w-screen fixed top-0 left-0 z-[200] ' id='header'>
        <div className='w-full h-fit flex justify-between px-[4vw] pt-[2vw]'>
            <div className='w-[3vw] h-[3vw]'>
                <Image src={"/assets/icons/enigma-logo.svg"} alt='enigma-logo' width={100} height={100} className='w-full h-full object-contain'/>
            </div>
            <div className='w-fit  flex gap-[1vw] text-white'>
                <div className='bg-primary w-fit h-fit flex justify-center items-center rounded-full px-[2vw] py-[1vw] leading-[1]'>
                    Let's Talk
                </div>
                <div className='w-fit flex'>
                    <div className='bg-black-1 px-[2vw] py-[1vw] leading-[1] w-fit h-fit text-white rounded-full'>
                        Menu

                    </div>
                    <div className='w-[3vw] h-[3vw] flex flex-col gap-[0.5vw] justify-center items-center rounded-full bg-black-1'>
                      <span  className='w-[1.5vw] bg-white h-[1.5px] rounded-full'/>
                      <span  className='w-[1.5vw] bg-white h-[1.5px] rounded-full'/>
                    </div>

                </div>
            </div>


        </div>

    </section>
  )
}

export default Header