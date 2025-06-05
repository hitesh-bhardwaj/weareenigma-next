import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
   <>
   <section className='w-screen h-screen px-[4vw] bg-gradient relative overflow-hidden'>
    <div className='w-full h-full flex flex-col items-center justify-center gap-[1.5vw] text-white text-center'>
        <h1>
        Design Solution
        </h1>
        <p className='w-[40%]'>We seamlessly blend physical and digital worlds to craft exceptional experiences that boost revenue, conversions, and loyalty.</p>

    </div>
    <div className='w-full h-full'>
<div className='absolute top-[-10%] left-[30%] h-[20vw] w-[20vw] overflow-hidden'>
    <Image src={"/assets/images/solution-detail/d.png"} height={567} width={567} alt='design' className='h-full w-full object-cover rotate-90'/>
</div>
<div className='absolute top-[20%] left-[45%] h-[20vw] w-[20vw] overflow-hidden'>
    <Image src={"/assets/images/solution-detail/d.png"} height={567} width={567} alt='design' className='h-full w-full object-cover rotate-y-[200deg]'/>
</div>
<div className='absolute bottom-[-5%] left-[60%] h-[20vw] w-[20vw] overflow-hidden'>
    <Image src={"/assets/images/solution-detail/d.png"} height={567} width={567} alt='design' className='h-full w-full object-cover rotate-[30deg]'/>
</div>


    </div>

   </section>
   </>
  )
}

export default Hero