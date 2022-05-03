import React from 'react'
import { AiOutlineCheck } from "react-icons/ai";
import parallax from '../assets/images/parallax.jpg'
import roomService from '../assets/images/imgService1.jpg'
import laundry from '../assets/images/img-Service2.jpg'
import meals from '../assets/images/imgService3.jpg'

import '../../styles/services.css'



const Services = () => {
  return (
    <div className='service-others'>
       
        <section className='services'>
            <img src={parallax} alt='background relaxing fond' className='parallax'/>
            <div className='white-section'></div>
            <div className='overlay-div'>
                <div className='space-div'></div>
                <div className='principal-overlay'>
                    <h5>FACILITIES & MORE</h5>
                    <h1>ALL SERVICES</h1>
                    <p>
                    Quisque vitae posuere libero. Phasellus feugiat erat sit amet dui condimentum imperdiet. Ut at libero nec ligula fringilla dictum sit amet id dui. Integer gravida dolor elit, sit amet vestibulum mi elementum eget. 
                    </p>
                    <div className='butons'>
                        <span className='gray-buton'>RESQUEST NOW</span>
                        <span className='black-buton'>CONTACT US</span>
                    </div>
                </div>
                <div className='space'></div>
            </div>
        </section>
        <section className='others'>
            <div className='over-clean'>
                <div style={{backgroundColor : "#FFF"}}>
                    <img src={roomService} alt="room service" className='room-service'/>
                </div>
                <div className='over-block'>
                    <h5>ROOM CLEANING</h5>
                    <h1 style={{fontSize: "50px", color: "#1c1c1c", margin: "20px"}}>
                        150
                        <span style={{fontSize: "30px"}}>$</span>
                        <span style={{fontSize: "12px", color: "#5c5c5c"}}>/ month</span>
                    </h1>
                    <div style={{backgroundColor: "#FFF"}} className='over-block-text'>
                        <div className='over-line'>
                            <AiOutlineCheck/>
                            <span>Suspendisse nec tincidunt</span>
                        </div>
                        <div className='over-line'>
                            <AiOutlineCheck/>
                            <span>Vestibulum sit amet nibh</span>
                        </div>
                        <div className='over-line'>
                            <AiOutlineCheck/>
                            <span>Proin id eros dapibus, dict</span>
                        </div>
                        <div className='over-block-more'>
                            <a className='over-block-lien' href='#'>
                                MORE INFO
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='over-landry'>
                <div style={{backgroundColor : "#1C1C1C"}}>
                    <img src={laundry} alt="room service" className='room-service'/>
                </div>
                <div style={{backgroundColor : "#1C1C1C"}} className='over-block'>
                    <h5 style={{ color: "#FFF"}}>FULL LAUNDRY</h5>
                    <h1 style={{fontSize: "50px", color: "#FFF", margin: "20px"}}>
                        180
                        <span style={{fontSize: "30px"}}>$</span>
                        <span style={{fontSize: "12px"}}>/ month</span>
                    </h1>
                    <div id='over-block-text' >
                        <div className='over-line'>
                            <AiOutlineCheck/>
                            <span>Suspendisse nec tincidunt</span>
                        </div>
                        <div className='over-line'>
                            <AiOutlineCheck/>
                            <span>Vestibulum sit amet nibh</span>
                        </div>
                        <div className='over-line'>
                            <AiOutlineCheck/>
                            <span>Proin id eros dapibus, dict</span>
                        </div>
                        <div id='over-block-more'>
                            <a id='over-block-lien' href='#'>
                                RESQUEST
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='over-meals'>
                <div style={{backgroundColor : "#FFF"}}>
                    <img src={meals} alt="room service" className='room-service'/>
                </div>
                <div style={{backgroundColor : "#FFF"}} className='over-block'>
                    <h5>MEALS INCLUDED</h5>
                    <h1 style={{fontSize: "50px", color: "#1c1c1c", margin: "20px"}}>
                        165
                        <span style={{fontSize: "30px"}}>$</span>
                        <span style={{fontSize: "12px", color: "#5c5c5c"}}>/ month</span>
                    </h1>
                    <div className='over-block-text'>
                        <div className='over-line'>
                            <AiOutlineCheck/>
                            <span>Suspendisse nec tincidunt</span>
                        </div>
                        <div className='over-line'>
                            <AiOutlineCheck/>
                            <span>Vestibulum sit amet nibh</span>
                        </div>
                        <div className='over-line'>
                            <AiOutlineCheck/>
                            <span>Proin id eros dapibus, dict</span>
                        </div>
                        <div className='over-block-more'>
                            <a  className='over-block-lien' href='#'>
                                SEE MENU
                            </a>
                        </div>
                    </div>
                </div> 
            </div>
        </section>
    </div>
  )
}

export default Services