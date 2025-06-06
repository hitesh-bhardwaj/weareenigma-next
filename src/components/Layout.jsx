"use client"
import { GlobalCanvas, SmoothScrollbar } from '@14islands/r3f-scroll-rig'
import { Environment } from '@react-three/drei'
import React from 'react'

const Layout = ({ children }) => {
  return (
    <>
      <GlobalCanvas
        style={{ pointerEvents: 'none', height: '100vh', width: '100vw', position: 'fixed', top: 0, left: 0, zIndex: 1  }}
        // className="bg-black-1"
        gl={{ antialias: true }}
      >
        <ambientLight />
        <Environment preset="city" />
      </GlobalCanvas>
      <SmoothScrollbar>
        {(bind) => (
          <main {...bind} className='relative h-full w-full'>
            {children}
          </main>
        )}
      </SmoothScrollbar>
    </>
  )
}

export default Layout