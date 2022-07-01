import React from 'react';
import {FaBars} from "react-icons/fa"
// import { Navbar, Col, Row, Nav, Container } from 'react-bootstrap';
import Home from './droplists/Home';
import About from './droplists/Abouts';
import Room from './droplists/Roms';
import Shop from './droplists/Shop';
import Pages from './droplists/Pages';
import New from './droplists/News';
import Contact from './droplists/Contact';

import logo from '../assets/images/logo.png';
import '../../styles/navbar.css'

const Navbar = (
  {setHome,
    home,
    shop,
    news,
    contact,
    room,
    pages,
    about,
    setAbout, 
    setContact, 
    setShop, 
    setPages, 
    setNews, 
    setRoom
   }) => {

  return (
    <div className='navbar'>
      <img src={logo} alt='Motela' className='nav-logo'/>
      <div className='navbar-menu'>
        <div className='menu-elem'
          onMouseEnter={()=>{
            setHome(true)
          }}
          onMouseLeave={()=>{
            setHome(false)
          }}
        >
          Home
          <div>
            {home && <Home/>}
          </div>
        </div>
        
        <span className='menu-elem'
          onMouseEnter={()=>{
            setRoom(true)
          }}
          onMouseLeave={()=>{
            setRoom(false)
          }}
        >
          Rooms
          <div>
            {room && <Room/>}
          </div>
        </span>
        <span className='menu-elem'
          onMouseEnter={()=>{
            setAbout(true)
          }}
          onMouseLeave={()=>{
            setAbout(false)
          }}
        >
          About
          <div>
            {about && <About/>}
          </div>
        </span>
        <span className='menu-elem'
          onMouseEnter={()=>{
            setShop(true)
          }}
          onMouseLeave={()=>{
            setShop(false)
          }}
        >
          Shop
          <div>
            {shop && <Shop/>}
          </div>
        </span>
        <span className='menu-elem'
          onMouseEnter={()=>{
            setPages(true)
          }}
          onMouseLeave={()=>{
            setPages(false)
          }}
        >
          Pages
          <div>
            {pages && <Pages/>}
          </div>
        </span>
        <span className='menu-elem'
          onMouseEnter={()=>{
            setNews(true)
          }}
          onMouseLeave={()=>{
            setNews(false)
          }}
        >
          News
          <div>
          
            {news && <New/>}
          </div>
        </span>
        <span className='menu-elem'
          onMouseEnter={()=>{
            setContact(true)
          }}
          onMouseLeave={()=>{
            setContact(false)
          }}
        >
          Contact
          <div>
            {contact && <Contact/>}
          </div>
        </span>
      </div>
      <div className='book-class'>
        <span >BOOK NOW</span>
      </div>
      <div className='nav-mobile'>
        <FaBars style={{height:"25px", width:"25px"}}/>
      </div>
    </div>
  )
}

export default Navbar