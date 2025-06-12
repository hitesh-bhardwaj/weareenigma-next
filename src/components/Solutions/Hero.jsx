import { Suspense } from "react";
import { HeroCopy } from './HeroCopy';
import { FractalGlassModelWrapper } from "../TestingComponents/FractalGlassModel";


export const Hero = (() => {

    return (
        <>
            <section className='h-screen w-full overflow-hidden relative' id='hero-section'>
                <HeroCopy />
                <div className="absolute top-0 left-0 w-screen h-screen">
                    <Suspense>
                        <FractalGlassModelWrapper img={"/assets/models/hero-bg.png"}/>
                    </Suspense>
                </div>
               
            </section>
        </>
    )
})