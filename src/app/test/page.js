"use client";

import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

export default function Test() {
    useEffect(() => {
        const grid = document.querySelector(".grid")
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
                start: "top bottom+=5%",
                end: "bottom top-=5%",
                scrub: true,
            },
        })

        // Type-3 CSS vars
        grid.style.setProperty("--grid-width", "105%")
        grid.style.setProperty("--grid-columns", "8")
        grid.style.setProperty("--perspective", "1500px")
        grid.style.setProperty("--grid-inner-scale", "0.5")

        // Type-3 animation
        tl.set(gridItems, {
            transformOrigin: "50% 0%",
            z: () => gsap.utils.random(-5000, -2000),
            rotationX: () => gsap.utils.random(-65, -25),
            filter: "brightness(0%)",
        })
            .to(
                gridItems,
                {
                    xPercent: () => gsap.utils.random(-150, 150),
                    yPercent: () => gsap.utils.random(-300, 300),
                    rotationX: 0,
                    filter: "brightness(200%)",
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
            .fromTo(
                gridInner,
                { scale: 2 },
                { scale: 0.5 },
                0
            )
    }, [])

    return (
        <>
            <style jsx global>{`
        :root {
          --perspective: 1500px;
          --grid-width: 105%;
          --grid-columns: 8;
          --grid-gap: 2vw;
          --grid-inner-scale: 0.5;
          --grid-item-ratio: 1;
        }
        .grid {
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
        }
        .grid__item {
          aspect-ratio: var(--grid-item-ratio);
          overflow: hidden;
          border-radius: 8px;
        }
        .grid__item-inner {
          width: calc(1 / var(--grid-inner-scale) * 100%);
          height: calc(1 / var(--grid-inner-scale) * 100%);
          background-size: cover;
          background-position: 50% 50%;
        }
      `}</style>
            <div className="h-screen" />
            <section className="grid">
                <div className="grid-wrap">
                    {/* repeat as many .grid__item / .grid__item-inner as you need */}
                    <div className="grid__item">
                        <div
                            className="grid__item-inner"
                            style={{ backgroundImage: "url(img/18.jpg)" }}
                        />
                    </div>
                    <div className="grid__item">
                        <div
                            className="grid__item-inner"
                            style={{ backgroundImage: "url(img/29.jpg)" }}
                        />
                    </div>
                    <div className="grid__item">
                        <div
                            className="grid__item-inner"
                            style={{ backgroundImage: "url(img/6.jpg)" }}
                        ></div>
                    </div>
                    <div className="grid__item">
                        <div
                            className="grid__item-inner"
                            style={{ backgroundImage: "url(img/37.jpg)" }}
                        ></div>
                    </div>
                    <div className="grid__item">
                        <div
                            className="grid__item-inner"
                            style={{ backgroundImage: "url(img/15.jpg)" }}
                        ></div>
                    </div >
                    <div className="grid__item">
                        <div
                            className="grid__item-inner"
                            style={{ backgroundImage: "url(img/32.jpg)" }}
                        ></div>
                    </div>
                    <div className="grid__item">
                        <div
                            className="grid__item-inner"
                            style={{ backgroundImage: "url(img/41.jpg)" }}
                        ></div>
                    </div>
                    <div className="grid__item">
                        <div
                            className="grid__item-inner"
                            style={{ backgroundImage: "url(img/23.jpg)" }}
                        ></div>
                    </div>
                    <div className="grid__item">
                        <div
                            className="grid__item-inner"
                            style={{ backgroundImage: "url(img/5.jpg)" }}
                        ></div>
                    </div>
                    <div className="grid__item">
                        <div
                            className="grid__item-inner"
                            style={{ backgroundImage: "url(img/12.jpg)" }}
                        ></div>
                    </div>
                    <div className="grid__item">
                        <div
                            className="grid__item-inner"
                            style={{ backgroundImage: "url(img/27.jpg)" }}
                        ></div>
                    </div>
                    <div className="grid__item">
                        <div
                            className="grid__item-inner"
                            style={{ backgroundImage: "url(img/1.jpg)" }}
                        ></div>
                    </div>
                    <div className="grid__item">
                        <div
                            className="grid__item-inner"
                            style={{ backgroundImage: "url(img/46.jpg)" }}
                        ></div>
                    </div>
                    <div className="grid__item">
                        <div
                            className="grid__item-inner"
                            style={{ backgroundImage: "url(img/35.jpg)" }}
                        ></div>
                    </div>
                    <div className="grid__item">
                        <div
                            className="grid__item-inner"
                            style={{ backgroundImage: "url(img/20.jpg)" }}
                        ></div>
                    </div>
                    <div className="grid__item">
                        <div
                            className="grid__item-inner"
                            style={{ backgroundImage: "url(img/39.jpg)" }}
                        ></div>
                    </div>
                    <div className="grid__item">
                        <div
                            className="grid__item-inner"
                            style={{ backgroundImage: "url(img/8.jpg)" }}
                        ></div>
                    </div>
                    <div className="grid__item">
                        <div
                            className="grid__item-inner"
                            style={{ backgroundImage: "url(img/25.jpg)" }}
                        ></div>
                    </div>
                    <div className="grid__item">
                        <div
                            className="grid__item-inner"
                            style={{ backgroundImage: "url(img/2.jpg)" }}
                        ></div>
                    </div>
                    <div className="grid__item">
                        <div
                            className="grid__item-inner"
                            style={{ backgroundImage: "url(img/44.jpg)" }}
                        ></div>
                    </div>
                    <div className="grid__item">
                        <div
                            className="grid__item-inner"
                            style={{ backgroundImage: "url(img/43.jpg)" }}
                        ></div>
                    </div>
                    <div className="grid__item">
                        <div
                            className="grid__item-inner"
                            style={{ backgroundImage: "url(img/17.jpg)" }}
                        ></div>
                    </div>
                    <div className="grid__item">
                        <div
                            className="grid__item-inner"
                            style={{ backgroundImage: "url(img/26.jpg)" }}
                        ></div>
                    </div>
                    <div className="grid__item">
                        <div
                            className="grid__item-inner"
                            style={{ backgroundImage: "url(img/11.jpg)" }}
                        ></div>
                    </div>
                    <div className="grid__item">
                        <div
                            className="grid__item-inner"
                            style={{ backgroundImage: "url(img/14.jpg)" }}
                        ></div>
                    </div>
                    <div className="grid__item">
                        <div
                            className="grid__item-inner"
                            style={{ backgroundImage: "url(img/7.jpg)" }}
                        ></div>
                    </div>
                    <div className="grid__item">
                        <div
                            className="grid__item-inner"
                            style={{ backgroundImage: "url(img/33.jpg)" }}
                        ></div>
                    </div>
                    <div className="grid__item">
                        <div
                            className="grid__item-inner"
                            style={{ backgroundImage: "url(img/30.jpg)" }}
                        ></div>
                    </div>
                    <div className="grid__item">
                        <div
                            className="grid__item-inner"
                            style={{ backgroundImage: "url(img/10.jpg)" }}
                        ></div>
                    </div>
                    <div className="grid__item">
                        <div
                            className="grid__item-inner"
                            style={{ backgroundImage: "url(img/21.jpg)" }}
                        ></div>
                    </div>
                    <div className="grid__item">
                        <div
                            className="grid__item-inner"
                            style={{ backgroundImage: "url(img/16.jpg)" }}
                        ></div>
                    </div>
                    <div className="grid__item">
                        <div
                            className="grid__item-inner"
                            style={{ backgroundImage: "url(img/31.jpg)" }}
                        ></div>
                    </div>
                    <div className="grid__item">
                        <div
                            className="grid__item-inner"
                            style={{ backgroundImage: "url(img/24.jpg)" }}
                        ></div>
                    </div>
                    <div className="grid__item">
                        <div
                            className="grid__item-inner"
                            style={{ backgroundImage: "url(img/36.jpg)" }}
                        ></div>
                    </div>
                    <div className="grid__item">
                        <div
                            className="grid__item-inner"
                            style={{ backgroundImage: "url(img/42.jpg)" }}
                        ></div>
                    </div>
                    <div className="grid__item">
                        <div
                            className="grid__item-inner"
                            style={{ backgroundImage: "url(img/3.jpg)" }}
                        ></div>
                    </div>
                    <div className="grid__item">
                        <div
                            className="grid__item-inner"
                            style={{ backgroundImage: "url(img/38.jpg)" }}
                        ></div>
                    </div>
                    <div className="grid__item">
                        <div
                            className="grid__item-inner"
                            style={{ backgroundImage: "url(img/9.jpg)" }}
                        ></div>
                    </div>
                    <div className="grid__item">
                        <div
                            className="grid__item-inner"
                            style={{ backgroundImage: "url(img/4.jpg)" }}
                        ></div>
                    </div>
                    <div className="grid__item">
                        <div
                            className="grid__item-inner"
                            style={{ backgroundImage: "url(img/40.jpg)" }}
                        ></div>
                    </div>
                    <div className="grid__item">
                        <div
                            className="grid__item-inner"
                            style={{ backgroundImage: "url(img/28.jpg)" }}
                        ></div>
                    </div>
                    <div className="grid__item">
                        <div
                            className="grid__item-inner"
                            style={{ backgroundImage: "url(img/22.jpg)" }}
                        ></div>
                    </div>
                    <div className="grid__item">
                        <div
                            className="grid__item-inner"
                            style={{ backgroundImage: "url(img/34.jpg)" }}
                        ></div>
                    </div>
                    <div className="grid__item">
                        <div
                            className="grid__item-inner"
                            style={{ backgroundImage: "url(img/13.jpg)" }}
                        ></div>
                    </div>
                    <div className="grid__item">
                        <div
                            className="grid__item-inner"
                            style={{ backgroundImage: "url(img/19.jpg)" }}
                        ></div>
                    </div>
                    <div className="grid__item">
                        <div
                            className="grid__item-inner"
                            style={{ backgroundImage: "url(img/47.jpg)" }}
                        ></div>
                    </div>
                    <div className="grid__item">
                        <div
                            className="grid__item-inner"
                            style={{ backgroundImage: "url(img/45.jpg)" }}
                        ></div>
                    </div>
                    <div className="grid__item">
                        <div
                            className="grid__item-inner"
                            style={{ backgroundImage: "url(img/48.jpg)" }}
                        ></div>
                    </div>
                </div>
                <h3 className="content__title content__title--left content__title--bottom">
                    Embrace now, <br />
                    tomorrow may fade.
                </h3>
            </section>
            <div className="h-screen" />
        </>
    )
}
