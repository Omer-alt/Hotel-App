import React from 'react'
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar'

const CalendarSquare = ({value, changeDate}) => {
  return (
    <>
        <Calendar 
            value={value} 
            onChange={changeDate}
        />
    </>
  )
}

export default CalendarSquare