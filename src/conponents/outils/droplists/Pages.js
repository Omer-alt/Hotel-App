import React from 'react'
import "../../../styles/droplist.css"

const Pages = () => {
  return (
    <div className='global-drop'>
        <span className='drop-element'>Price</span>
        <span className='second-drop drop-element'>
            <span>Galerie</span>
            <span className='new'>NEW</span>
        </span>
        <span className='drop-element'>Service 1</span>
        <span className='second-drop drop-element'>
            <span>Service 2</span>
            <span className='new'>NEW</span>
        </span>
        <span className='drop-element'>Faq</span>
        <span className='drop-element'>Commins Soon </span>
        <span className='second-drop drop-element'>
            <span>About</span>
            <span className='fleche'></span>
        </span>
        <span className='second-drop drop-element'>
            <span>Price</span>
            <span className='fleche'></span>
        </span>
    </div>
  )
}

export default Pages