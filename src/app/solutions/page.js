import SectionBreak from '@/components/Common/SectionBreak'
import About from '@/components/Solutions/About'
import Approach from '@/components/Solutions/Approach'
import Solutions from '@/components/Solutions/Solutions'
import React from 'react'

const page = () => {
  return (
   <>
   <About/>
   {/* <SectionBreak text={"We craft emotionally intelligent user experiences that are adored globally!"}/> */}
   <Solutions/>
   {/* <Approach/> */}
   </>
  )
}

export default page