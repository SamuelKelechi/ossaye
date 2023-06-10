import React,{useState}  from 'react'
import Logo from '../assets/logos.png'
import {FaBars, FaTimes} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const [color, setColor] = useState(false)

    const HandleToggle = () => {
        setToggle(!toggle)
    }

    const changeColor = () => {
        if (window.scrollY >= 850) {
            setColor(true)
        } else{
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)

  return (
    <>
        <div  className={color ? 'Header-Container Header-Container-Stick' : 'Header-Container'}>
            <div className='Header-Hold'>

                <div className='Logo-Hold'>
                    <img src={Logo} className='Logo' alt='Logo'/> SABUR AKANBI OLUWA
                </div>


                <div className='Navs-Hold'>
                    <Link to='/' class="link">
                        <span class="text-out">HOME</span>
                        <span class="text-in" >HOME</span>
                    </Link>

                    <Link to='#' class="link">
                        <span class="text-out">BIO</span>
                        <span class="text-in" >SAO BIO</span>
                    </Link>

                    <Link to='#' class="link">
                        <span class="text-out">2023</span>
                        <span class="text-in" >MANIFESTO</span>
                    </Link>

                    <Link to='#' class="link">
                        <span class="text-out">GALLERY</span>
                        <span class="text-in" >GALLERY</span>
                    </Link>

                    <Link to='#' class="link">
                        <span class="text-out">CONTACT</span>
                        <span class="text-in" >CONTACT</span>
                    </Link>
                </div>

                <div class="Mobile-Icons" onClick={HandleToggle} >
                    {toggle ? (<FaTimes size={25} /> ):(<FaBars size={25} />)}
                </div>

            </div>
        
            {toggle && (
                <div className={color ? "drop-up-menu drop-up-menu-stick" : "drop-up-menu"}>
                    <li className='Hover-Link'>HOME</li>
                    <hr/>
                    <li className='Hover-Link'>BIO</li>
                    <hr/>
                    <li className='Hover-Link'>MANIFESTO</li>
                    <hr/>
                    <li className='Hover-Link'>GALLERY</li>
                    <hr/>
                    <li className='Hover-Link'>CONTACT</li>
                    <hr/>
                </div>
            )}
        </div>
    </>
  )
}

export default Header