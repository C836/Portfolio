import styled from "styled-components";

export const Stacks = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 100vh;
  margin-bottom: 100px;
  @media (max-width: 850px){
    height: auto;
  }
`

export const Icons_Wrapper = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 50px;
  row-gap: 40px;
`;

export const Icon = styled.div`
  font-family: 'Raleway';
  font-size: .9rem;

  figure {
    margin: 0;
    font-size: 4rem;
  }
`;
