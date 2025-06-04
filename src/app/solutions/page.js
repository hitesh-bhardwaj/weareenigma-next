import SectionBreak from '@/components/Common/SectionBreak'
import About from '@/components/Solutions/About'
import Approach from '@/components/Solutions/Approach'
import Cards from '@/components/Solutions/Cards'
import Lanyard from '@/components/Solutions/CardsCopy'
import Solutions from '@/components/Solutions/Solutions'
import React from 'react'

const page = () => {
  return (
   <>
   <About/>
   {/* <SectionBreak text={"We craft emotionally intelligent user experiences that are adored globally!"}/> */}
   <Solutions/>
   {/* <Cards/> */}
   {/* <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]}/> */}
   {/* <Approach/> */}
   </>
  )
}

export default page