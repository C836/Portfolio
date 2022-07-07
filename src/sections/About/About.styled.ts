import styled from "styled-components";

export const About = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  padding-top: 40px;

  @media (max-width: 1000px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const Slider = styled.aside`
  position: relative;
  width: 45%;
  border: 3px solid white;
  padding-bottom: 25px;
  background: black;

  & h1 {
    font: bold 2rem "Ubuntu Mono";
    text-align: center;
    margin-bottom: 50px;
  }

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(9, 9, 121, 0) 15%,
      rgba(4, 120, 194, 0) 85%,
      rgba(0, 0, 0, 1) 100%
    );
    z-index: 1;
    pointer-events: none;
  }

  @media (max-width: 1000px) {
    margin-top: 30px;
    width: 100%;
  }
`;

export const TextField = styled.article`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 50px;
  width: 50%;
  font: 1.1rem "Nunito";
  color: white;
  text-align: justify;

  @media (max-width: 1000px) {
    width: 100%;
    margin: 0;
  }
`;
