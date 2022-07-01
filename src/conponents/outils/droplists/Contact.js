import React from 'react'
import "../../../styles/droplist.css"

const Contact = () => {
  return (
    <div className='global-drop'>
        <span className='drop-element'>Contact 1</span>
        <span className='drop-element'>Contact 2</span>
        <span className='second-drop drop-element'>
          <span>Contact 3</span>
          <span className='new'>NEW</span>
        </span>
    </div>
  )
}

export default Contact