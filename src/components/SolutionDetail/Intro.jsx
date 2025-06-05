import React from 'react'

const Intro = () => {
  return (
   <section className='h-screen w-screen rounded-t-[1.5vw] mt-[-2%] overflow-hidden z-[10] relative'>
    <div className='w-full h-full px-[4vw] flex items-center justify-center'>
        <div className='w-1/2 space-y-[4vw]'>
<p className='text-[1.565vw] w-[75%]'>We unravel complex design challenges through meticulous user research, expert analysis, prototyping, and collaborative design with users and stakeholders. </p>
<div className='flex items-center justify-start text-primary gap-[1vw]'>
<div className="p-[1.5vw] border-[4px] border-dotted border-primary rounded-full inline-block">
  <span className="h-[15px] w-[15px] rounded-full block bg-primary"></span>
</div>
<p className='font-medium text-primary'>Get Free Consultation</p>
</div>
<p className='w-[85%]'>Leveraging the power of modern tools, understanding of human behavioural patterns and our unique approach, we transform your vision into visually appealing and functionally seamless digital experiences that users love to explore and engage with. By understanding the needs of your users and your business goals, we approach the design process with an emotionally balanced human-centric approach. This enables us to deliver simple, stunning and user centric designs that engage your customers and boost your conversion rates as a by-product.</p>
        </div>
        <div className='w-1/2'>
<h2 className='!text-primary !leading-[1.2] origin-top'>We craft emotionally intelligent user experiences that are adored globally!</h2>
        </div>

    </div>

   </section>
  )
}

export default Intro