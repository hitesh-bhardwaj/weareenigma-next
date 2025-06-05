import React from 'react'
import WaveShader from '../WaveShader'

const Toolstack = () => {
  return (
    <section className='w-screen h-screen flex justify-center relative z-[5] px-[4vw]'>
       <div className="absolute top-0 left-0 h-[10vh] w-screen z-[2]">
        <WaveShader
          topColor={[1.0, 1.0, 1.0]}
          middleColor={[1.0, 0.4, 0.0]}
          bottomColor={[1.0, 0.3, 0.0]}
          reverse={true}
          amplitude={0.1}
        />
      </div>
      <div className='relative z-[5] flex justify-center text-center w-[80%] '>
        <h2 className='text-white capitalize'>Tool Stack</h2>

      </div>
    </section>
  )
}

export default Toolstack