import React from 'react'
import phone from "../assets/images/teldesign.png"
import "../../styles/number.css"

const Numbers = () => {
  return (
    <div className='number'>       
        <div className='number-overlay'>
            <div className='space'>Reserve a Room Now</div>
            <div className='space'>
                <img src={phone} alt='phone' className='phone-tel'/>
            </div>
            <div className='space'>Direct Call +1 546 378 654</div>
        </div>
    </div>
  )
}

export default Numbers