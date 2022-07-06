import React, {useState} from 'react'
import * as FaIcons from "react-icons/fa";
import { Waypoint } from "react-waypoint";
import reception from "../assets/images/reception.jpg"
import "../../styles/reception.css"


const Reception = () => {
    
    const [isWayPoint, setIsWaypoint] = useState(false)
    // to handle waypoint
    const handleWayPoint = ()=>{
        setIsWaypoint(true)
    }
    var start = 0,
        end = 24,
        duree = 1,
        delta = Math.ceil((duree*1000)/end);
    

    function count(){
        var node=document.getElementsByClassName('reception-number')[0];
        if (isWayPoint) {
            node.innerHTML = ++start;
            if( start < end ) { // Si on est pas arrivé à la valeur finale, on relance notre compteur une nouvelle fois
                setTimeout(count, delta);
            }
        }
    }
    
    
  return (
    <div className='reception'>
        <div className='overlay-image'>
            <img
             src={reception}
             alt="receptioniste"
             className='img-reception'
            />
            <div className='text-reception'>
                <div className='reception-number' onInput={setTimeout(count, delta)}>0</div>
                <div
                 className='reception-description'
                >
                    <span>years of </span><span>Experience</span>
                    <Waypoint
                        onEnter={()=>{handleWayPoint()}}
                    />
                </div>
            </div>
        </div>
        <div className='side-text'>            
            <span className='small-text'>INN & SUITES</span>                      
            <h1 className='title'>Welcome to Spa & Relaxe Hotel</h1>            
            <div className='side-paragraphe'>
               
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, consequatur architecto provident fugiat maxime temporibus illo ut laudantium ab reiciendis labore numquam nemo veritatis exercitationem aliquam quos similique minus! Quaerat.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, consequatur architecto provident fugiat maxime temporibus illo ut laudantium ab reiciendis labore numquam nemo veritatis exercitationem aliquam quos similique minus! Quaerat.

            </div>
            <span className='trait'></span>
            <div className='text-footer'>
                <div className='side-mail'>
                    <span className='text-footer-gras'>MAIN MAIL</span>
                    <span className='side-email-hotel' >info@gmail.com</span>
                </div>
                <div className='side-icons'>
                    <span className='text-footer-gras'>STAY STUNED</span>
                    <span className='side-icons-span'>
                        <FaIcons.FaFacebook className='icons-color'/>
                        <FaIcons.FaTwitter className='icons-color'/>
                        <FaIcons.FaYoutube className='icons-color' />
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Reception