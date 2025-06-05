import React from 'react'
import WaveShader from '../WaveShader'
import ShaderComp from '../ShaderComp'
import Copy from '../Copy'

const SectionBreak = ({text}) => {
  return (
    <section className='w-screen h-[48vw] flex justify-center relative z-0 px-[4vw]'>
       <div className="absolute top-0 left-0 z-[2]">
        <WaveShader
          topColor={[1.0, 1.0, 1.0]}
          middleColor={[1.0, 0.4, 0.0]}
          bottomColor={[1.0, 0.3, 0.0]}
          reverse={true}
          amplitude={0.1}
        />
        {/* <ShaderComp/> */}
      </div>
      <div className='relative z-[5] flex justify-center text-center w-[90%] mt-[5%] h-fit'>
        <Copy>
        <h3 className='text-white !text-[4.5vw]'>{text}</h3>
        </Copy>

      </div>
    </section>
  )
}

export default SectionBreak