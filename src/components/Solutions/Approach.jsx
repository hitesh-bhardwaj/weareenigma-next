import React from 'react'
import Copy from '../Copy'
import { lineAnim } from '../gsapAnimations'

const Approach = () => {
    lineAnim();
  return (
   <section className='h-full w-screen bg-gradient py-[7%]'>
    <div className='px-[4vw] space-y-[4vw]'>
        <Copy>
<h2 className='capitalize !text-white'>Our Approach</h2>
</Copy>
<div className='flex flex-col items-end justfiy-between '>
    <div className='w-[60%] text-white space-y-[2vw]'>
    <div className='w-full'>
        <Copy>
        <p className='text-[2.6vw] font-display'>Define</p>
        </Copy>
        <Copy>
        <p className='font-medium'>Develop a thorough understanding of the project, audience, and objectives to formulate a strategy.</p>
        </Copy>
        <span className='w-full h-[1px] bg-white block mt-[2vw] lineanim'></span>
    </div>
    <div className='w-full'>
        <Copy>
        <p className='text-[2.6vw] font-display'>Design</p>
        </Copy>
        <Copy>
        <p className='font-medium'>Craft a purposeful design to reflect the objectives and indicate the direction for the entire project.</p>
        </Copy>
        <span className='w-full h-[1px] bg-white block mt-[2vw] lineanim'></span>
    </div>
    <div className='w-full'>
        <Copy>
        <p className='text-[2.6vw] font-display'>Implement</p>
        </Copy>
        <Copy>
        <p className='font-medium'>Bring the design to life in the form of an interactive and functional prototype. Review, refine and optimise.</p>
        </Copy>
        <span className='w-full h-[1px] bg-white block mt-[2vw] lineanim'></span>
    </div>
    <div className='w-full'>
        <Copy>
        <p className='text-[2.6vw] font-display'>Develop</p>
        </Copy>
        <Copy>
        <p className='font-medium'>Incorporate implementation and technical components into a highly functional system, ready for review.</p>
        </Copy>
        <span className='w-full h-[1px] bg-white block mt-[2vw] lineanim'></span>
    </div>
    <div className='w-full'>
        <Copy>
        <p className='text-[2.6vw] font-display'>Deliver</p>
        </Copy>
        <Copy>
        <p className='font-medium'>Review, refine, test and prepare final product for delivery. Launch and continue to evolve over time.</p>
        </Copy>
        <span className='w-full h-[1px] bg-white block mt-[2vw] lineanim'></span>

    </div>
    </div>

</div>
    </div>

 
   </section>
  )
}

export default Approach