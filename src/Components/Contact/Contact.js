import React from 'react';
import styled from 'styled-components';
import Icon1 from "../assets/mail.png";
import Icon2 from "../assets/phone.png";
import Icon3 from "../assets/locate.png";


const Contact = () => {

  return (
      <>
        <Content>
            <Text>FIND US HERE</Text>
            <MapHolder>
                <iframe src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Federal Ministry of Youth Development Federal Secretariat Complex, phase 2, Block D Shehu Shagari Way Garki Abuja&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" style={{borderRadius:"8px", border:"0"}}></iframe>
            </MapHolder>
            <ContactHold>
                <ContactWrap>
                    <Left>
                        <Header>HELP DESK</Header>
                        <p>
                            Senior Special Assistant to the President on Youth Engagement
                        </p>
                        <ContHold>
                            <div style={{marginRight:"10px"}}><img src={Icon1} height='15px' alt='Email' /></div>
                            <div>
                                <h3>Chat with us</h3>
                                <p>ossayenigeria@gmail.com</p>
                            </div>
                        </ContHold>
                        <ContHold>
                            <div style={{marginRight:"10px"}}><img src={Icon2} height='15px' alt='Email' /></div>
                            <div>
                                <h3>Phone</h3>
                                <p>+234 7039412020</p>
                            </div>
                        </ContHold>
                        <ContHold>
                            <div style={{marginRight:"10px"}}><img src={Icon3} height='15px' alt='Email' /></div>
                            <div>
                                <h3>Address</h3>
                                <p>Federal Ministry of Youth Development, Federal Secretariat Complex</p>
                                <p>Phase II, Block D, (2nd Floor) Shehu Shagari Way, PMB 279, Garki Abuja</p>
                            </div>
                        </ContHold>
                        {/* <ContHold>
                            <div style={{marginRight:"10px"}}><img src={social} height='15px' alt='Email' /></div>
                            <div>
                                <h3>Socials</h3>
                                <p>You can also reach us via our social handles</p>
                                <span>
                                    <a href='' target='_blank'> 
                                        <img src={Facebook} alt='Facebook' />
                                    </a>

                                    <a href='' target='_blank'>  
                                        <img src={Instagram} alt='Instagram' />
                                    </a> 

                                    <a href='' target='_blank'>  
                                        <img style={{width:'28px'}} src={Twitter} alt='Twitter' />
                                    </a> 

                                    <a href='' target='_blank'>  
                                        <img  src={Youtube} alt='Youtube' />
                                    </a> 
                                </span>
                            </div>
                        </ContHold> */}
                    </Left>
                    <Right>
                        <Header>You Can Send a Direct Message</Header>
                        <InputHolder>
                            <InputSection>
                                <label>Name</label><br/><input  type='text' name='name'/>
                            </InputSection>

                            <InputSection>
                                <label>Email</label><br/> <input type='email' name='email'/>
                            </InputSection>

                            <InputSection>
                                <label>Subject</label><br/> <input  type='text' name='subject'/>
                            </InputSection>
                            
                            <InputSection>
                                <label>Message</label><br/> <textarea  type='text' name='message'/>
                            </InputSection>
                            
                            <Btn >Submit</Btn>
                        </InputHolder>
                    </Right>
                </ContactWrap>
            </ContactHold>
            
        </Content>
    </>
  )
}

export default Contact;

const Content = styled.div`
    width:100%;
    min-height:100vh;
    height:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Btn = styled.button`
    width:120px;
    border:none;
    outline:none;
    height:40px;
    border-radius:7px;
    color:#ffff;
    background-color:#3AB54A;
    margin-top:10px;
    transition:all 590ms;
    transform:scale(1);

    :hover{
        cursor:pointer;
        transform:scale(1.10)
    }
    @media screen and (max-width: 650px){
        margin-bottom: 40px;
    }
`

const MapHolder = styled.div`
    width: 90%;
    height: 450px;
    border: 1px solid whitesmoke;
    margin: 15px 0 15px 0;
    border-radius: 8px;

    @media screen and (max-width: 425px){
        height: 350px;
        width: 95%;
    }
`
const Text = styled.div`
    font-size: 25px;
    font-weight: bold;
    width: 90%;
    margin-top: 20px;
    
    @media screen and (max-width: 425px){
        width: 95%;
    }
`
const ContactHold = styled.div`
    width: 100%;
    margin-bottom: 40px;
    margin-top: 40px;
    background-color: #171724;
    display: flex;
    justify-content: center;
    padding: 50px 0 50px 0;

    @media screen and (max-width: 650px){
        margin-top: 20px;
    }
`

const ContactWrap = styled.div`
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    color: white;

    @media screen and (max-width: 1024px){
        justify-content: center;
    }

    @media screen and (max-width: 650px){
        width: 95%;
        justify-content: center;
        margin-left: 10px;
    }
`

const Left = styled.div`
    width: 500px;
    display: flex;
    flex-direction: column;

    p{
        width: 300px;
    }

    @media screen and (max-width: 650px){
        width: 100%;
    }
`
const Right = styled.div`
    width: 500px;

    @media screen and (max-width: 650px){
        margin-top: 40px;
        width: 100%;
    }
`
const Header = styled.div`
    font-size:30px;
    margin-bottom: 15px;

    @media screen and (max-width: 425px){
        font-size: 20px;
    }
`
const ContHold = styled.div`
    display: flex;
    width: 250px;
    justify-content: space-between;

    h3{
        color: white;
    }
    p{
        width: 100%;
    }

    span{
        width: 200px;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }

    @media screen and (max-width: 650px){
        width: 90%;
        justify-content: flex-start;
    }
`
const InputHolder = styled.div`
    height: 550px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 500px;
    align-items: center;

    Button{
        height: 40px;
        width: 184px;
        border-radius: 8px;
        background-color: #25AAE2;
        color: white;
    }

    @media screen and (max-width: 850px){
        width: 100%;
        justify-content: center;

        Button{
        margin-top: 20px;
        }
    }
    
`

const InputSection = styled.div`
    width: 100%;

    input{
        height: 45px;
        width: 450px;
        border-radius: 8px;
        outline: none;
        color: black;
    }

    textarea{
        height: 175px;
        width: 450px;
        border-radius: 8px;
        color: black;
        outline: none;
    }

    @media screen and (max-width: 850px){
        margin-top: 15px;
    }    

    @media screen and (max-width: 650px){

        input{
            width: 95%;
        }

        textarea{
            width: 95%;
        }
    }
`
