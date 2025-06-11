import React from 'react'
import { PrimaryButton } from '../Buttons'
import Cards from './Cards'
import Lanyard from './CardsCopy'
import Copy from '../Copy'
import HangingCards from './HangingCards'

const Solutions = () => {
    return (
        <>
            <section className='w-screen h-full px-[4vw] pb-[10%] relative mt-[-10%] pt-[20%] bg-[#fefefe]' id='solutions'>
                <div className=' h-full w-full space-y-[5vw]'>
                    {data.map((item,index)=>(
                    <div key={index} className={`flex items-center justify-between h-full w-full ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                        <div className='h-[37vw] w-[40%] bg-gradient-to-b from-black-1 to-[#2B2B2B] rounded-[1.5vw] relative z-[10] overflow-hidden'>
                            {/* <Cards/> */}
                            {/* <Lanyard/> */}
                            <HangingCards/>
                        </div>
                        <div className="flex flex-col gap-[2vw] w-[48%] text-black">
                            <Copy>
                            <h3 className='uppercase !text-[5.2vw]'>
                                {item.title}
                            </h3>
                            </Copy>
                            <div className='space-y-[1.5vw]'>
                                <Copy>
                                <p className="w-[90%] font-medium">
                                    {item.para1}
                                </p>
                                </Copy>
                                <Copy>
                                <p className="w-[90%] font-medium">
                                   {item.para2}
                                </p>
                                </Copy>
                            </div>
                            <PrimaryButton text={"Know More "} href={item.link} className="!border-black" invert={true} />
                        </div>

                    </div>
                      ))}

                </div>

            </section>
        </>
    )
}

export default Solutions

const data =[
    {
        title:"DESIGN",
        para1:"Strategic planning based on insight is the starting point of everything we do. Combining strategic thinking, wide marketing experience, insights, best practices, and sound judgment, we craft effective strategies that turn insights into measurable results.",
        para2:"Driving growth and success for your brand needs a brilliant plan (roadmap) that is rooted in deep insights and aimed at delivering tangible results. Our strategy consulting services includes: Digital Advisory and Consulting, Integrated Digital Marketing Plan (D.M.P.), User Experience Development, Customer Experience Strategy, Consumer Research, Insights & Target Market Analysis, Digital Capabilities Development, Persona Design & Customer Segmentation, Digital Marketing and Website Performance Audit.",
        link:""
    },
    {
        title:"DEVELOPMENT",
        para1:"Strategic planning based on insight is the starting point of everything we do. Combining strategic thinking, wide marketing experience, insights, best practices, and sound judgment, we craft effective strategies that turn insights into measurable results.",
        para2:"Driving growth and success for your brand needs a brilliant plan (roadmap) that is rooted in deep insights and aimed at delivering tangible results. Our strategy consulting services includes: Digital Advisory and Consulting, Integrated Digital Marketing Plan (D.M.P.), User Experience Development, Customer Experience Strategy, Consumer Research, Insights & Target Market Analysis, Digital Capabilities Development, Persona Design & Customer Segmentation, Digital Marketing and Website Performance Audit.",
        link:""
    },
    {
        title:"MARKETING",
        para1:"Strategic planning based on insight is the starting point of everything we do. Combining strategic thinking, wide marketing experience, insights, best practices, and sound judgment, we craft effective strategies that turn insights into measurable results.",
        para2:"Driving growth and success for your brand needs a brilliant plan (roadmap) that is rooted in deep insights and aimed at delivering tangible results. Our strategy consulting services includes: Digital Advisory and Consulting, Integrated Digital Marketing Plan (D.M.P.), User Experience Development, Customer Experience Strategy, Consumer Research, Insights & Target Market Analysis, Digital Capabilities Development, Persona Design & Customer Segmentation, Digital Marketing and Website Performance Audit.",
        link:""
    },
    {
        title:"STRATEGY",
        para1:"Strategic planning based on insight is the starting point of everything we do. Combining strategic thinking, wide marketing experience, insights, best practices, and sound judgment, we craft effective strategies that turn insights into measurable results.",
        para2:"Driving growth and success for your brand needs a brilliant plan (roadmap) that is rooted in deep insights and aimed at delivering tangible results. Our strategy consulting services includes: Digital Advisory and Consulting, Integrated Digital Marketing Plan (D.M.P.), User Experience Development, Customer Experience Strategy, Consumer Research, Insights & Target Market Analysis, Digital Capabilities Development, Persona Design & Customer Segmentation, Digital Marketing and Website Performance Audit.",
        link:""
    },
]