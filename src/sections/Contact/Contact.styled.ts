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

  p {
    margin-bottom: 25px;
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

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const Network = styled.div`
  width: 50%;
  position: relative;
  z-index: 99;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Figure = styled.figure`
  width: 100%;
  margin: 0;
  display: flex;
  justify-content: center;

  img {
    width: 60%;
  }
  
  @media (max-width: 900px){
  	display: none;
  }
`;

export const Links = styled.div`
  display: flex;
  column-gap: 20px;
  margin-top: 20px;
  font-size: 45px;

  @media (max-width: 900px) {
    margin-top: 40px;
    font-size: 35px;
  }
`;

export const Icon = styled.a`
  color: white;
`;
