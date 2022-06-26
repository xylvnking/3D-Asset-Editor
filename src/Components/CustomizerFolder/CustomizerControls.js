import React, {useState} from 'react'
import { customizerCanvas, customizerControls } from './Customizer.module.css'
import { HexColorPicker } from "react-colorful";

// can probably delete just watch for references


export default function CustomizerControls(props) {

    

    return (
        <div className={customizerControls}>
            <HexColorPicker />
        </div>
    )
}
