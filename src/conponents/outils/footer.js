import React,{useState,useRef} from 'react'
import * as FaIcons from "react-icons/fa";
import * as GoIcons from "react-icons/go";
import shot1 from '../assets/images/shop-1.jpg'
import shot2 from '../assets/images/shop-2.jpg'
import shot3 from '../assets/images/shop-3.jpg'
import shot4 from '../assets/images/shop-4.jpg'
import shot5 from '../assets/images/shop-5.jpg'
import shot6 from '../assets/images/shop-6.jpg'
import shot7 from '../assets/images/shop-7.jpg'
import shot8 from '../assets/images/shop-8.jpg'
// import shot9 from '../assets/images/shop-9.jpg'
import '../../styles/footer.css'

const Footer = () => {

    const [endEmail, setEndEmail] = useState("")
    const emailRef = useRef("")
  
    const handleChange = ()=>{
      setEndEmail(emailRef.current.value)
    }
  
    function validation(){
  
      var expressionReguliere = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
      document.getElementById('resultat').innerHTML = "";
      console.log(endEmail)
      
  
      if (expressionReguliere.test(endEmail)){
  
        document.getElementById('result').innerHTML = "succes de soumission!";
        document.getElementById('result').style.color = '#00FF00';
        emailRef.current.value = "";
        setEndEmail("")
      } else {
  
        document.getElementById('result').innerHTML = "L'adresse mail n'est pas valide!";
        document.getElementById('result').style.color = 'red';
      }
      return false;
    }

  return (
    <div className='footer'>
        <div className='footertop'>
            <div className='footerColumn'>
                <div>
                    <h2>About Us</h2>
                </div>
                <div className='fcText'>
                    Sed sit amet nisl in velit viverra bibendum in ac nisi. Etiam efficitur dui vitae sem rutrum, id pretium nunc varius. Vestibulum hendrerit malesuada .
                </div>
                <div className='Iconsgrey'>
                    <FaIcons.FaFacebook className='iconsf-color'/>
                    <FaIcons.FaTwitter className='iconsf-color'/>
                    <FaIcons.FaYoutube className='iconsf-color' />
                </div>
            </div>
            <div className='footerColumn'>
                <div>
                    <h2>All Contacts</h2>
                </div>
                <div className='fcText ficons'>
                    <div className='aboutus'>
                        <span><GoIcons.GoLocation className='mesure'/></span>
                        <span>111 8th Ave, New York U.S.A.</span>
                    </div>
                    <div className='aboutus'>
                        <span><FaIcons.FaPhoneAlt className='mesure'/></span>
                        <span>Reserve +1-202-555-0153 </span>
                    </div>
                    <div className='aboutus'>
                        <span><GoIcons.GoMail className='mesure'/></span>
                        <span>info@hotel.com</span>
                    </div>
                    <div className='aboutus'>
                        <span><GoIcons.GoClock className='mesure'/></span>
                        <span>08 am - 06 pm Sunday closed</span>
                    </div>
                </div>
            </div>
            <div className='footerColumn'>
                <div>
                    <h2>Subscribe</h2>
                </div>
                <div className='fcText'>Sed sit amet nisl in velit viverra bibendum in ac nisi. Etiam efficitur dui vitae sem rutrum,</div>
                <div className="fcInput">
                    
                    <div style={{display:"flex",flexDirection:"column"}}>
                        <input ref={emailRef} className='fInput' onChange={handleChange} placeholder='INSERT YOUR EMAIL'/>
                        <span id='result'></span>
                    </div>
                    <button className='fButton' onClick={validation}>SUBMIT</button>
                </div>
            </div>
            <div className='footerColumn'>
                <div>
                    <h2>Gallerie</h2>
                </div>
                <div className='gallery'>
                    <div className='galleryShop' >
                        <div>
                            <img src={shot1} className="galleryImg" alt="Gallery" />
                        </div>
                        <div>
                            <img src={shot2} className="galleryImg" alt="Gallery" />
                        </div>
                        <div>
                            <img src={shot3} className="galleryImg" alt="Gallery" />
                        </div>
                        <div>
                            <img src={shot4} className="galleryImg" alt="Gallery" />
                        </div>
                    </div>
                    <div className='galleryShop'>
                        <div>
                            <img src={shot5} className="galleryImg" alt="Gallery" />
                        </div>
                        <div>
                            <img src={shot6} className="galleryImg" alt="Gallery" />
                        </div>
                        <div>
                            <img src={shot7} className="galleryImg" alt="Gallery" />
                        </div>
                        <div>
                            <img src={shot8} className="galleryImg" alt="Gallery" />
                        </div>
                        {/* <div>
                            <img src={shot9} className="galleryImg" alt="Gallery" />
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
        <div className='footerbottom'>
            <div>
                <span>
                    <FaIcons.FaCopyright className='mesure'/>
                </span>
                <span>Hotel Inn & Suites Theme - Nicdark Copyright</span>
            </div>
            <div className='footerRight'>
                <div className='align'>
                    <span><FaIcons.FaAngleRight className='mesure'/></span>
                    <span>info@hotel.com</span>
                </div>
                <div className='align'>
                    <span><FaIcons.FaAngleRight className='mesure'/></span>
                    <span>booking@hotel.com</span>
                </div>
                <div className='align'>
                    <span><FaIcons.FaAngleRight className='mesure'/></span>
                    <span>contact@hotel.com</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer