import React,{useEffect, useState, useRef} from 'react'
import { FaAngleUp,FaAngleDown } from 'react-icons/fa'
import moment, { duration } from 'moment'
import AOS from "aos";
import "aos/dist/aos.css";
import "../../styles/calendrier.css"
import CalendarSquare from './droplists/calendar'

const Calendrier = () => {

    const [guests, setGuest] = useState(1)
    const [arriveTime, setTimeArrive] = useState(false)
    const [leaveTime, setTimeLeave] = useState(false)
    const [arriveDate, setDateArrive] = useState(new Date())
    const [leaveDate, setDateLeave] = useState(null)

    const checkInRef = useRef(null)
    const checkOutRef = useRef(null)

    //gerer le click exterieur a un element(changer a false quand on clique hors d'un calendrier)
    function useOutsideState(ref, setState) {
        useEffect(() => {
          /**
           * change state if clicked outside of calendar
           */
          function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
              setState(false)
            //   setTimeLeave(false)
            }
          }
          // Bind the event listener
          document.addEventListener("mousedown", handleClickOutside);
          return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
          };
        }, [ref, setState]);
    }
    useOutsideState(checkInRef, setTimeArrive);
    useOutsideState(checkOutRef, setTimeLeave);
    //augmenter un jour pour programmer le jour de depart
    useEffect(()=>{
        function addDaysToDate(days){
            var res = new Date(arriveDate);
            res.setDate(res.getDate() + days);
            return res;
        }
        setDateLeave(addDaysToDate(1))
    },[arriveDate])
    //changer de date d'arriver
    const changeDate = (e)=>{
        setDateArrive(e)
    }
    const changeLeaveDate = (e)=>{
        setDateLeave(e)
    }

    const showCalendar = (bool, setBool)=>{
        setBool(bool)
    }
    const increment = ()=>{
        setGuest(guests + 1)
    }
    const decrement = ()=>{
        if (guests > 1) {
            setGuest(guests - 1)
        } else {
            setGuest(1)
        }
    }
    // initialise AOS
    useEffect(()=>{
        AOS.init({duration: 2000})
    },[])
  return (
    <div className='calendrier'>
        <div data-aos={"fade-up"} ref={checkInRef} className='group'>
            <span>CHECK-IN</span>
            {arriveTime && 
                <CalendarSquare 
                    className='calendrierSquare' 
                    changeDate={changeDate} 
                    value={arriveDate}
                />
            }
            <div onClick={()=>showCalendar(true, setTimeArrive)} 
                className="group-cadre"
            >
                <span>{moment(arriveDate).format('DD MMM')}</span>
                <span><FaAngleDown /></span>
            </div>
            
        </div>
        <div data-aos={"fade-up"} ref={checkOutRef} className='group'>
            <span>CHECK-OUT</span>
            <div  onClick={()=>showCalendar(true, setTimeLeave)} className="group-cadre">
                
                <span>{moment(leaveDate).format('DD MMM')}</span>
                <span><FaAngleDown /></span>
            </div>
            {leaveTime && 
                <CalendarSquare 
                    value={leaveDate}
                    changeDate={changeLeaveDate}
                />
            }
        </div>
        <div data-aos={"fade-up"} className='group'>
            <span>GUESTS</span>
            <div className="group-cadre">
                <span>{guests}</span>
                <span><FaAngleDown onClick={decrement}/><FaAngleUp onClick={increment}/></span>
            </div>
        </div>
        <div data-aos={"fade-up"} className='group'>
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