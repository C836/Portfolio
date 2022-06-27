import styled from "styled-components";

export const Button = styled.button`
  padding: 18px 27px;
  font: 500 1.2rem "Roboto", sans-serif;
  background: transparent;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  border: 2px solid rgb(255, 255, 255);
  z-index: 1;
  color: white;

  &::after {
    position: absolute;
    content: "";
    width: 0;
    height: 100%;
    top: 0; right: 0;
    direction: ltr;
    z-index: -1;
    background: rgb(255, 255, 255);
    transition: all 0.3s ease;
  }

  &:hover {
    color: rgb(0, 0, 0);
    &::after {
      right: auto;
      left: 0;
      width: 100%;
    }
  }

  &:active {
    top: 2px;
  }
`;