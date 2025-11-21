import React from 'react'

import style from './navbar/Navbar.module.css'
export default function Navbar() {
  return (
    
    <div className={`${style.Navbar} container`}>
    <nav>
      <div>
        <img src="brand_logo.png" alt="" srcset="" />
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact us</li>
      </ul>
    </nav>
    </div>
  )
}
