import Image from 'next/image'
import React from 'react'

const DesignProcess = () => {
  return (
   <section className='w-screen h-screen'>
    <div className=' h-full bg-[#FF8800] text-white p-[4vw] pr-[1vw] space-y-[4vw] w-[80%]'>
        <div className='space-y-[8vw]'>
        <div>
            <h3>Design Process</h3>
        </div>
        <div className='flex items-start justify-between'>
            <div className='w-[35%] space-y-[2vw]'> 
                <p className='text-[2.5vw]'>Discover</p>
                <p>We unravel complex design challenges through meticulous user research, expert analysis, prototyping, and collaborative design with users and stakeholders. Harnessing the power of cutting-edge tools and our proprietary approach we craft delightful and intuitive experiences that seamlessly connect the physical and digital worlds.</p>
            </div>
            <div className='w-[30vw] h-[25vw] rounded-[1.5vw] overflow-hidden mt-[5vw]'>
            <Image src={"/assets/images/service-detail/process-1.png"} height={483} width={563} alt='process-1' className='h-full w-full object-cover'/>

            </div>
        </div>
        </div>
        <div className='flex w-full items-center justify-between pr-[4vw]'>
            <div >
                <div className='flex gap-[1vw]'>
                <p>01</p>
                <p>Discover</p>
                </div>
                <span className='w-[10vw] h-[1px] bg-white block mt-[1vw]'/>
            </div>
            <div className='flex gap-[1vw]'>
                <p>02</p>
             
            </div>
            <div className='flex gap-[1vw]'>
                <p>03</p>
                
            </div>
            <div className='flex gap-[1vw]'>
                <p>04</p>
                
            </div>
            <div className='flex gap-[1vw]'>
                <p>05</p>
                
            </div>
            <div className='flex gap-[1vw]'>
                <p>06</p>
                
            </div>

        </div>


    </div>

   </section>
  )
}

export default DesignProcess