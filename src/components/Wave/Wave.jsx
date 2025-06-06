import { Suspense } from "react";
import ShaderComp from "./ShaderComp";

export const Wave = (() => {

    return (
        <>
            <section className='h-full w-full overflow-hidden relative'>
                <div className="absolute top-0 left-0">
                    <Suspense>
                       <ShaderComp/>
                    </Suspense>
                </div>
               
            </section>
        </>
    )
})