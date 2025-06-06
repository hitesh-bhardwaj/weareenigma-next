import { Suspense } from "react";
import FooterCopy from "./FooterCopy";
import FooterCTACopy from "./FooterCTACopy";
import { EnigmaModel } from "./EnigmaModel";
import { FooterFractalGlassModelWrapper } from "./FooterFractalGlassModel";

export const Footer = (() => {

    return (
        <>
            <section className='h-full w-full  overflow-hidden relative' id='hero-section'>
                <div className="flex h-[50vw] dark">
                    <div className="w-[60%]">
                        <FooterCTACopy />
                    </div>
                    <div className="w-[40%] h-full relative">
                        <Suspense>
                            <EnigmaModel />
                        </Suspense>
                    </div>
                </div>

                <div className="h-full w-full relative">
                    <FooterCopy />
                    <div className="absolute top-0 left-0 h-screen w-screen">
                        <Suspense>
                            <FooterFractalGlassModelWrapper img={"/assets/models/hero-bg.png"} />
                        </Suspense>
                    </div>
                </div>
            </section>
        </>
    )
})