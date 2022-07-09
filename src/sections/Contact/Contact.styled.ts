import styled from "styled-components";

export const Contact = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: black;
  padding: 0 5%;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    background-color: #081330;
    width: 100vw;
    height: 100%;
    padding-top: 30px;
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    opacity: 0.2;
    background: url(https://i.ibb.co/gwbzM1p/6852573.jpg);
    background-size: cover;
    mix-blend-mode: multiply;
    filter: contrast(2);
    width: 100vw;
    height: 100%;
    padding-top: 30px;
  }

  @media (max-width: 800px) {
    padding: 30px 5% 0 5%;
    height: auto;
  }
`;

export const Email = styled.div`
  position: relative;
  z-index: 1;
  width: 50%;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
`;

export const TextWrapper = styled.div`
  margin: 35px 0;
`;
