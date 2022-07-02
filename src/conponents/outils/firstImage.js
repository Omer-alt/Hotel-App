import React, {useState} from 'react'
import { Waypoint } from "react-waypoint";
import '../../styles/firstImage.css'
import background from '../assets/images/principal.jpg'
import Navbar from './navbar';


function FirstImage() {
  const [pageLoading, setPageLoading] = useState(false)
  const [home, setHome] = useState(false)
  const [room, setRoom] = useState(false)
  const [about, setAbout] = useState(false)
  const [shop, setShop] = useState(false)
  const [pages, setPages] = useState(false)
  const [news, setNews] = useState(false)
  const [contact, setContact] = useState(false)
  //gestion du chargement de page
  window.addEventListener("load",(event)=>{
    setPageLoading(true)
  })
  //effect of keybord typing  
  function animate_text() 
  {
    let delay = 100,
        delay_start = 0,
        contents,
        letters;

    if (pageLoading) {
      document.querySelectorAll(".animate-text").forEach(function (elem) {
        contents = elem.textContent.trim();
        elem.textContent = "";
        letters = contents.split("");
        elem.style.visibility = 'visible';
  
        letters.forEach(function (letter, index_1) {
          setTimeout(function () {
            // ---------
            // effet machine à écrire (SIMPLE)
            elem.textContent += letter;
            // ---------
          }, delay_start + delay * index_1);
        });    
        delay_start += delay * letters.length;
      });
      setPageLoading(false)
    }
  }

  return (
    <div>
        <div className='space-color'></div>
        <div
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize:"cover",
            backgroundRepeat: "no-repeat",
            minHeight:"750px",
            minWidth:"100%",
            width:"auto",
            height:"100%",
            position:"static",
          
          }}
          
        >
          <Navbar 
            setHome={setHome}
            home={home}
            setAbout={setAbout}
            about={about}
            setContact={setContact}
            setShop={setShop}
            shop={shop}
            setPages={setPages}
            pages={pages}
            room={room}
            news={news}
            contact={contact}
            setNews={setNews}
            setRoom={setRoom}
          />
          <div className='firstImOverlay'>
            <div className='firstImText1'>book your room now!</div>
            <div className='firstImText2'>
              <span className='animate-text'>Reserve</span>
              <span className='animate-text'> Your Holiday</span>
              <Waypoint
                onEnter={()=>{animate_text()}}
              />
            </div>
          </div>
        </div>
    </div>
  )
}

export default FirstImage;