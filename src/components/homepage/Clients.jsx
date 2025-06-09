"use client";
import React from 'react'
import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import Copy from '../Copy';
gsap.registerPlugin(ScrollTrigger)

const Clients = () => {

  useEffect(() => {
    const ctx = gsap.context(() => {
      const grid = document.querySelector('.client-grid');
      const gridWrap = grid.querySelector('.grid-wrap');
      const gridItems = grid.querySelectorAll('.grid__item');

      // Define GSAP timeline with ScrollTrigger
      const timeline = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
          trigger: gridWrap,
          start: 'top bottom+=120%',
          end: 'bottom center',
          scrub: true,
        }
      });

      gsap.set(gridItems, {
        transformOrigin: '10% 0%',
        z: () => gsap.utils.random(-4000, -3000),
        rotationX: () => gsap.utils.random(-15, -5),
        filter: 'brightness(80%)',
      })

      // Set some CSS related style values
      grid.style.setProperty('--grid-width', '105%');
      grid.style.setProperty('--grid-columns', '8');
      grid.style.setProperty('--perspective', '1500px');

      timeline.to(gridItems, {
        xPercent: () => gsap.utils.random(-250, 150),
        yPercent: () => gsap.utils.random(0, -200),
        rotationX: 0,
        filter: 'brightness(150%)'
      }, 0)
        .to(gridWrap, {
          yPercent: -200,
          z: 6500
        }, 0)
    })
    return () => ctx.revert();
  }, []);

  return (
    <>
      <style jsx global>{`
        :root {
          --perspective: 1500px;
          --grid-width: 105%;
          --grid-columns: 4;
          --grid-gap: 2vw;
          --grid-inner-scale: 1;
          --grid-item-ratio: 44.0 / 27.0;
        }
        .client-grid {
          display: grid;
          place-items: center;
          padding: 2rem;
          width: 100%;
          perspective: var(--perspective);
        }
        .grid-wrap {
          width: var(--grid-width);
          display: grid;
          grid-template-columns: repeat(var(--grid-columns), 1fr);
          gap: var(--grid-gap);
          transform-style: preserve-3d;
          margin-top: 400vh
        }
        .grid__item {
          aspect-ratio: var(--grid-item-ratio);
          overflow: hidden;
          border-radius: 12px;
        }
        .grid__item-inner {
          width: calc(1 / var(--grid-inner-scale) * 100%);
          height: calc(1 / var(--grid-inner-scale) * 100%);
          background-size: contain;
          background-repeat: no-repeat;
          background-position: 50% 50%;
        }
      `}</style>
      <section className='w-screen h-[400vh] mt-[-300vh] relative  bg-[#fefefe]' id='clients'>
        <div className='w-full flex h-screen sticky justify-center items-center top-0'>
          <Copy>
            <h2 className='w-[70%] text-center'>
              Brands We've Elevated
            </h2>
          </Copy>
        </div>
        <div className="client-grid w-screen mt-[-100vh]">
          <div className="grid-wrap">
            {(images.map((image, index) => (
                <div key={index} className="grid__item">
                  <div
                    className="grid__item-inner rounded-[1.5vw]"
                    style={{ backgroundImage: `url(${image})` }}
                  />
                </div>
              ))
            )}
          </div>
        </div>

        <div className='w-screen h-[10vw] bg-gradient-to-t z-[5] from-white via-60% to-transparent bottom-0 absolute left-0' />
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
  "/assets/images/homepage/clients/7.png",
  "/assets/images/homepage/clients/6.png",
  "/assets/images/homepage/clients/2.png",
  "/assets/images/homepage/clients/1.png",
  "/assets/images/homepage/clients/5.png",
  "/assets/images/homepage/clients/8.png",
  "/assets/images/homepage/clients/3.png",
  "/assets/images/homepage/clients/6.png",
  "/assets/images/homepage/clients/4.png",
  "/assets/images/homepage/clients/1.png",
  "/assets/images/homepage/clients/2.png",
  "/assets/images/homepage/clients/3.png",
  "/assets/images/homepage/clients/4.png",
  "/assets/images/homepage/clients/5.png",
  "/assets/images/homepage/clients/6.png",
  "/assets/images/homepage/clients/7.png",
  "/assets/images/homepage/clients/8.png",
]