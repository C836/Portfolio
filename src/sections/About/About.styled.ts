import styled from "styled-components";

export const About = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const Slider = styled.aside`
  width: 45%;
  border: 5px solid white;
  padding-bottom: 25px;

  & h1 {
    font: bold 2rem 'Ubuntu Mono';
    text-align: center;
  }
`;

export const TextField = styled.article`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 50px;
  width: 50%;
  font: 1.1rem 'Nunito';
  color: white;
`;
