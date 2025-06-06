import { Suspense } from "react";
import FooterCopy from "./FooterCopy";
import { FractalGlassModelWrapper } from "@/components/TestingComponents/FractalGlassModel";
import FooterCTACopy from "./FooterCTACopy";
import { EnigmaModel } from "./EnigmaModel";

export const Footer = (() => {

    return (
        <>
            <section className='h-full w-full overflow-hidden relative' id='hero-section'>
                <div className="flex h-[50vw] bg-black-1">
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
                    <div className="absolute top-[20%] left-0 h-screen w-screen">
                        <Suspense>
                            <FractalGlassModelWrapper img={"/assets/models/hero-bg.png"} />
                        </Suspense>
                    </div>
                </div>

            </section>
        </>
    )
})