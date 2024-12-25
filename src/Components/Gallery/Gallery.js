import React from 'react';
import pix1 from "../assets/pix1.jpeg"
import pix2 from "../assets/pix2.jpeg"
import pix3 from "../assets/pix3.jpeg"
import pix4 from "../assets/pix4.jpg"
import pix5 from "../assets/pix5.jpg"
import pix6 from "../assets/pix6.jpg"
import pix7 from "../assets/A1.jpeg"
import pix8 from "../assets/A2.jpeg"
import pix9 from "../assets/A3.jpeg"
import pix10 from "../assets/A4.jpeg"
import pix11 from "../assets/A5.jpeg"
import pix12 from "../assets/A6.jpeg"
import pix13 from "../assets/A7.jpeg"
import pix14 from "../assets/A8.jpeg"
import pix15 from "../assets/A9.jpeg"
import pix16 from "../assets/A10.jpeg"
import pix17 from "../assets/A11.jpeg"
import pix18 from "../assets/A12.jpeg"
import pix19 from "../assets/A13.jpeg"
import pix20 from "../assets/A14.jpeg"
import pix21 from "../assets/A15.jpeg"

import {
  MDBContainer,
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <>
    
    <h4 style={{textAlign:"center", margin:"15px 0", fontFamily: "cursive"}}>EXPLORE OUR GALLERY</h4>
    <div style={{display:"flex", justifyContent:"center"}}>
      <div style={{width:"95%"}}>
        <MDBRow>
          <MDBCol lg={4} md={12} className='mb-4 mb-lg-0'>
            <img
              src={pix1}
              className='w-100 shadow-1-strong rounded mb-4'
              alt='Boat on Calm Water'
            />
            <p>Dare Ojepe, the Senior Special Assistant to the President on Youth Engagement</p>

            <img
              src={pix5}
              className='w-100 shadow-1-strong rounded mb-4'
              alt='Wintry Mountain Landscape'
            />
            <p>Dare Ojepe With the Honourable Minister for Youth Development</p>
          </MDBCol>

          <MDBCol lg={4} className='mb-4 mb-lg-0'>
            <img
              src={pix3}
              className='w-100 shadow-1-strong rounded mb-4'
              alt='Mountains in the Clouds'
            />

            <img
              src={pix4}
              className='w-100 shadow-1-strong rounded mb-4'
              alt='Boat on Calm Water'
            />
          </MDBCol>

          <MDBCol lg={4} className='mb-4 mb-lg-0'>
            <img
              src={pix2}
              className='w-100 shadow-1-strong rounded mb-4'
              alt='Waves at Sea'
            />

            <img
              src={pix6}
              className='w-100 shadow-1-strong rounded mb-4'
              alt='Yosemite National Park'
            />
            <p> Dare Ojepe met with Mobolaji Ogunlende, the Commissioner for Youth and Social Development, Lagos. </p>
          </MDBCol>

          <MDBCol lg={4} md={12} className='mb-4 mb-lg-0'>
            <img
              src={pix7}
              className='w-100 shadow-1-strong rounded mb-4'
              alt='Boat on Calm Water'
            />
            <p>Dare on duty as FIFA Licensed referee</p>
            <img
              src={pix8}
              className='w-100 shadow-1-strong rounded mb-4'
              alt='Wintry Mountain Landscape'
            />
            <p>Dare participating at an environmental protection workshop in Germany</p>
          </MDBCol>

          <MDBCol lg={4} md={12} className='mb-4 mb-lg-0'>
            <img
              src={pix9}
              className='w-100 shadow-1-strong rounded mb-4'
              alt='Boat on Calm Water'
            />
            <p>SSAP with the governor of Lagos, Gov. Babajide Sanwo-Olu and Mr. Tunde Rahman, SSAP to the President</p>
            <img
              src={pix10}
              className='w-100 shadow-1-strong rounded mb-4'
              alt='Wintry Mountain Landscape'
            />
            <p>Dare with Ex-Internaltional Mikel John Obi</p>
          </MDBCol>
          <MDBCol lg={4} md={12} className='mb-4 mb-lg-0'>
            <img
              src={pix11}
              className='w-100 shadow-1-strong rounded mb-4'
              alt='Boat on Calm Water'
            />
            <p>First media parley of the administration of President Bola Tinubu in 2024</p>
            <img
              src={pix12}
              className='w-100 shadow-1-strong rounded mb-4'
              alt='Wintry Mountain Landscape'
            />
            <p>SSAP presenting a copy of Lead Lagos to Mr. President, President Bola Tinubu</p>
          </MDBCol>

          <MDBCol lg={4} md={12} className='mb-4 mb-lg-0'>
            <img
              src={pix13}
              className='w-100 shadow-1-strong rounded mb-4'
              alt='Boat on Calm Water'
            />
            <p>SSAP and other aides of the President</p>
            <img
              src={pix21}
              className='w-100 shadow-1-strong rounded mb-4'
              alt='Wintry Mountain Landscape'
            />
            <p>SSAP in company of senior aides of Mr. President at the Presidential campaign rally</p>
          </MDBCol>

          <MDBCol lg={4} md={12} className='mb-4 mb-lg-0'>
            <img
              src={pix15}
              className='w-100 shadow-1-strong rounded mb-4'
              alt='Boat on Calm Water'
            />
            <p>SSAP with Hon. Demola Oshodi at a strategic meeting overseas</p>
            <img
              src={pix16}
              className='w-100 shadow-1-strong rounded mb-4'
              alt='Wintry Mountain Landscape'
            />
          </MDBCol>

          <MDBCol lg={4} md={12} className='mb-4 mb-lg-0'>
            <img
              src={pix18}
              className='w-100 shadow-1-strong rounded mb-4'
              alt='Wintry Mountain Landscape'
            />
            <p>SSAP and Mr. President, President Bola Tinubu</p>
          </MDBCol>

        </MDBRow>
      </div>
    </div>
    </>
  );
}