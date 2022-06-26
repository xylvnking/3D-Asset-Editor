import React, {useState} from 'react'
import { customizerMain,customizerContainer, customizerFlex } from './Customizer.module.css'
// import { Customizer3D } from './Customizer3D'
import Customizer3D from './Customizer3D'
import CustomizerControls from './CustomizerControls';

export default function Customizer() {

  // const [color, setColor] = useState("#27a1e3");

  return (
    <div className={customizerContainer}>
        <div className={customizerMain}>
          <div className={customizerFlex}>
          <Customizer3D />
          {/* <CustomizerControls /> */}

          </div>
        </div>
    </div>
  )
}
