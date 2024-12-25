import React from 'react'
import "./Updates.css"
import Greetings from "../../assets/Greetings.jpg"

const Updates = () => {
  return (
    <div className='Updates-Container'>
        <h4 className='Marquee-Holder'><marquee>BLOG UPDATES</marquee></h4>
        <div className='Update-Section'>
            <div className='Update-Left'>
                Access the latest news, upcoming events, and live updates directly on our platform...
            </div>
            <div className='Update-Right'>
                <img className='Update-Img' src={Greetings} />
            </div>
        </div>
    </div>
  )
}

export default Updates