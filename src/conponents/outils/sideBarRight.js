import React from 'react'
import {FaHome} from 'react-icons/fa'
import Element from './droplists/element'
import style from '../../styles/navigation.css'

const SideBarRight = () => {
  return (
    <section className={`${style.navigationList}`}>
      <nav  className={`${style.navigationItems}`}>
        <Element title="Home" link="/">
          <FaHome
            size={25}
          />
        </Element>
        <Element title="Rooms" link="/">
          <FaHome
            size={25}
          />
        </Element>
        <Element title="About" link="/">
          <FaHome
            size={25}
          />
        </Element>
        <Element title="Shop" link="/">
          <FaHome
            size={25}
          />
        </Element>
        <Element title="Pages" link="/">
          <FaHome
            size={25}
          />
        </Element>
        <Element title="News" link="/">
          <FaHome
            size={25}
          />
        </Element>
        <Element title="Contact" link="/">
          <FaHome
            size={25}
          />
        </Element>
      </nav>
      
    </section>
  )
}

export default SideBarRight