import React from 'react'
import { navstyles, navIcon } from './Nav.module.css'


export default function Nav() {
  return (
    <div className={navstyles}>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Reviews</li>
            <li>Connect</li>
            <svg className={navIcon} xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M6 36V33H42V36ZM6 25.5V22.5H42V25.5ZM6 15V12H42V15Z"/></svg>

        </ul>
    </div>
  )
}


