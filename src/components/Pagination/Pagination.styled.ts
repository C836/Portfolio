import styled from "styled-components";

interface Pagination {
  selected: boolean;
}

export const Pagination = styled.div`
  position: fixed;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  row-gap: 50px;
  display: grid;
  flex-direction: column;
  z-index: 5;
`;

export const Dots = styled.div<Pagination>`
  &::after {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: white;
    box-sizing: border-box;

    transition: .2s;
    transform: translateX(-50%) ${(props)=> props.selected && "scale(2.5)" };
  }
`;
