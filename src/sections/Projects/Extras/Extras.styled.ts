import styled from "styled-components";

export const Extras = styled.section`
  display: flex;
  flex-direction: column;

  margin: 80px 0;
  padding-top: 10vh;
  padding-bottom: 50vh;

  @media (max-width: 800px){
    padding-top: 0;
    padding-bottom: 80px;
  }

  @media (max-width: 800px){
    margin: 0;
  }
`;

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  margin: 30px 0;

  & div {
    width: calc(33.33% - 27px);
  }

  @media (max-width: 1200px) {
    & div {
      width: calc(50% - 25px);
    }
  }

  @media (max-width: 800px) {
    flex-direction: column;
    margin: 20px 0;

    & div {
      width: 100%;
    }
  }
`;
