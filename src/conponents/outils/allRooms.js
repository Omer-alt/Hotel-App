import React from 'react'
import "../../styles/allRooms.css"

import room1 from "../assets/images/room-1.jpg"
import room2 from "../assets/images/room-2.jpg"
import room3 from "../assets/images/room-3.jpg"
import guest from "../assets/images/icon-guests.png"
import size from "../assets/images/icon-size.png"

const AllRooms = () => {
  return (
    <div>
        <section className='room-text'>
            <div className='room-text-title'>
               <h5 className='accommodation'>ACCOMMODATIONS</h5>
                <h1 className='all-room'>All Rooms</h1>
            </div>
            <div className='room-text-p'>
                Quisque vitae posuere libero. Phasellus feugiat erat sit amet dui condimentum imperdiet. Ut at 
                <u>libero nec ligula fringilla dictum</u>
                sit amet id dui. Integer gravida dolor elit, sit amet vestibulum mi elementum eget. 
            </div>
            <div className='room-blackbox'>VIEW ALL</div>
        </section>

        <section className='room-photos'>
            <div>
                <img src={room1} alt="room" className='room' ></img>
                <div className='room-description'>
                    <div className='room-graybox'>FROM 34 $</div>
                    <div className='room-type'>
                        <span className='room-name'>PRIVATE SUITE</span>
                        <div className='room-type-guest'>
                            <img src={guest} alt="guest" className='room-guest'></img>
                            <span className='space'>1 GUESTS</span>
                            <img src={size} alt="icons-size" className='room-size'></img>
                            <span className='space'>23 FT</span>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <img src={room2} alt="room" className='room' ></img>
                <div className='room-description'>
                    <div className='room-graybox'>FROM 86 $</div>
                    <div className='room-type'>
                        <span className='room-name'>DELUXE ROOM</span>
                        <div className='room-type-guest'>
                            <img src={guest} alt="guest" className='room-guest'></img>
                            <span className='space'>5 GUESTS</span>
                            <img src={size} alt="icons-size" className='room-size'></img>
                            <span className='space'>56 FT</span>
                        </div>
                    </div>
                </div>
            </div>
            <div>
            <img src={room3} alt="room" className='room' ></img>
                <div className='room-description'>
                    <div className='room-graybox'>FROM 86 $</div>
                    <div className='room-type'>
                        <span className='room-name'>DELUXE ROOM</span>
                        <div className='room-type-guest'>
                            <img src={guest} alt="guest" className='room-guest'></img>
                            <span className='space'>5 GUESTS</span>
                            <img src={size} alt="icons-size" className='room-size'></img>
                            <span className='space'>56 FT</span>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    </div>
  )
}

export default AllRooms




