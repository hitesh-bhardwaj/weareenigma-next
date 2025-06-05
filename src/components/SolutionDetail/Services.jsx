import Image from 'next/image'
import React from 'react'
import WaveShader from '../WaveShader'

const Services = () => {
  return (
    <section className='w-screen h-full relative bg-white  py-[8%] '>
    <div className='w-full z-[6] relative px-[4vw]'>
        <div className='flex flex-col items-center justify-between gap-[12vw]  w-full'>
        <div className='flex items-start justify-start w-full'>
  <h2 className=' w-[70%] capitalize'>explore All our Design Services</h2>
</div>

        <div className='flex items-center justify-between px-[4vw] w-full '>
          <div className=' text-[1.05vw] font-medium '>
<ul className='space-y-[2vw] list-disc '>
  <li>
  User Interface (UI) Design
  </li>
  <li>
  Interaction Design (IxD)
  </li>
  <li>
  End-to-End Product Design
  </li>
  <li>
  User Testing and Evaluation
  </li>
  <li>
  User Testing and Evaluation
  </li>
  <li>
  User Experience (UX) Design
  </li>
  <li>
  User Testing and Evaluation
  </li>
  <li>
  User Testing and Evaluation
  </li>
  <li>
  User Testing and Evaluation
  </li>
  <li>
  User Testing and Evaluation
  </li>

</ul>
          </div>

          <div className='flex flex-col items-center justify-between gap-[2vw]'>
            <div className='h-[13.5vw] w-[22vw] rounded-[1.5vw] overflow-hidden'>
              <Image src={"/assets/images/solution-detail/image1.png"} height={257} width={417} className='h-full w-full object-cover' alt='image2'/>

            </div>
            <div className='h-[13.5vw] w-[22vw] rounded-[1.5vw] overflow-hidden'>
              <Image src={"/assets/images/solution-detail/image2.png"} height={257} width={417} className='h-full w-full object-cover' alt='image2'/>

            </div>
            <div className='h-[13.5vw] w-[22vw] rounded-[1.5vw] overflow-hidden'>
              <Image src={"/assets/images/solution-detail/image3.png"} height={257} width={417} className='h-full w-full object-cover' alt='image3'/>

            </div>

          </div>
          
          <div className=' text-[1.05vw] font-medium '>
<ul className='space-y-[2vw] list-disc '>
  <li>
  User Interface (UI) Design
  </li>
  <li>
  Interaction Design (IxD)
  </li>
  <li>
  End-to-End Product Design
  </li>
  <li>
  User Testing and Evaluation
  </li>
  <li>
  User Testing and Evaluation
  </li>
  <li>
  User Experience (UX) Design
  </li>
  <li>
  User Testing and Evaluation
  </li>
  <li>
  User Testing and Evaluation
  </li>
  <li>
  User Testing and Evaluation
  </li>
  <li>
  User Testing and Evaluation
  </li>

</ul>
          </div>

           </div>
        </div>
    </div>
  <div className="absolute top-0 left-0 h-[10vh] w-screen z-[2]">
        {/* <WaveShader
          topColor={[0.0235, 0.0275, 0.0353]}
          middleColor={[1.0, 0.37, 0.0]}
          bottomColor={[1.0, 0.3, 0.0]}
          reverse={true}
          amplitude={0.1}
        /> */}
      </div>
    </section>
  )
}

export default Services