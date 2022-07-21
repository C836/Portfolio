import styled from "styled-components";

export const Stacks = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 100vh;
  margin-bottom: 80px;

  @media (max-width: 850px) {
    height: auto;
  }
`;

export const Icons_Wrapper = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 40px;
  row-gap: 30px;

  @media (max-width: 850px) {
    column-gap: 30px;
    row-gap: 20px;
  }

  @media (max-width: 450px) {
    column-gap: 15px;
    row-gap: 5px;
  }
`;

export const Icon = styled.div`
  font-family: "Raleway";
  font-size: 0.9rem;

  @media (max-width: 850px) {
    font-size: 0.8rem;
  }

  @media (max-width: 550px) {
    font-size: 0.7rem;
  }

  figure {
    margin: 0;
    font-size: 3.5rem;

    @media (max-width: 850px) {
      font-size: 2.5rem;
    }

    @media (max-width: 450px) {
      font-size: 2rem;
    }
  }
`;
