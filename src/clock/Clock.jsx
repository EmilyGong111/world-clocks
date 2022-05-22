import styled from 'styled-components';
import ClockBackGround from './ClockBackground';
import ClockPointer from '../pointer/ClockPointer';
import { useState, useEffect } from 'react';
const Clock = (props) =>{
    const [light, setLight] =useState()
    const [hourDeg, setHourDeg] =useState(0)
    const [minuteDeg, setMinuteDeg] =useState(0)
    const [secondDeg, setSecondDeg] =useState(0)
    const [Day, setDay] =useState(2022)
    const [Hour, setHour] = useState();
    


    const deg = 6
    const setTime = ()=>{   //set the time to the right initially
        let nowTime = new Date();
        let day = new Date(nowTime.getTime() + props.timezone * 3600000)
        let hour = day.getUTCHours() * deg * 5
        let minute = day.getUTCMinutes() * deg
        let second = day.getUTCSeconds() * deg 
        setHourDeg(hour + minute / 12)
        setMinuteDeg(minute + second / 60)
        setSecondDeg(second)
        setHour(day.getUTCHours())

        const getCurrentDate =(separator='-')=>{
            let newDate = new Date();
            let day = new Date(nowTime.getTime() + props.timezone * 3600000);
            let date = day.getDate();
            let month = newDate.getMonth() + 1;
            let year = newDate.getFullYear();
            return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
        }
        setDay(getCurrentDate())
    }

    useEffect(()=>{
        const interval = setInterval(()=>{
            setTime() //reset the time every 100
        }, 100)
    }, [])

    useEffect(()=>{
        if (+Hour >=19 || +Hour < 6){
            setLight(false)
        }
    },[Hour])


    return (
        <ClockBackGround>
            <h2> {props.city}</h2>
            <ClockPointer is_white={light} hourDeg={hourDeg} minuteDeg={minuteDeg} secondDeg={secondDeg}/>
            <h2>{Day}</h2>  
        </ClockBackGround>
    )
};

export default Clock;