import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  height: 100%;

  position: fixed;
  z-index: -10;
  top: 0; left: 0;

  background: 
    linear-gradient(90deg, #000 25px, transparent 1%) center,
    linear-gradient(#000 25px, #000000a1 1%) center;
  background-size: 26px 26px;
`;
