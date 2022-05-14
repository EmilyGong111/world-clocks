import styled from 'styled-components';
import Clock from './clock/Clock';

const ClockGroup = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
max-width: 1200px;

`

const App = () => {
 return <ClockGroup>
   <Clock />
   <Clock />
   <Clock />
   <Clock />
 </ClockGroup>;
};
export default App;