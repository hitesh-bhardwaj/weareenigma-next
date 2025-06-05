import { Suspense } from "react";
import { EnigmaIconModel } from "./EnigmaIconModel";
import { FractalGlassModelWrapper } from './FractalGlassModel';
import { HeroCopy } from './HeroCopy';
import { VideoPlane } from "./VideoPlane";

export const Hero = (() => {

    return (
        <>
            <section className='h-full w-full overflow-hidden relative' id='hero-section'>
                <HeroCopy />
                <div className='h-[300vh] relative flex'>
                    <Suspense>
                        <EnigmaIconModel />
                    </Suspense>
                </div>
                <div className="absolute top-0 left-0">
                    <Suspense>
                        <FractalGlassModelWrapper img={"/assets/models/hero-bg.png"}/>
                    </Suspense>
                </div>
                <div className="absolute top-[100vh] left-0 h-screen w-screen">
                    <Suspense>
                        <VideoPlane />
                    </Suspense>
                </div>
            </section>
        </>
    )
})