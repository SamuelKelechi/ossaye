import React from 'react';
import pix1 from "../assets/pix1.jpeg"
import pix2 from "../assets/pix2.jpeg"
import pix3 from "../assets/pix3.jpeg"
import pix4 from "../assets/pix4.jpg"
import pix5 from "../assets/pix5.jpg"
import pix6 from "../assets/pix6.jpg"
import {
  MDBContainer,
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <>
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
        </MDBRow>
      </div>
    </div>
    </>
  );
}