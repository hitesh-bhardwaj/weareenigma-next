import { Suspense } from "react";
import FooterCopy from "./FooterCopy";
import { FractalGlassModelWrapper } from "@/components/TestingComponents/FractalGlassModel";
import FooterCTA from "./FooterCTA";
import FooterCTACopy from "./FooterCTACopy";
import { EnigmaModel } from "./EnigmaModel";

export const Footer = (() => {

    return (
        <>
            <section className='h-full w-full  overflow-hidden relative' id='hero-section'>
                <div className="flex h-[50vw] bg-black-1">
                    <div className="w-[60%]">
                    <FooterCTACopy />
                    </div>
                    <div className="w-[40%] h-full">
                        <Suspense>
                            <EnigmaModel />
                        </Suspense>
                    </div>
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