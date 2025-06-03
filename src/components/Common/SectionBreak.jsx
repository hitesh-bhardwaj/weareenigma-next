import React from 'react'
import WaveShader from '../WaveShader'

const SectionBreak = ({text}) => {
  return (
    <section className='w-screen h-full flex justify-center relative z-0 px-[4vw]'>
       <div className="absolute top-0 left-0 h-[5vh] w-screen z-[2]">
        <WaveShader
          topColor={[1.0, 1.0, 1.0]}
          middleColor={[1.0, 0.4, 0.0]}
          bottomColor={[1.0, 0.3, 0.0]}
          reverse={true}
          amplitude={0.1}
        />
      </div>
      <div className='relative z-[5] flex justify-center text-center w-[90%] mt-[5%] '>
        <h3 className='text-white !text-[4.5vw]'>{text}</h3>

      </div>
    </section>
  )
}

export default SectionBreak