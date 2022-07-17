import styled from "styled-components";

export const Highlights = styled.section`
  padding-top: 30px;
  padding-bottom: 30vh;

  @media (max-width: 850px){
  	padding-bottom: 150px;
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 25vh;
  margin: 30px 0;

  @media (max-width: 850px){
  	row-gap: 100px;
  }
`;
