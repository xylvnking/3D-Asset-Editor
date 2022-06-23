import React, {useState} from 'react'
import { customizerCanvas } from './Customizer.module.css'
import { HexColorPicker } from "react-colorful";

export default function CustomizerControls(props) {

    // const [color, setColor] = useState("#aabbcc");

    return (
        <HexColorPicker color={props.color} onChange={props.setColor} />
    )
}
