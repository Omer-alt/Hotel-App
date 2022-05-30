import React from 'react'
import '../../styles/around.css'
import piscine from '../assets/images/piscine.jpg'
import tour from '../assets/images/tour.jpg'
import dinner from '../assets/images/dinner.jpg'


const  Around = () => {
  return (
    <div className='AroundHotel'>
        <h5 id='surround'>SURROUNDINGS</h5>
        <div id='surroundTitle'><h1>The places arounds</h1></div>
        <section className='around'>
            <div className='aroundContainer down'>
                <div className='aroundCoutainerImg'>
                    <img src={piscine} className="aroundImg" alt="piscine" />
                </div>
                <div className='aroundDescription'>
                    <h3 className='aroundTitle'>Beauty & Spa</h3>
                    <div className='aroundParagraph'>
                        Quisque vitae posuere libero. Phasellus feugiat erat sit amet dui eget mauris sodales
                    </div>
                </div>
            </div>
            <div className='aroundContainer'>
                <div className='aroundCoutainerImg'>
                    <img src={tour} id="aroundImgCenter" alt="tourisme" />
                </div>
                <div>
                    <h3 className='aroundTitle'>City tours</h3>
                    <div className='aroundParagraph' >
                        Quisque vitae posuere libero. Phasellus feugiat erat sit amet dui eget mauris sodales
                    </div>
                </div>
            </div>
            <div className='aroundContainer down'>
                <div className='aroundCoutainerImg'>
                    <img src={dinner} className="aroundImg" alt="tourisme" />
                </div>
                <div>
                    <h3 className='aroundTitle'>Lunch & Dinner</h3>
                    <div className='aroundParagraph'>
                        Quisque vitae posuere libero. Phasellus feugiat erat sit amet dui eget mauris sodales
                    </div>
                </div>
            </div>
        </section>
        <div className='aroundBottom'>
            <h2 className='aroundBtext'>
                Vestibulum eget mauris sodales, ultrices erat non, ornare felis. Nam ut odio vestibulum, tempor purus sit amet, imperdiet. 
            </h2>
            <div className='aroundBSpan'>
                Click here
            </div>
        </div>
    </div>
  )
}

export default Around