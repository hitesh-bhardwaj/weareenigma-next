'use client'
import Image from 'next/image'
import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'

const images = [
  {
    img:"/assets/images/service-detail/patronum.png",
    color:" bg-[#0F68DE]"
  },
  {
    img:"/assets/images/service-detail/bespin-labs.png",
    color:"bg-[#FF0808]"
  },
  {
    img:"/assets/images/service-detail/dmtca.png",
    color:"bg-[#0F68DE]"
  },
  {
    img:"/assets/images/service-detail/jelly-fish.png",
    color:"bg-[#FF0808]"
  },
  {
    img:"/assets/images/service-detail/kedarkala.png",
    color:"bg-[#0F68DE]"
  },
  {
    img:"/assets/images/service-detail/quickx.png",
    color:"bg-[#FF0808]"
  },
  {
    img:"/assets/images/service-detail/riva.png",
    color:"bg-[#0F68DE]"
  },
  {
    img:"/assets/images/service-detail/patronum.png",
    color:" bg-[#0F68DE]"
  },
]

const Clients = () => {
  const track1Ref = useRef(null)
  const track2Ref = useRef(null)

  useEffect(() => {
    const track1 = track1Ref.current
    const track2 = track2Ref.current

    const width1 = track1.scrollWidth / 2
    const width2 = track2.scrollWidth / 2

    gsap.to(track1, {
      x: "-50%",
      duration: 20,
      ease: 'none',
      repeat: -1
    })

    gsap.to(track2, {
      x: "50%",
      duration: 20,
      ease: 'none',
      repeat: -1
    })
  }, [])

  return (
    <section className="w-screen py-[5%] overflow-hidden bg-white">
      <div className="w-full">
        <h2 className="text-[2vw]  text-center mb-[3vw]">Clients Love Us!</h2>

        {/* Marquee 1: left */}
        <div className="relative w-full overflow-hidden mb-[2vw]">
          <div className="flex gap-[3vw] whitespace-nowrap" ref={track1Ref}>
            {[...images, ...images].map((item, index) => (
              <div
                key={`top-${index}`}
                className={`rounded-[10vw] px-[2vw] py-[1vw] bg-[#E5E5E5] flex items-center justify-center shrink-0 min-w-[24vw] hover:${item.color}`}
              >
                <Image
                  src={item.img}
                  height={57}
                  width={239}
                  alt={`Client ${index}`}
                  className="w-full h-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
        {/* Marquee 2: right */}
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-[3vw] whitespace-nowrap translate-x-[-50%]" ref={track2Ref}>
            {[...images, ...images].map((item, index) => (
              <div
                key={`bottom-${index}`}
                className="rounded-[10vw] px-[2vw] py-[1vw] bg-[#E5E5E5] flex items-center justify-center shrink-0 min-w-[22vw] "
              >
                <Image
                  src={item.img}
                  height={57}
                  width={239}
                  alt={`Client ${index}`}
                  className="w-full h-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Clients
