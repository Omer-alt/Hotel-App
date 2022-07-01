import React from 'react'
import "../../../styles/droplist.css"

const Room = () => {
  return (
    <div className='global-drop'>
        <span className='second-drop drop-element'>
          <span>Search page</span>
          <span className='hot'>HOT</span>
        </span> 
        <span className='global-drop'>
          <span className='drop-element'>Single Room</span>
          <span className='fleche'></span>
        </span> 
        <span className='global-drop'>
          <span className='drop-element'>Single Page</span>
          <span className='fleche'></span>
        </span> 
        <span className='drop-element'>Single Branch </span>
        <span className='drop-element'>Single suite</span>
    </div>
  )
}

export default Room