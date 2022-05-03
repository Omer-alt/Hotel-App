import React from 'react'
import "../../../styles/droplist.css"

const Pages = () => {
  return (
    <div className='global-drop'>
        <span>Price</span>
        <span className='second-drop'>
            <span>Galerie</span>
            <span className='new'>NEW</span>
        </span>
        <span>Service 1</span>
        <span className='second-drop'>
            <span>Service 2</span>
            <span className='new'>NEW</span>
        </span>
        <span>Faq</span>
        <span>Commins Soon </span>
        <span className='second-drop'>
            <span>About</span>
            <span className='fleche'></span>
        </span>
        <span className='second-drop'>
            <span>Price</span>
            <span className='fleche'></span>
        </span>
    </div>
  )
}

export default Pages