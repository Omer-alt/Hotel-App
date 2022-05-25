import React from 'react'
import '../../styles/singleRoom.css'
import singleRoom from '../assets/images/singleRoom.jpg'
import key from '../assets/images/cle.png'
import breakfast from '../assets/images/cafe.png'
import outlary from '../assets/images/smoke.png'
import singleRoom1 from '../assets/images/singleRoom1.jpg'
import avatar from '../assets/images/avatar2.png'

const SingleRoom = () => {
  return (
    <section className='singleRoomSection'>
        <img src={singleRoom} alt='single room look'className='singleRoom' />

        <div className='overlay-Room'>
            <div className='overlaySection'></div>

            <div className='overlaySection'>
                <span className='singleRoom-imgCall' style={{color:"#C19B76"}}>INN HOTEL</span>
                <div style={{color:"#FFF", marginTop:"20px"}}>Single Room</div>

                <h1 style={{fontSize: "50px", color:"#FFF"}}>
                    150
                    <span style={{fontSize: "30px"}}>$</span>
                    <span style={{fontSize: "14px"}}>/ month</span>
                </h1>

                <div className='singleRoom-Services'>
                    <div className='singleRoom-Service'>
                        <img src={key} alt='key' className='singleRoom-img'/>
                        <div className='singleRoom-imgCall'>SMART KEY</div>
                    </div>

                    <div className='singleRoom-Service' id='verticalBorder'>
                        <img src={breakfast} alt='brak fast' className='singleRoom-img'/>
                        <div className='singleRoom-imgCall'>BREAK FEAST</div>
                    </div>

                    <div className='singleRoom-Service'>
                        <img src={outlary} alt='outlary'className='singleRoom-img'/>
                        <div className='singleRoom-imgCall'>NO SMOKING</div>
                    </div>
                </div>
            </div>
        </div>

        <div className='roomConfort'>
            <img src={singleRoom1} alt='the bed dressing' className='confortImg'/>
        </div>

        <div className='customer'>
            <div className='customerAdvice'>
                Quisque vitae posuere libero. Phasellus feugiat erat sit amet dui condimentum imperdiet. Ut at libero nec ligula fringilla dictum sit amet id dui. Integer gravida dolor elit, sit amet vestibulum mi elementum eget. 
            </div>

            <div className='customerContainer'>
                <img src={avatar} className="customerAvatar" alt="avatar"/>

                <div className='customerInfo'>
                    <span style={{fontSize:"20px", color:"#1c1c1c"}}>John Doe</span><br/>
                    <span style={{fontSize:"12px",lineHeight:"2em", letterSpacing:"4px"}}>CUSTOMER</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SingleRoom