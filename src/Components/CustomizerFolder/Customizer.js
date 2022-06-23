import React from 'react'
import { customizerMain,customizerContainer } from './Customizer.module.css'
// import { Customizer3D } from './Customizer3D'
import Customizer3D from './Customizer3D'

export default function Customizer() {
  return (
    <div className={customizerContainer}>
        <div className={customizerMain}>
          <Customizer3D />
        </div>
    </div>
  )
}
