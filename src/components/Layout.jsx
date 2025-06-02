"use client"
import { GlobalCanvas } from '@14islands/r3f-scroll-rig'
import { Environment } from '@react-three/drei'
import React from 'react'

const Layout = ({children}) => {
  return (
    <>
     <GlobalCanvas
            style={{ pointerEvents: 'none' }}
            camera={{ fov: 20, position: [0, 0, 40]}}
            gl={{ antialias: true }}
          >
           
            <ambientLight />
            <Environment preset="city" />
          </GlobalCanvas>
           {children}
           </>
  )
}

export default Layout