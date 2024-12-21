import React from 'react'
import './Hero.css'
import Typewriter from 'typewriter-effect';


function Hero() {
 

  return (
    <div className='Home-Hero-Continer'>
        <div className='Home-Hero-Wrapper'>
            <div className='Home-Hero-Center'>
                <h2>DARE OJEPE</h2>
                <span style={{padding:'10px'}}>OFFICE OF THE SENIOR SPECIAL ASSISTANT</span> <br/>
                <span style={{padding:'10px'}}>TO THE PRESIDENT ON YOUTH ENGAGEMENT (OSSAYE)</span>
                <h1 className='Typing-Text-Holder'>
                  <Typewriter
                    options={{
                      strings: ['PUBLISHER', 'PUBLIC SERVICE', 'SPORTS MAN'],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                  
                </h1>
            </div>
           
        </div>
    </div>
  )
}

export default Hero