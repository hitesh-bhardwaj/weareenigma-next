// components/CustomCanvas.js
'use client'

import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'

const CustomCanvas = ({ children, cameraProps = {}, className = '', style = {} }) => {
  return (
    <div className={`absolute top-0 left-0 w-screen h-full z-10 ${className}`} style={style}>
      <Canvas
        camera={{ fov: 20, position: [0, 0, 40], ...cameraProps }}
        gl={{ antialias: true }}
        className='!h-screen w-screen !sticky top-0'
      >
        <Suspense fallback={null}>
          {children}
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default CustomCanvas
