import Image from 'next/image'
import React from 'react'


const data=[
    {
        content:"Enigma Digital's mastery of web design and development is truly unparalleled. Their ability to craft a website that not only captured our essence but also transformed our digital presence is nothing short of miraculous. We are beyond thrilled with the results and can't thank the Enigma team enough for their tireless dedication and creativity. We wholeheartedly recommend Enigma Digital to anyone seeking a top-notch digital partner!",
        name:"Paul Lees",
        designation:"CEO, Patronum",
        img:"/assets/images/solution-detail/paul.png",
        color:"bg-[#0F68DE]"
    },
    {
        content:"Enigma Digital's mastery of web design and development is truly unparalleled. Their ability to craft a website that not only captured our essence but also transformed our digital presence is nothing short of miraculous. We are beyond thrilled with the results and can't thank the Enigma team enough for their tireless dedication and creativity. ",
        name:"Paul Lees",
        designation:"CEO, Patronum",
        img:"/assets/images/solution-detail/paul.png",
        color:"bg-[#FF5050]"
    },
    {
        content:"Enigma Digital's mastery of web design and development is truly unparalleled. Their ability to craft a website that not only captured our essence but also transformed our digital presence is nothing short of miraculous. ",
        name:"Paul Lees",
        designation:"CEO, Patronum",
        img:"/assets/images/solution-detail/paul.png",
        color:"bg-[#19A760]"
    },

]
const Testimonials = () => {
  return (
    <section className='h-full w-screen py-[7%]'>
    <div className='h-full w-full px-[4vw] flex flex-col items-center'>
      <h2 className='capitalize'>Words from our clients!</h2>
      <div className='flex items-start justify-between w-full pt-[5vw] gap-[2vw]'>
        {data.map((item, index) => (
          <div
            key={index}
            className={`h-[34vw] w-[26.5vw] rounded-[1.5vw] ${item.color} p-[3vw] !text-white flex flex-col justify-between`}
          >
            {/* Top content: quote + text */}
            <div className='space-y-[1vw]'>
              <div className='h-[2.5vw] w-[2.5vw] overflow-hidden'>
                <Image
                  src={"/assets/icons/quote-icon.svg"}
                  height={41}
                  width={56}
                  alt='quote-icon'
                  className='h-full w-full'
                />
              </div>
              <p className='text-[1.05vw]'>{item.content}</p>
            </div>
  
            {/* Bottom: image + name + designation */}
            <div className='flex items-end justify-start w-full gap-[2vw] pt-[2vw]'>
              <div className='h-[6.5vw] w-[6.5vw] overflow-hidden rounded-full'>
                <Image
                  src={item.img}
                  height={130}
                  width={130}
                  alt={item.name}
                  className='h-full w-full object-cover'
                />
              </div>
              <div>
                <p className='text-[1.565vw] font-medium'>{item.name}</p>
                <p>{item.designation}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  
  )
}

export default Testimonials