import React, {useState} from 'react';
import {FaBars} from "react-icons/fa";

// import { Navbar, Col, Row, Nav, Container } from 'react-bootstrap';
import Home from './droplists/Home';
import About from './droplists/Abouts';
import Room from './droplists/Roms';
import Shop from './droplists/Shop';
import Pages from './droplists/Pages';
import New from './droplists/News';
import Contact from './droplists/Contact';
// pour la sidebar
import * as AiIcons from "react-icons/ai";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { SidebarData } from "./sidebar/sidebarData";
import SubMenu from "./sidebar/subMenu";

import logo from '../assets/images/logo.png';
import '../../styles/navbar.css'

// sytle of styled components de notre side bar*****
const SidebarNav = styled.nav`
  background: #040404d3;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  right: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  overflow-y: scroll;
  z-index: 10;
`;
const SidebarWrap = styled.div`
  width: 100%;
  
`;
const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
//******************side bar*****

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

  const [displaySide, setDisplaySide] = useState(false)
  const showSidebar = ()=>{
    setDisplaySide(!displaySide)
  }
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
      {/* //******************side bar***** */}
      <div className='nav-mobile'>
        {!displaySide && <FaBars onClick={()=>setDisplaySide(!displaySide)} style={{height:"25px", width:"25px"}}/> }
        {displaySide && 
          <SidebarNav sidebar={displaySide}>
            <SidebarWrap>
              <NavIcon to="#">
                <AiIcons.AiOutlineClose style={{color:"#C19B76"}} onClick={showSidebar} />
              </NavIcon>
              {SidebarData.map((item, index) => {
                return <SubMenu item={item} key={index} />;
              })}
            </SidebarWrap>
          </SidebarNav>
        }
        
      </div>
      
    </div>
  )
}

export default Navbar