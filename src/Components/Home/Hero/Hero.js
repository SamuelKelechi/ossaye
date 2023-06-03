import React,{useState} from 'react'
import './Hero.css'
import Logo from '../../assets/logo.png'
import {FaBars, FaTimes} from 'react-icons/fa'

function Hero() {
    const [toggle, setToggle] = useState(false);

    const HandleToggle = () => {
        setToggle(!toggle)
    }

  return (
    <div className='Home-Hero-Continer'>
        <div className='Home-Hero-Wrapper'>
            <div></div>


            <div className='Home-Hero-Center'>
                <span>SABUR AKANBI OLUWA</span>
                <h1>TYPINGS HERE...</h1>
            </div>

            <div className='Header-Hold'>

                <div className='Logo-Hold'>
                    <img src={Logo} className='Logo' alt='Logo'/> SABUR AKANBI OLUWA
                </div>


                <div className='Navs-Hold'>
                    <a href="#" class="link">
                        <span class="text-out">Link</span>
                        <span class="text-in" >Lets Get it</span>
                    </a>
                    <a href="#" class="link">
                        <span class="text-out">Link</span>
                        <span class="text-in" >Lets Get it</span>
                    </a>
                    <a href="#" class="link">
                        <span class="text-out">Link</span>
                        <span class="text-in" >Lets Get it</span>
                    </a>
                    <a href="#" class="link">
                        <span class="text-out">Link</span>
                        <span class="text-in" >Lets Get it</span>
                    </a>
                    <a href="#" class="link">
                        <span class="text-out">Link</span>
                        <span class="text-in" >Lets Get it</span>
                    </a>
                </div>

                <div class="Mobile-Icons" onClick={HandleToggle} >
                    {toggle ? (<FaTimes size={25} /> ):(<FaBars size={25} />)}
                </div>

            </div>
            
            {toggle && (
                    <div className="drop-up-menu">
                        <li>hi</li>
                        <li>hi</li>
                        <li>hi</li>
                    </div>
                )}
        </div>
    </div>
  )
}

export default Hero