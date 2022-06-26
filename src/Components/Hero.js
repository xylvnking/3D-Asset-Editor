import React from 'react'
import { heroMain, heroImage, heroContent, bigType, bigType2 } from './Hero.module.css'


export default function Hero() {
  return (
    <div className={heroMain}>
        <div className={heroImage}>
            <h2 className={bigType}>
                ///////
            </h2>
            <h2 className={bigType2}>
                ///////
            </h2>
            <div className={heroContent}>
                <h1>cyberWear jewelry</h1>
                <p>Embrace an opulent future</p>
                <button>Create Your Own</button>
                
            </div>
        </div>
    </div>
  )
}
