import styled from 'styled-components';
import ClockBackGround from './ClockBackground';
import ClockPointer from '../pointer/ClockPointer';

const Clock = (props) =>{
    return <ClockBackGround>
        <ClockPointer />
    </ClockBackGround>  //如果想要改变大小，要传参<ClockBackGround size={"200px"}></ClockBackGround>，只能改变那边的默认参数
};

export default Clock;