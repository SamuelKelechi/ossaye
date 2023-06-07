import React from 'react'
import './Footer.css'
import Logo from '../assets/logos.png'

let date = new Date().getFullYear();

const Footer = () => {
  return (
    <div className='Footer-Container'>
        <div className='Footer-Akanbi-Hold'>
            <img src={Logo} className='Footer-Logo'/>
            <h2 className='Footer-Name'>SABUR AKANBI OLUWA</h2>
        </div>
        <div className='Footer-Reserved'>
            <span>Developed with <a href="https://dev-samuel-kelechi.web.app/" target="blank" style={{textDecoration:"none", color:"red", fontWeight:'bolder'}}>Love</a> 🚀 | © {date} All rights reserved, SAO</span>
        </div>
    </div>
  )
}

export default Footer