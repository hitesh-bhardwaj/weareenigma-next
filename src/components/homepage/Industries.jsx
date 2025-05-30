import Image from 'next/image'
import React from 'react'
import WaveShader from '../WaveShader'

const Industries = () => {
  return (
    <section className='w-screen h-full relative bg-black-1 py-[8%] pt-[25%]'>
    <div className='w-full z-[6] relative'>
        <div className='flex flex-col items-center justify-between gap-[12vw]  w-full'>
        <div className='flex items-center justify-center text-center w-full'>
  <h2 className='text-[#C7C7C7] w-[70%]'>Industries We Work with</h2>
</div>

        <div className=''>
            <p className='text-[8vw] text-white leading-[1.05] font-display pb-[3vw]'>Fintech</p>
            <div className='flex items-start justify-between w-[55vw]'>
                <div className='rounded-[1.5vw] w-[25vw] h-[15vw] overflow-hidden'>
                    <Image src={"/assets/images/homepage/industries/fintech.png"} height={330} width={544} alt='fintech' className='w-full h-full object-cover'/>
                </div>
                <p className='text-white w-[40%]'>For BSFI-Fintech brands, we offer full-funnel digital marketing solutions that power growth at every stage. By merging data-driven strategies with innovative creative execution, we optimize customer journeys, boost product adoption, and secure long-term success in a rapidly evolving digital ecosystem.</p>
            </div>
        </div>
        </div>
    </div>

    <div className='absolute top-0 left-0 w-full h-full z-[5] flex justify-between'>
  <span className='bg-[#CFCFCF63] h-full w-[1px] block opacity-[0.2]' />
  <span className='bg-[#CFCFCF63] h-full w-[1px] block opacity-[0.2]' />
  <span className='bg-[#CFCFCF63] h-full w-[1px] block opacity-[0.2]' />
  <span className='bg-[#CFCFCF63] h-full w-[1px] block opacity-[0.2]' />
  <span className='bg-[#CFCFCF63] h-full w-[1px] block opacity-[0.2]' />
  <span className='bg-[#CFCFCF63] h-full w-[1px] block opacity-[0.2]' />
  <span className='bg-[#CFCFCF63] h-full w-[1px] block opacity-[0.2]' />
  <span className='bg-[#CFCFCF63] h-full w-[1px] block opacity-[0.2]' />

</div>
  <div className="absolute top-0 left-0 h-[10vh] w-screen z-[2]">
        <WaveShader
          topColor={[0.0235, 0.0275, 0.0353]}
          middleColor={[1.0, 0.37, 0.0]}
          bottomColor={[1.0, 0.3, 0.0]}
          reverse={true}
          amplitude={0.1}
        />
      </div>
    </section>
  )
}

export default Industries