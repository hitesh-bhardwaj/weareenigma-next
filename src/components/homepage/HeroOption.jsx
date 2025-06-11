import { Suspense, useRef } from "react";
// import { VideoPlane } from "./VideoPlane";
import { EnigmaIconModel } from "../TestingComponents/EnigmaIconModel";
import { HeroCopy } from "../TestingComponents/HeroCopy";
import BgCanvasHero from "../BgCanvasHero";

export const HeroOption = (() => {
    const containerRef = useRef();
    return (
        <>
            <section className='h-full w-full overflow-hidden relative' id='hero-section' ref={containerRef}>
                <HeroCopy />
                <div className='h-[400vh] relative flex z-[10]'>
                    <Suspense>
                        <EnigmaIconModel  containerRef={containerRef}/>
                        {/* <VideoPlane/> */}
                    </Suspense>
                </div>
                <div className="absolute top-0 left-0">
                    <Suspense>
                        <BgCanvasHero/>
                        {/* <FractalGlassModelWrapper img={"/assets/models/hero-bg.png"}/> */}
                    </Suspense>
                </div>
               
            </section>
        </>
    )
})