import styled from "styled-components";

export const Projects = styled.section`
  padding-top: 30px;
  padding-bottom: 30vh;
  text-align: center;

  @media (max-width: 850px){
  	padding-bottom: 150px;
  }
`;

export const List = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  row-gap: 25vh;
  margin-top: 60px;
  margin-bottom: 30px;

  @media (max-width: 850px){
  	row-gap: 100px;
  }
`;
