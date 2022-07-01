import React from 'react'
import "../../../styles/droplist.css"

const Shop = () => {
  return (
    <div className='global-drop'>
        <span className='second-drop drop-element'>
          <span>Shop 1</span>
          <span className='best'>BEST</span>
        </span>
        <span className='second-drop drop-element'>
          <span>Shop 2</span>
          <span className='hot'>HOT</span>
        </span>
        <span className='drop-element'>Shop 3</span>
        <span className='drop-element'>Single product</span>
        
    </div>
  )
}

export default Shop