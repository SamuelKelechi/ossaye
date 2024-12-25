import React,{useState}  from 'react'
import Logo from '../assets/logo.png'
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
        if (window.scrollY >= 800) {
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
                    <img src={Logo} className='Logo' alt='Logo'/> DARE OJEPE
                </div>


                <div className='Navs-Hold'>
                    <Link to='/' class="link">
                        <span class="text-out">HOME</span>
                        <span class="text-in" >HOME</span>
                    </Link>

                    <Link to='/bio' class="link">
                        <span class="text-out">BIO</span>
                        <span class="text-in" >DARE BIO</span>
                    </Link>

                    <Link to='/blog' class="link">
                        <span class="text-out">BLOG</span>
                        <span class="text-in" >EVENTS</span>
                    </Link>

                    <Link to='/gallery' class="link">
                        <span class="text-out">GALLERY</span>
                        <span class="text-in" >GALLERY</span>
                    </Link>

                    <Link to='/contact' class="link">
                        <span class="text-out">CONTACT</span>
                        <span class="text-in" >CONTACT</span>
                    </Link>
                </div>

                <div class="Mobile-Icons" onClick={HandleToggle} >
                    {toggle ? (<FaTimes size={25} /> ):(<FaBars size={25} />)}
                </div>

            </div>
        
            {toggle && (
                <div className={color ? "drop-up-menu drop-up-menu-stick" : "drop-up-menu"} toggle={toggle}>
                    <Link to="/" className='Hover-Link' onClick={HandleToggle}>HOME</Link>
                    <hr/>
                    <Link to="/bio" className='Hover-Link' onClick={HandleToggle}>BIO</Link>
                    <hr/>
                    <Link to="/blog" className='Hover-Link' onClick={HandleToggle}>BLOG</Link>
                    <hr/>
                    <Link to="/gallery" className='Hover-Link' onClick={HandleToggle}>GALLERY</Link>
                    <hr/>
                    <Link to="/contact" className='Hover-Link' onClick={HandleToggle}>CONTACT</Link>
                    <hr/>
                </div>
            )}
        </div>
    </>
  )
}

export default Header