import React, {useState} from 'react'

import '../../styles/firstImage.css'
import background from '../assets/images/principal.jpg'
import Navbar from './navbar';


function FirstImage() {

  const [home, setHome] = useState(false)
  const [room, setRoom] = useState(false)
  const [about, setAbout] = useState(false)
  const [shop, setShop] = useState(false)
  const [pages, setPages] = useState(false)
  const [news, setNews] = useState(false)
  const [contact, setContact] = useState(false)
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
              <span>Reserve</span>
              <span> Your Holiday</span>
            </div>
          </div>
        </div>
    </div>
  )
}

export default FirstImage;