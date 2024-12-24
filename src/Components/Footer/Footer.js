import React from 'react'
import './Footer.css'
import Logo from '../assets/logo.png'
import Facebook from "../assets/facebook.png";
import Instagram from "../assets/instagram.png";
import Twitter from "../assets/twitter.png";
import Youtube from "../assets/youtube.png";
import social from "../assets/social.webp";

let date = new Date().getFullYear();

const Footer = () => {
  return (
    <div className='Footer-Container'>
        <div className='Footer-Akanbi-Hold'>
            <img src={Logo} className='Footer-Logo'/>
            <h2 className='Footer-Name'>DARE OJEPE (OSSAYE)</h2>
            <br/>
            <div className='Social-Connect-Hold'> <b>CONNECT</b> 
                <span className='Social-Connect'>
                                    <a href='' target='_blank'> 
                                        <img className='Social-Icon-Each1' src={Facebook} alt='Facebook' />
                                    </a>

                                    <a href='' target='_blank'>  
                                        <img className='Social-Icon-Each2' src={Instagram} alt='Instagram' />
                                    </a> 

                                    <a href='' target='_blank'>  
                                        <img className='Social-Icon-Each3' src={Twitter} alt='Twitter' />
                                    </a> 

                                    <a href='' target='_blank'>  
                                        <img className='Social-Icon-Each4'  src={Youtube} alt='Youtube' />
                                    </a> 
                </span> 
            </div>
        </div>
        <div className='Footer-Reserved'>
            <span>Developed with <a href="https://dev-samuel-kelechi.web.app/" target="blank" style={{textDecoration:"none", color:"red", fontWeight:'bolder'}}>Love</a> 🚀 | © {date} All rights reserved</span>
        </div>
    </div>
  )
}

export default Footer