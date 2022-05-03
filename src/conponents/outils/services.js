import React from 'react'
import parallax from '../assets/images/parallax.jpg'
import '../../styles/services.css'



const Services = () => {
  return (
    <div>
       
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
    </div>
  )
}

export default Services