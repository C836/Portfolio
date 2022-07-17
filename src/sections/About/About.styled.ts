import styled from "styled-components";

export const About = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media (max-width: 1000px) {
    flex-direction: column;
    width: 100%;
    height: auto;
    padding-top: 40px;
  }
`;

export const TextField = styled.article`
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: white;
  max-width: 650px;

  @media (max-width: 1000px) {
    width: 100%;
    margin: 0;
  }
`;
