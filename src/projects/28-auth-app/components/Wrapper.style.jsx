/* eslint-disable no-unused-vars */
import styled, {keyframes} from "styled-components"


const shake = keyframes`
  
  0%{transform:translate(1px, 1px) rotate(0)}
  10%{transform:translate(-1px,-2px) rotate(-1deg)} 
  20%{transform:translate(-3px,0px) rotate(1deg)}
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }


`;

export const Wrapper = styled.div`
  &.active {
    animation: ${shake} 0.5s ease-out;
    input {
      color: red;
      &::placeholder {
        color: red;
      }
    }
    
  }

`;
