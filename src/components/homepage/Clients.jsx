"use client";
import React from 'react'
import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import Copy from '../Copy';
gsap.registerPlugin(ScrollTrigger)

const Clients = () => {

  useEffect(() => {
    const grid = document.querySelector(".client-grid")
    const gridWrap = grid.querySelector(".grid-wrap")
    const gridItems = grid.querySelectorAll(".grid__item")
    const gridInner = [...gridItems].map((item) =>
      item.querySelector(".grid__item-inner")
    )

    // Set up ScrollTrigger timeline
    const tl = gsap.timeline({
      defaults: { ease: "none" },
      scrollTrigger: {
        trigger: gridWrap,
        start: "top bottom+=10%",
        end: "bottom top",
        scrub: true,
      },
    })

    // Type-3 CSS vars
    grid.style.setProperty("--grid-width", "105%")
    grid.style.setProperty("--grid-columns", "4")
    grid.style.setProperty("--perspective", "1500px")
    grid.style.setProperty("--grid-inner-scale", "1")

    // Type-3 animation
    tl.set(gridItems, {
      transformOrigin: "50% 0%",
      z: () => gsap.utils.random(-5000, -4000),
      rotationX: () => gsap.utils.random(-65, -25),
    })
      .to(
        gridItems,
        {
          xPercent: () => gsap.utils.random(-150, 150),
          yPercent: () => gsap.utils.random(-300, 300),
          rotationX: 0,
        },
        0
      )
      .to(
        gridWrap,
        {
          z: 6500,
        },
        0
      )
  }, []);

  return (
    <>
      <style jsx global>{`
        :root {
          --perspective: 1500px;
          --grid-width: 105%;
          --grid-columns: 4;
          --grid-gap: 2vw;
          --grid-inner-scale: 0.5;
          --grid-item-ratio: 44.0 / 27.0;
        }
        .client-grid {
          display: grid;
          place-items: center;
          padding: 2rem;
          width: 100%;
          perspective: var(--perspective);
          height: 200vh;
        }
        .grid-wrap {
          width: var(--grid-width);
          display: grid;
          grid-template-columns: repeat(var(--grid-columns), 1fr);
          gap: var(--grid-gap);
          transform-style: preserve-3d;
        }
        .grid__item {
          aspect-ratio: var(--grid-item-ratio);
          overflow: hidden;
          border-radius: 12px;
        }
        .grid__item-inner {
          width: calc(1 / var(--grid-inner-scale) * 100%);
          height: calc(1 / var(--grid-inner-scale) * 100%);
          background-size: cover;
          background-position: 50% 50%;
        }
      `}</style>
      <section className='w-screen h-[200vh] relative  bg-[#fefefe]' id='clients'>
        <div className='w-screen h-[10vw] bg-gradient-to-t z-[5] from-white via-60% to-transparent bottom-0 absolute left-0'/>

     

        <div className="client-grid w-screen translate-y-[10%]">
          <div className="grid-wrap">
            {images.map((image, index) => (
              <div key={index} className="grid__item ">
                <div
                  className="grid__item-inner scale-[0.5] rounded-[1.5vw]"
                  style={{ backgroundImage: `url(${image})` }}
                />
              </div>
            ))}
          </div>

        </div>
        <div className='w-full h-screen flex justify-center absolute top-[20%] items-start'>
          <Copy>
          <h2 className='w-[70%] text-center sticky top-[30%]'>
            Brands We've Elevated
          </h2>
          </Copy>
        </div>
      </section>
    </>
  )
}

export default Clients;

const images = [
  "/assets/images/homepage/clients/1.png",
  "/assets/images/homepage/clients/2.png",
  "/assets/images/homepage/clients/3.png",
  "/assets/images/homepage/clients/4.png",
  "/assets/images/homepage/clients/5.png",
  "/assets/images/homepage/clients/6.png",
  "/assets/images/homepage/clients/7.png",
  "/assets/images/homepage/clients/8.png",
  "/assets/images/homepage/clients/1.png",
  "/assets/images/homepage/clients/2.png",
  "/assets/images/homepage/clients/3.png",
  "/assets/images/homepage/clients/4.png",
  "/assets/images/homepage/clients/5.png",
  "/assets/images/homepage/clients/6.png",
  "/assets/images/homepage/clients/7.png",
  "/assets/images/homepage/clients/8.png",
]