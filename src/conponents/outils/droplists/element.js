import React from 'react'
import { Link } from 'react-router-dom'
import style from '../../../styles/navigation.css'

const Element = ({children, link, title}) => {
  return (
    <Link
        to={link}
        className = {`
            ${style.navigationItem}
        `} 
    >
        {children}
        <span
            className = {`
            ${style.navigationText}
        `} >
            {title}
        </span>
    </Link>
  )
}

export default Element