import React from 'react'
import TestimonialSection from "./TestimonialSection"
const Testimonials = () => {
  return (
    <section className='w-screen h-[200vh] relative '>
        <div className='w-full h-screen flex items-center gap-[4vw] sticky top-0 px-[4vw]'>
            <div className='w-full flex gap-[4vw]'>
            <div className='w-[4vw] h-[4vw] relative bg-primary rounded-full mt-[3vw]'>
                <div className='w-[3vw] h-[3vw] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-full bg-white'/>
            </div>
            <h2 className='text-primary w-[70%]'>Stories that stick, results that show.</h2>
            </div>
        </div>
        <div className='absolute bottom-0'>
        <TestimonialSection/>

        </div>
    </section>
  )
}

export default Testimonials