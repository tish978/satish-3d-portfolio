import React from 'react'
import { Html, useProgress } from '@react-three/drei'

const Loader = () => {
  return (
    <Html>
      <span className='canvas-load'></span>
    </Html>
  )
}

export default Loader