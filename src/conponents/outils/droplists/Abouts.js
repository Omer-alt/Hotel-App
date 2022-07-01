import React from 'react'
import "../../../styles/droplist.css"

const About = () => {
  return (
    <div className="global-drop">
        <span className='drop-element'>About 1 </span>
        <span className='drop-element'>About 2</span>
        <span className='drop-element'>About 3</span>
        <span className='second-drop drop-element'>
          <span>Teams</span>
          <span className='new'>NEW</span>
        </span> 
    </div>
  )
}

export default About