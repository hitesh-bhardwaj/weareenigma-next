import { Suspense } from "react";
import { FractalGlassModelWrapper } from "@/components/TestingComponents/FractalGlassModel";
import FooterCTA from "./FooterCTA";
import FooterCopy from "../homepage/Footer/FooterCopy";


export const Footer = (() => {

    return (
        <>
            <section className='h-full w-full  overflow-hidden relative' id='hero-section'>
                <div className="flex h-[50vw] bg-black-1">
                    <FooterCTA />
                    </div>
                <FooterCopy />
                <div className="absolute bottom-0 left-0 h-screen">
                    <Suspense>
                        <FractalGlassModelWrapper img={"/assets/models/hero-bg.png"} />
                    </Suspense>
                </div>

            </section>
        </>
    )
})