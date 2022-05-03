import React from 'react';
import {FaBars} from "react-icons/fa"
// import { Navbar, Col, Row, Nav, Container } from 'react-bootstrap';

import logo from '../assets/images/logo.png';
import '../../styles/navbar.css'

const Navbar = ({setHome,
                setAbout, 
                setContact, 
                setShop, 
                setPages, 
                setNews, 
                setRoom
              }
  ) => {

  return (
    <div className='navbar'>
      <img src={logo} alt='Motela' className='nav-logo'/>
      <div className='navbar-menu'>
        <span className='menu-elem'
          onMouseEnter={()=>{
            setHome(true)
          }}
        >
          Home
        </span>
        <span className='menu-elem'
          onMouseEnter={()=>{
            setRoom(true)
          }}
        >
          Rooms
        </span>
        <span className='menu-elem'
          onMouseEnter={()=>{
            setAbout(true)
          }}
        >
          About
        </span>
        <span className='menu-elem'
           onMouseEnter={()=>{
            setShop(true)
          }}
        
        >
          Shop
        </span>
        <span className='menu-elem'
          onMouseEnter={()=>{
            setPages(true)
          }}
        >
          Pages
        </span>
        <span className='menu-elem'
          onMouseEnter={()=>{
            setNews(true)
          }}
        >
          News
        </span>
        <span className='menu-elem'
          onMouseEnter={()=>{
            setContact(true)
          }}
        >
          Contact
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