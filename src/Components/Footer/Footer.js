import React from 'react'
import './Footer.css'
import Logo from '../assets/logo.png'
import Facebook from "../assets/facebook.png";
import Instagram from "../assets/instagram.png";
import Twitter from "../assets/twitter.png";
import Youtube from "../assets/youtube.png";

let date = new Date().getFullYear();

const Footer = () => {
  return (
    <div className='Footer-Container'>
        <div className='Footer-Akanbi-Hold'>
            <img src={Logo} className='Footer-Logo' alt='logo'/>
            <h2 className='Footer-Name'>DARE OJEPE</h2>
            <h5>SSAP, YOUTH ENGAGEMENT</h5>
            <br/>
            <div className='Social-Connect-Hold'> <b>CONNECT</b> 
                <span className='Social-Connect'>
                                    <a href='https://www.instagram.com/dareojepe/' target='_blank' rel="noreferrer">  
                                        <img className='Social-Icon-Each2' src={Instagram} alt='Instagram' />
                                    </a> 

                                    <a href='https://www.facebook.com' target='_blank' rel="noreferrer"> 
                                        <img className='Social-Icon-Each1' src={Facebook} alt='Facebook' />
                                    </a>

                                    <a href='https://twitter.com/' target='_blank' rel="noreferrer">  
                                        <img className='Social-Icon-Each3' src={Twitter} alt='Twitter' />
                                    </a> 

                                    <a href='https://www.youtube.com' target='_blank' rel="noreferrer">  
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