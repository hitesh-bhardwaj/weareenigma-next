import { Suspense, useRef } from "react";
import { EnigmaIconModel } from "./EnigmaIconModel";
import { FractalGlassModelWrapper } from './FractalGlassModel';
import { HeroCopy } from './HeroCopy';
import { VideoPlane } from "./VideoPlane";
import Hero2 from "../homepage/Hero/Hero2";
import FractalWaveSection from "../homepage/FractalWithWave";

export const Hero = (() => {
    const containerRef = useRef();
    return (
        <>
            <section className='h-full w-full overflow-hidden relative' id='hero-section' ref={containerRef}>
                <HeroCopy />
                <div className='h-[400vh] relative flex'>
                    <Suspense>
                        <EnigmaIconModel  containerRef={containerRef}/>
                        {/* <VideoPlane/> */}
                    </Suspense>
                </div>
                <div className="absolute top-0 left-0">
                    <Suspense>
                        <FractalGlassModelWrapper img={"/assets/models/hero-bg.png"}/>
                        {/* <FractalWaveSection img={"/assets/models/hero-bg.png"} /> */}
                        {/* <Hero2/> */}
                    </Suspense>
                </div>
               
            </section>
        </>
    )
})