import Image from 'next/image'
import React from 'react'

const Achievements = () => {
  return (
   <section className='h-full w-screen bg-gradient-to-r from-[#FF5600] to-[#FF8800]'>
    <div className='w-full h-full pl-[4vw]  py-[5vw]  grid grid-cols-6 gap-y-[2vw]'>
        <div className='col-start-1 col-span-4 group transition-all duration-500 ease relative'>
    <p className='text-white text-[10vw] font-display leading-[1.05] font-medium'>10+ Awards</p>
    <div className=' opacity-0 group-hover:opacity-100 transition-all duration-500 ease absolute top-[-10%] left-[30%]'>
<Image src="/assets/images/homepage/award.png" height={297} width={199} alt='award'/>
    </div>
    </div>
    <div className='col-start-3 row-start-2 col-span-4 group transition-all duration-500 ease relative'>
    <p className='text-[#0E0E0E] text-[10vw] font-display  leading-[1.05] font-medium'>25+ Projects</p>
    <div className=' opacity-0 group-hover:opacity-100 transition-all duration-500 ease absolute top-[-10%] left-[30%]'>
<Image src="/assets/images/homepage/project.png" height={297} width={199} alt='project'/>
    </div>
    </div>
    <div className='col-start-1 row-start-3 col-span-4'>
    <p className='text-white text-[10vw] font-display  leading-[1.05] font-medium'>45+ Clients</p>
    </div>
    <div className='col-start-3 row-start-4 col-span-4'>
    <p className='text-[#0E0E0E] text-[10vw] font-display  leading-[1.05] font-medium'>2+ Years</p>
    </div>

    </div>

   </section>
  )
}

export default Achievements