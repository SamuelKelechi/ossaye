import React,{useState}  from 'react'
import Logo from '../assets/logo.png'
import {FaBars, FaTimes} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {

    const [toggle, setToggle] = useState(false);

    const HandleToggle = () => {
        setToggle(!toggle)
    }


  return (
    <>
        <div className='Header-Container'>
            <div className='Header-Hold'>

                <div className='Logo-Hold'>
                    <img src={Logo} className='Logo' alt='Logo'/> SABUR AKANBI OLUWA
                </div>


                <div className='Navs-Hold'>
                    <Link to='/' class="link">
                        <span class="text-out">HOME</span>
                        <span class="text-in" >HOME</span>
                    </Link>

                    <Link to='/bio' class="link">
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
                <div className="drop-up-menu">
                    <li>hi</li>
                    <li>hi</li>
                    <li>hi</li>
                </div>
            )}
        </div>
    </>
  )
}

export default Header