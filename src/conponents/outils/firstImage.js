import React, {useState} from 'react'

import '../../styles/firstImage.css'
import background from '../assets/images/principal.jpg'
import Navbar from './navbar';
import Home from './droplists/Home';
import About from './droplists/Abouts';
import Room from './droplists/Roms';
import Shop from './droplists/Shop';
import Pages from './droplists/Pages';
import New from './droplists/News';
import Contact from './droplists/Contact';


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
            setAbout={setAbout}
            setContact={setContact}
            setShop={setShop}
            setPages={setPages}
            setNews={setNews}
            setRoom={setRoom}
          />
          {home && <Home/>}
          {about && <About/>}
          {room && <Room/>}
          {shop && <Shop/>}
          {pages && <Pages/>}
          {news && <New/>}
          {contact && <Contact/>}
        </div>
    </div>
  )
}

export default FirstImage;