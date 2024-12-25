import React from 'react'
import './MeetSao.css'
import { Link } from 'react-router-dom';

const MeetSao = () => {
  return (
    <div className='Home-Meet-Container'>
        <div className='Home-Meet-Wrapper'>
            <div className='Meet-Header'>
                <span>First You Should</span>
                <h2>MEET DARE OJEPE</h2>
            </div>
            <div className='Meet-Paragraph-Holder'>
                <h3 style={{textAlign:"center"}}>Dare Ojepe, Senior Special Assistant to the President on Youth Engagement </h3>
                <p>Dare Ojepe is a multifaceted leader known for his dedication to elevating and celebrating the achievements of his peers. With a degree in Education majoring in Economics from the University of Lagos, Dare has harnessed his academic prowess to drive impactful change across various domains.</p>
                <p>At the helm of Swagger International Magazine, which boasts offices in Lagos, Germany, and the United States, Dare provides a powerful platform for young Nigerians making significant contributions globally. The magazine shines a light on innovators and change-makers who are redefining the limits of possibility and driving youth transformation with their extraordinary accomplishments.</p>
                <p>Dare's global travels have enriched his understanding of public infrastructure, inspiring him to prioritize development in Nigeria. His proactive ... <Link to='/bio'>Read More...</Link></p>
            </div>
        </div>
    </div>
  )
}

export default MeetSao;