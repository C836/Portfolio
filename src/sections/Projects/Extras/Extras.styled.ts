import styled from "styled-components";

export const Extras = styled.section`
  display: flex;
  flex-direction: column;

  margin: 80px 0;
  padding-bottom: calc(50vh - 270px);
`;

export const Wrapper = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  column-gap: 40px;
  margin: 30px 0;
`;
