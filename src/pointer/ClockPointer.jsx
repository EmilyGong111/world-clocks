import styled from "styled-components";
import ClockCenter from "./ClockCenter";
import HourPointer from "./HourPointer";
import MinutePointer from "./MinutePointer";
import SecondPointer from "./SecondPointer";


const ClockPointerStyle = styled.div`
    position: relative;
    width: ${(props) => props.size};height: ${(props) => props.size};
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${(props) =>props.is_white? `${props.white} ${props.bg_white}`: `${props.black} ${props.bg_black}`};
    background-size: cover;
    border-radius: 50%;
    border: 14px solid ${(props) => (props.is_white ? props.white : props.black)};
    box-shadow: ${(props) =>props.is_white ? props.bg_white_box_shadow : props.bg_black_box_shadow};
    color: ${(props) => (props.is_white ? props.black : props.white)};
`;
ClockPointerStyle.defaultProps = {
    is_white: true,
    bg_white: "url('/src/images/clock_white.png')",
    bg_white_box_shadow:"inset 0 0 30px rgba(0, 0, 0, 0.1), 0 20px 20px rgba(0, 0, 0, 0.2), 0 0 0 4px rgba(255, 255, 255, 1)",
    bg_black: "url('/src/images/clock_black.png')",
    bg_black_box_shadow:"inset 0 0 30px rgba(255, 255, 255, 0.1), 0 20px 20px rgba(0, 0, 0, 0.5), 0 0 0 4px #091921",
    size: "250px",
    white: "#fff",
    black: "#091921",
};




const ClockPointer = (props) =>{
 return (
    <ClockPointerStyle>
        <HourPointer />
        <MinutePointer />
        <SecondPointer  />
        <ClockCenter />
    </ClockPointerStyle>
 )
 
};

export default ClockPointer;