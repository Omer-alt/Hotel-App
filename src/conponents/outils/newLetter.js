import React from 'react'
import '../../styles/newletter.css'

const NewLetter = () => {
  return (
    <div className='newLetter'>
        <div>
            <h1 className='newLetterLeft'>
                Subscribe to our Newsletter <br/>
                Get the 50%  off
            </h1>
        </div>
        <div className='newLetterRight'>
            <input placeholder='INSERT YOUR EMAIL'></input>
            <button className='newLetterButton' type='submit' >SUBMIT</button>
        </div>
    </div>
  )
}

export default NewLetter