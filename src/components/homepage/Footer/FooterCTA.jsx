"use client"
import React, { Suspense, useRef } from 'react'


const FooterCTA = () => {
  return (
    <>
            <div className='w-[40%] relative'>
             <div className="absolute top-0 left-0 z-[9999]">
                                <Suspense>
                                   <EnigmaModel/>
                                </Suspense>
                            </div>
              </div>
    </>
  )
}

export default FooterCTA
