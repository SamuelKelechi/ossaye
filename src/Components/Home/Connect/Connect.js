import React from 'react'
import './Connect.css'
import Sabu from '../../assets/sa.jpg'
import Twitter from '../../assets/tw.png'
import Lv from '../../assets/Lv.png'
import Msg from '../../assets/Msg.png'
import Sh from '../../assets/Sh.png'
import Fr from '../../assets/Fr.png'
import Post1 from '../../assets/Post1.png'
import Post2 from '../../assets/post2.jpg'
import Post3 from '../../assets/post3.jpg'
import Post4 from '../../assets/post4.jpg'
import Post5 from '../../assets/post5.jpg'






const Connect = () => {
  return (
    <div className='Connect-Container'>
      <div className='Connect-Header'>
          <span>CONNECT WITH</span>
          <h1>SAO On Social Media</h1>
      </div>
      <div className='Connect-Container-Wrapper'>
        <div className='Connect-Left-Contain'>UPDATING...</div>
        
        <div className='Connect-Right-Contain'>
          <div className='Connect-Right-Header'>
            <div className='Connect-Right-Header-Wrapper'>
              <marquee style={{width:"50%"}}><h3>Tweets from @saburakanbi</h3></marquee>
              <button className='Follow-Button'>Follow</button>
            </div>
          </div>
          <div className='Connect-Right-Content'>

            <a href='https://twitter.com/saburakanbi/status/1668265468837130243' style={{textDecoration:'none', color:'inherit'}}>
              <div className='Connect-Right-Columns'>
                  <div className='Connect-Right-Columns-Wrap'>
                      <div className='Connect-Right-Columns-Left'>
                        <img src={Sabu} alt='profile pic' className='Twitter-Profile'/>
                      </div>
                      <div className='Connect-Right-Columns-Right'>
                        <p className='Connect-Right-Columns-Top-Para'>
                          <span>Sabur Akanbi Oluwa <span style={{opacity:'0.5'}}>@saburakanbi · Jun 12</span></span><span><img src={Twitter} ></img></span>
                        </p>
                        <p className='Main-Story' >Happy Democracy Day! <br/><br/>On this auspicious occasion of our Democracy Day, let us reflect on the journey that has led us here and honor the efforts that have secured our democratic values…1/2</p>
                        <div className='Twit-Body'>
                          <img src={Post2} style={{width:'100%', height:'200px', borderRadius:'15px 15px 15px 15px'}}/>
                        </div>
                        <div className='Twit-Footer'>
                            <div className='Twit-Footer-Icons'><span className='Twi-Icons'><img src={Msg} style={{width:'20px'}}/> </span> 16</div>
                            <div className='Twit-Footer-Icons'><span className='Twi-Icons'><img src={Sh} style={{width:'27px', height:'30px', marginTop:'-3px'}}/> </span>5</div>
                            <div className='Twit-Footer-Icons-Lv'><span className='Twi-Icons'><img src={Lv} style={{width:'20px'}}/> </span>19</div>
                            <div className='Twit-Footer-Icons'><span className='Twi-Icons'><img src={Fr} style={{width:'30px'}}/></span></div>
                        </div>
                      </div>
                  </div>
              </div>
            </a>

            <a href='https://twitter.com/saburakanbi/status/1666757737110204416' target='blank' style={{textDecoration:'none', color:'inherit'}}>
              <div className='Connect-Right-Columns'>
                  <div className='Connect-Right-Columns-Wrap'>
                      <div className='Connect-Right-Columns-Left'>
                        <img src={Sabu} alt='profile pic' className='Twitter-Profile'/>
                      </div>
                      <div className='Connect-Right-Columns-Right'>
                        <p className='Connect-Right-Columns-Top-Para'>
                          <span>Sabur Akanbi Oluwa <span style={{opacity:'0.5'}}>@saburakanbi · Jun 8</span></span><span><img src={Twitter} ></img></span>
                        </p>
                        <p className='Main-Story' >Lagos youngest lawmaker, 36, pledges effective representation</p>
                        <div className='Twit-Body'>
                          <img src={Post1} style={{width:'100%', height:'200px'}}/>
                          <div className='Punch-Link'>
                            <p style={{margin:'0', opacity:'0.5'}}>punchng.com</p>
                            <p style={{margin:'0', fontSize:'14px'}}>Lagos youngest lawmaker, 36, pledges effective representation</p>
                            <p style={{margin:'0', opacity:'0.5', fontSize:'14px'}}>The lawmakers took the Oath of Office after Governor Babajide Sanwo-Olu proclaimed the 10th Assembly on Tuesday morning.</p>
                          </div>
                          
                        </div>
                        <div className='Twit-Footer'>
                            <div className='Twit-Footer-Icons'><span className='Twi-Icons'><img src={Msg} style={{width:'20px'}}/> </span> 10</div>
                            <div className='Twit-Footer-Icons'><span className='Twi-Icons'><img src={Sh} style={{width:'27px', height:'30px', marginTop:'-3px'}}/> </span>9</div>
                            <div className='Twit-Footer-Icons-Lv'><span className='Twi-Icons'><img src={Lv} style={{width:'20px'}}/> </span>17</div>
                            <div className='Twit-Footer-Icons'><span className='Twi-Icons'><img src={Fr} style={{width:'30px'}}/></span></div>
                        </div>
                      </div>
                  </div>
              </div>
            </a>

            <a href='https://twitter.com/saburakanbi/status/1666494598326239233' target='blank' style={{textDecoration:'none', color:'inherit'}}>
              <div className='Connect-Right-Columns'>
                  <div className='Connect-Right-Columns-Wrap'>
                      <div className='Connect-Right-Columns-Left'>
                        <img src={Sabu} alt='profile pic' className='Twitter-Profile'/>
                      </div>
                      <div className='Connect-Right-Columns-Right'>
                        <p className='Connect-Right-Columns-Top-Para'>
                          <span>Sabur Akanbi Oluwa <span style={{opacity:'0.5'}}>@saburakanbi · Jun 7</span></span><span><img src={Twitter} ></img></span>
                        </p>
                        <p className='Main-Story' >Yesterday, Alongside 39 others, i was inaugurated as a member of the State House of Assembly to represent the good people of Ajeromi-Ifelodun Constituency II Lagos state.</p>
                        <div className='Twit-Body'>
                          <img src={Post3} style={{width:'100%', height:'200px', borderRadius:'8px 8px 8px 8px'}}/>
                        </div>
                        <div className='Twit-Footer'>
                            <div className='Twit-Footer-Icons'><span className='Twi-Icons'><img src={Msg} style={{width:'20px'}}/> </span> 17</div>
                            <div className='Twit-Footer-Icons'><span className='Twi-Icons'><img src={Sh} style={{width:'27px', height:'30px', marginTop:'-3px'}}/> </span>6</div>
                            <div className='Twit-Footer-Icons-Lv'><span className='Twi-Icons'><img src={Lv} style={{width:'20px'}}/> </span>25</div>
                            <div className='Twit-Footer-Icons'><span className='Twi-Icons'><img src={Fr} style={{width:'30px'}}/></span></div>
                        </div>
                      </div>
                  </div>
              </div>
            </a>

            <a href='https://twitter.com/saburakanbi/status/1663148957411753987' target='blank' style={{textDecoration:'none', color:'inherit'}}>
              <div className='Connect-Right-Columns'>
                  <div className='Connect-Right-Columns-Wrap'>
                      <div className='Connect-Right-Columns-Left'>
                        <img src={Sabu} alt='profile pic' className='Twitter-Profile'/>
                      </div>
                      <div className='Connect-Right-Columns-Right'>
                        <p className='Connect-Right-Columns-Top-Para'>
                          <span>Sabur Akanbi Oluwa <span style={{opacity:'0.5'}}>@saburakanbi · May 29</span></span><span><img src={Twitter} ></img></span>
                        </p>
                        <p className='Main-Story' >As we begin a new journey as a united nation, I congratulate @officialABAT GCFR, the President and Commander-in-Chief of the Federal Republic of Nigeria, on his inauguration as the new captain of Nigeria's ship…1/2</p>
                        <div className='Twit-Body'>
                          <img src={Post4} style={{width:'100%', height:'200px', borderRadius:'14px 14px 14px 14px'}}/> 
                        </div>
                        <div className='Twit-Footer'>
                            <div className='Twit-Footer-Icons'><span className='Twi-Icons'><img src={Msg} style={{width:'20px'}}/> </span> 8</div>
                            <div className='Twit-Footer-Icons'><span className='Twi-Icons'><img src={Sh} style={{width:'27px', height:'30px', marginTop:'-3px'}}/> </span>5</div>
                            <div className='Twit-Footer-Icons-Lv'><span className='Twi-Icons'><img src={Lv} style={{width:'20px'}}/> </span>14</div>
                            <div className='Twit-Footer-Icons'><span className='Twi-Icons'><img src={Fr} style={{width:'30px'}}/></span></div>
                        </div>
                      </div>
                  </div>
              </div>
            </a>
            
            <a href='https://twitter.com/saburakanbi/status/1662884139257692163' target='blank' style={{textDecoration:'none', color:'inherit'}}>
              <div className='Connect-Right-Columns'>
                  <div className='Connect-Right-Columns-Wrap'>
                      <div className='Connect-Right-Columns-Left'>
                        <img src={Sabu} alt='profile pic' className='Twitter-Profile'/>
                      </div>
                      <div className='Connect-Right-Columns-Right'>
                        <p className='Connect-Right-Columns-Top-Para'>
                          <span>Sabur Akanbi Oluwa <span style={{opacity:'0.5'}}>@saburakanbi · May 28</span></span><span><img src={Twitter} ></img></span>
                        </p>
                        <p className='Main-Story' >Today the 28th of May, 2023, i was at the headquarters of the Liberation Word Evangelical Ministries on Arumo Street, Ajegunle Lagos for my victory Thanksgiving service. At the service, I expressed gratitude to God for leading me to electoral success…1/2</p>
                        <div className='Twit-Body'>
                          <img src={Post5} style={{width:'100%', height:'200px', borderRadius:'14px 14px 14px 14px'}}/>
                        </div>
                        <div className='Twit-Footer'>
                            <div className='Twit-Footer-Icons'><span className='Twi-Icons'><img src={Msg} style={{width:'20px'}}/> </span> 10</div>
                            <div className='Twit-Footer-Icons'><span className='Twi-Icons'><img src={Sh} style={{width:'27px', height:'30px', marginTop:'-3px'}}/> </span>9</div>
                            <div className='Twit-Footer-Icons-Lv'><span className='Twi-Icons'><img src={Lv} style={{width:'20px'}}/> </span>17</div>
                            <div className='Twit-Footer-Icons'><span className='Twi-Icons'><img src={Fr} style={{width:'30px'}}/></span></div>
                        </div>
                      </div>
                  </div>
              </div>
            </a>

            <div style={{width:'100%', display:'flex', justifyContent:'center', margin:'10px 0 10px 0',}}>
              <a href='https://twitter.com/saburakanbi' target='blank' style={{textDecoration:'none', color:'inherit'}}>              
                <button className='Follow-Button' style={{height:'28px', backgroundColor:'#1D9BF0', color:'white'}}>More...</button>
              </a>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Connect