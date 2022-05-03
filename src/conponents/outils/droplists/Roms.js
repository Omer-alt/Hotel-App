import React from 'react'
import "../../../styles/droplist.css"

const Room = () => {
  return (
    <div className='global-drop'>
        <span className='second-drop'>
            <span>Search page</span>
            <span className='hot'>HOT</span>
        </span> 
        <span className='global-drop'>
            <span>Single Room</span>
            <span className='fleche'></span>
        </span> 
        <span className='global-drop'>
            <span>Single Page</span>
            <span className='fleche'></span>
        </span> 
        <span>Single Branch </span>
        <span>Single suite</span>
    </div>
  )
}

export default Room