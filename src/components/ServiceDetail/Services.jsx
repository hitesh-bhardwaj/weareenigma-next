import Image from 'next/image'
import React from 'react'


const data=[
    {
        title:"Research & Discovery",
        list:[
            "User Research",
            "Competitive Analysis",
            "Heuristic Evaluation",
            "Persona Development",
            "Journey Mapping",
            "UX Audit"
        ],
        img:"/assets/images/service-detail/research.png"
    },
    {
        title:"User Experience (UX) Design ",
        list:[
            "Information Architecture (IA)",
            "Wireframing (Low & High Fidelity)",
            "User Flow Diagrams",
            "Prototyping",
            "Interaction Design",
            "Accessibility Design"
        ],
        img:"/assets/images/service-detail/ux-design.png"
    },
    {
        title:"User Interface (UI) Design ",
        list:[
            "Visual Design",
            "Design System & Style Guide Creation",
            "Responsive & Adaptive Design",
            "Iconography",
            "Motion/Animation Design",
            "UI for Web & Mobile Apps"
        ],
        img:"/assets/images/service-detail/ui-design.png"
    },
    {
        title:"Testing & Handoff",
        list:[
"Usability Testing",
            "A/B Testing",
            "User Feedback Analysis",
            "Heatmap & Analytics Review",
            "Developer Handoff",
            "Post-Launch UX Improvements"
        ],
        img:"/assets/images/service-detail/testing.png"
    },

]
const Services = () => {
  return (
   <section className='w-screen h-full bg-black-1 py-[7%]'>
    <div className='h-full w-full px-[4vw] space-y-[10vw]'>
        <div className='w-[60%]'>    
<h2 className='text-white !font-medium'>Our Services Include</h2>
</div>
<div className='w-full h-full text-white space-y-[2vw]'>
    {data.map((item,index)=>(
        <div key={index} className='w-full h-full'>
        <div className='w-full flex items-start justify-between'>
        <div className='w-[40%]'>
            <p className='text-[1.565vw] font-medium'>{item.title}</p>
        </div>
        <div className='w-[40%]'>
        <ol className='list-decimal flex flex-wrap w-full space-x-[2vw] gap-[1vw]'>
            {item.list.map((content,id)=>(
            <li key={id} className='uppercase text-[1.05vw] font-medium'>{content}</li>
            ))}
        </ol>
        </div>
        <div className='h-[9.5vw] w-[13.5vw] rounded-[1.5vw] overflow-hidden'>
<Image src={item.img} height={179} width={253} alt='research' className='h-full w-full object-cover'/>
        </div>
        </div>
        {index !== data.length - 1 && (
      <span className='bg-white h-[1px] w-full block mt-[4vw] mb-[2vw]'></span>
    )}
    </div>
    
    ))}
    
   

</div>
    </div>

   </section>
  )
}

export default Services