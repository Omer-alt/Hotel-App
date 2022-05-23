import React from 'react'
import meal from '../assets/images/meal.png'
import "../../styles/assistance.css"

const Assistance = () => {
  return (
    <section className='assistance'>
        <div className='assistance-child left'>
            <div>
                <span className='index'>01</span><br/>
                <p className='assistance-name'>SPA & MASSAGES</p>
                <p className='assistance-description'>one sit amet id dui. Integer gravida dolor elit, sit amet vestibulum mi elementum eget. </p>
            </div>
            <div>
                <span className='index'>02</span><br/>
                <p className='assistance-name'>ROOM SERVICE </p>
                <p className='assistance-description'>two sit amet id dui. Integer gravida dolor elit, sit amet vestibulum mi elementum eget. </p>
            </div>
        </div>
       
        <div className='assistance-child midle'>
            <div>
                <span className='index'>03</span><br/>
                <p className='assistance-name'>IRONING AND LAUNDRY</p>
                <p className='assistance-description'>three amet id dui. Integer gravida dolor elit, sit amet vestibulum mi elementum eget. </p>
            </div>
            <div>
                <span className='index'>04</span><br/>
                <p className='assistance-name'>CLEANING ROOM</p>
                <p className='assistance-description'>four amet id dui. Integer gravida dolor elit, sit amet vestibulum mi elementum eget. </p>
            </div>
        </div>

        <div className='assistance-child rigth'>
            <img src={meal} alt="repas" className='img-repas' />
            <p className='assistance-title'>MEAL INCLUDED</p>
            <div className='rigth-over'>
                <div className='reception-number' >24</div>
                <div className='recepttion description'>SEATS</div>
            </div>
        </div>
       
    </section>
  )
}

export default Assistance