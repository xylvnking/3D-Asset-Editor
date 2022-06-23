import React, {useState} from 'react'
import { customizerCanvas, customizerControls } from './Customizer.module.css'
import { HexColorPicker } from "react-colorful";

export default function CustomizerControls(props) {

    

    return (
        <div className={customizerControls}>
            <HexColorPicker color={props.color} onChange={props.setColor} />
        </div>
    )
}
