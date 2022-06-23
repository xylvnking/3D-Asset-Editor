import React, {useState} from 'react'
import { customizerMain,customizerContainer } from './Customizer.module.css'
// import { Customizer3D } from './Customizer3D'
import Customizer3D from './Customizer3D'
import CustomizerControls from './CustomizerControls';

export default function Customizer() {

  const [color, setColor] = useState("#aabbcc");

  return (
    <div className={customizerContainer}>
        <div className={customizerMain}>
          <Customizer3D color={color}/>
          <CustomizerControls color={color} setColor={setColor}/>
        </div>
    </div>
  )
}
