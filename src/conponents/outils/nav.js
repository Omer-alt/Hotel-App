import * as FaIcons from "react-icons/fa";
import basket from "../assets/images/basket.png"

import "../../styles/nav.css"


function Navbar(){
    return(
        <nav className="nav-element">
            <div className="nav-child">
                <span className="nav-sub-child" >
                    <FaIcons.FaRegEnvelope className="fa-icons" />
                    <span className="space-left">info@hotel-suites.com</span>
                </span>   
                <span className="nav-sub-child" >
                    <FaIcons.FaRegClock className="fa-icons" />
                    <span className="space-left">Mon - Sat: 08.02 - 22:00</span>
                </span>  
                
            </div>
            <div className="maquee">
                <div className="nav-maquee" behavior = "scroll" direction = "left" >
                    <span> <span className="square">News</span>News year registration open, contact us and review your card!</span>
                </div>
            </div>
            <div className="nav-child">
                <img className="basket" src={basket} alt="logo" />
                <span className="space-left">Cart : 0 items -$0.00 </span>
            </div>  
        </nav>
    )
}

export default Navbar;