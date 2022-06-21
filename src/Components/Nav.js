import React from 'react'
import { navstyles } from './Nav.module.css'


export default function Nav() {
  return (
    <div className={navstyles}>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Reviews</li>
            <li>Connect</li>
        </ul>
    </div>
  )
}
