import React from 'react'
import "../../../styles/droplist.css"

const Home = () => {
  return (
    <div className='global-drop'>
        <span>Home 1</span>
        <span className='second-drop'>
            <span>Home 2</span>
            <span className='hot'>HOT</span>
        </span>
        <span>Home 3</span>
    </div>
  )
}

export default Home