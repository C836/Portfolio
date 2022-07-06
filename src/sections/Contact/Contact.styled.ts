import styled from "styled-components";

export const Contact = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: black;

  &::before{
    content: '';
    position: absolute;
    left: 0;
    background-color: #081330;
    width: 100vw;
    height: 100vh;
  }

  &::after{
    content: '';
    position: absolute;
    left: 0;
    opacity: .2;
    background: url(https://i.ibb.co/gwbzM1p/6852573.jpg);
    background-size: cover;
    mix-blend-mode: multiply;
    filter: contrast(2);
    width: 100vw;
    height: 100vh;
  }
`;

export const Email = styled.div`
  position: relative;
  z-index: 1;
  width: 50%;
`;

export const Wrapper = styled.div`
  margin: 35px 0;
`;
