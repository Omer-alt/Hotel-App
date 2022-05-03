import React from 'react'
import "../../styles/calendrier.css"

const Calendrier = () => {
  return (
    <div className='calendrier'>
        <div className='group'>
            <span>CHECK-IN</span>
            <div className="group-cadre"></div>
        </div>
        <div className='group'>
            <span>CHECK-OUT</span>
            <div className="group-cadre"></div>
        </div>
        <div className='group'>
            <span>GUESTS</span>
            <div className="group-cadre"></div>
        </div>
        <div className='group'>
            <span className='hidden'>available</span>
            <div className="group-cadre">
                <a href='#top'>
                    CHECK AVALAIBILITY
                </a>
            </div>
        </div>
    </div>
  )
}

export default Calendrier