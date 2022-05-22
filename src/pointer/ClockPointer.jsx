import styled from "styled-components";
import ClockCenter from "./ClockCenter";
import HourPointer from "./HourPointer";
import MinutePointer from "./MinutePointer";
import SecondPointer from "./SecondPointer";
import ClockPointerStyle from "./ClockPointerStyle";


const ClockPointer = (props) =>{
 return (
    <ClockPointerStyle is_white = {props.is_white}>
        <HourPointer is_white = {props.is_white} rotate = {props.hourDeg}/>
        <MinutePointer is_white = {props.is_white} rotate = {props.minuteDeg}/>
        <SecondPointer  is_white = {props.is_white} rotate = {props.secondDeg}/>
        <ClockCenter />
    </ClockPointerStyle>
 )
 
};

export default ClockPointer;