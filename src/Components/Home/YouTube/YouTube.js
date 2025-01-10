import React from 'react'
import './YouTube.css'

const YouTube = () => {
  return (
    <div className='YouTube_Container'>
      <div className='YouTube_Container_Wrapper'>
        <div className='YouTube_LeftText'>
            <h3>For The First Time Since 1999, Nigeria Has a Government That Listens to The Youths</h3>
            <p>What we were lacking, which President Tinubu has fixed, is bringing in competent leaders with character.
            
           <br/><br/> 
           <b>Ayodele Olawande, Minister of Youth Development</b></p>
        </div>
        <div className='YouTube_Video_Hold'>
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/WKcjBU7z53M?si=bJV_jfC1_cwwHaVR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  )
}

export default YouTube