import styled from 'styled-components';
import ClockBackGround from './ClockBackground';
import ClockPointer from '../pointer/ClockPointer';
import { useState, useEffect } from 'react';
const Clock = (props) =>{
    const [light, setLight] =useState(true)
    const [hourDeg, setHourDeg] =useState(0)
    const [minuteDeg, setMinuteDeg] =useState(0)
    const [secondDeg, setSecondDeg] =useState(0)
    
    const deg = 6
    const setTime = ()=>{   //set the time to the right initially
        let nowTime = new Date();
            let day = new Date(nowTime.getTime() + props.timezone * 3600000)
            let hour = day.getUTCHours() * deg * 5
            let minute = day.getUTCMinutes() * deg
            let second = day.getUTCSeconds() * deg 
            setHourDeg(hour + minute / 12)
            setMinuteDeg(minute + second / 12)
            setSecondDeg(second)
    }

    useEffect(()=>{
        const interval = setInterval(()=>{
            setTime() //reset the time every 100
        }, 100)
    }, [])

    return <ClockBackGround>
        <ClockPointer is_white={light} hourDeg={hourDeg} minuteDeg={minuteDeg} secondDeg={secondDeg}/>
    </ClockBackGround>  //如果想要改变大小，要传参<ClockBackGround size={"200px"}></ClockBackGround>，只能改变那边的默认参数
};

export default Clock;