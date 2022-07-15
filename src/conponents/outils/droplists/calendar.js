import React from 'react'
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar'

const CalendarSquare = ({value, changeDate}) => {
  return (
    <div >
        <Calendar 
          style={{position: "absolute"}}
            value={value} 
            onChange={changeDate}
        />
    </div>
  )
}

export default CalendarSquare