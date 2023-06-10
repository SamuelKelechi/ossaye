import React from 'react'
import './Connect.css'
import Sabu from '../../assets/sa.jpg'
import Twitter from '../../assets/tw.png'
import Lv from '../../assets/Lv.png'
import Msg from '../../assets/Msg.png'
import Sh from '../../assets/Sh.png'
import Fr from '../../assets/Fr.png'
import Post1 from '../../assets/Post1.png'



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
             
          </div>
        </div>
      </div>
    </div>
  )
}

export default Connect