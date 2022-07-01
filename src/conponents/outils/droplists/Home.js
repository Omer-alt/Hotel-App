import React from 'react'
import "../../../styles/droplist.css"

const Home = () => {
  return (
    <div className='global-drop' style={{"float":"right"}}>
      <span className='drop-element'>Home 1</span>
      <span className='second-drop drop-element'>
        <span>Home 2</span>
        <span className='hot'>HOT</span>
      </span>
      <span className='drop-element'>Home 3</span>
    </div>
  )
}

export default Home