import React from 'react'
import './Hero.css'
import Typewriter from 'typewriter-effect';


function Hero() {
 

  return (
    <div className='Home-Hero-Continer'>
        <div className='Home-Hero-Wrapper'>
            <div className='Home-Hero-Center'>
                <span>HON. SABUR AKANBI OLUWA</span>
                <h1 className='Typing-Text-Holder'>
                  <Typewriter
                    options={{
                      strings: ['HISTORIAN', 'BUDDING POLITICIAN', 'LEGISLATIVE EXPERT'],
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