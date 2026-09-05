import React from 'react'
import "./Updates.css"
import update2 from "../../assets/update2.jpeg"
import update1 from "../../assets/update1.jpeg"


const Updates = () => {
  return (
    <div className='Updates-Container'>
        <h4 className='Marquee-Holder'><marquee>LATEST UPDATES</marquee></h4>
        
        <div className='Update-Section'>
            <div className='Update-Left'>
                Access the latest news, upcoming events, and live updates directly on our platform...
                <img className='Update-Img' src={update1} alt='Christmas Message'/>
            </div>
            <div className='Update-Right'>
                <img className='Update-Img' src={update2} alt='Christmas Greetings'/>
            </div>
        </div>
    </div>
  )
}

export default Updates