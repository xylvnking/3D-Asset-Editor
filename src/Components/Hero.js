import React from 'react'
import { heroMain, heroImage, heroContent, bigType, bigType2 } from './Hero.module.css'


export default function Hero() {
  return (
    <div className={heroMain}>
        <div className={heroImage}>
            <h2 className={bigType}>
                CYBER<br />PREP
            </h2>
            <h2 className={bigType2}>
                CYBER<br />PREP
            </h2>
            <div className={heroContent}>
                <h1>Cyberprep Jewelry</h1>
                <p>Embrace an opulent future.</p>
                <button>Shop Now</button>
            </div>
        </div>
    </div>
  )
}
