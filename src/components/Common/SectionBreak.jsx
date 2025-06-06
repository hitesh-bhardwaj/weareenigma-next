import React, { Suspense } from 'react'
import ShaderComp from '../Wave/ShaderComp'
import SectionBreakCopy from './SectionBreakCopy'

const SectionBreak = () => {
  return (
    <section className=' px-[4vw] h-[80vh] bg-gradient-to-b from-transparent from-40%  to-[#fefefe]  to-60% w-full overflow-hidden relative'>
      <div className='flex justify-center items-center h-[40vw] w-full z-[20] '>
      <SectionBreakCopy text={"Enigma is a collective of Creators, Discoverers, Dreamers & Doers."}/>
      </div>
       <div className="absolute top-[-5%] left-0">
                    <Suspense>
                       <ShaderComp/>
                    </Suspense>
                </div>
    </section>
  )
}

export default SectionBreak