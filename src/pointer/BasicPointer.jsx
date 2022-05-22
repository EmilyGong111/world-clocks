import styled from 'styled-components';

const BasicPointer = styled.div`
    display: flex;
    justify-content: center;
    position: absolute;
    width: ${(props)=>props.size}px;
    height: ${(props)=>props.size}px;
    transform: ${(props)=> `rotateZ(${props.rotate}deg)`};
    z-index: ${(props)=> props.z_index};
    ::before{
        content: "";
        /* position: absolute; */
        width: ${(props)=> props.width}px;
        height: ${(props)=>`calc(${props.size /2}px + ${props.tail}px)`};//put 'px' twice outside in case sometimes we need to calc rem/other with px
        background: ${(props)=> props.is_white ? props.bg_white : props.bg_black};
        border-radius: ${(props)=>props.bg_radius}
    }
`
BasicPointer.defaultProps = {
    rotate: 10,
    size: 100,
    tail:0,
    is_white:true,
    bg_white:"#ff6767",
    bg_black: "#69c0ff",
    bg_radius: "6px 6px 3px 3px",
    z_index: 0,
    width: 4
}

export default BasicPointer;