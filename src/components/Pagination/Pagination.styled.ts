import styled from "styled-components";

export const Pagination = styled.div`
  position: fixed;
  top: 50%; left: 0;
  transform: translate(-50%, -50%);
  row-gap: 50px;
  display: flex;
  flex-direction: column;
`;

export const Dots = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: white;
`;
