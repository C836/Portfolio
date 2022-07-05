import styled from "styled-components";

interface Button {
  colored?: boolean;
}

export const Button = styled.button<Button>`
  padding: 18px 27px;
  font: 500 1.2rem "Roboto", sans-serif;
  background: black;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  border: 2px solid ${(props) => (props.colored ? "var(--main)" : "white")};
  z-index: 1;
  color: white;

  &::after {
    position: absolute;
    content: "";
    width: 0;
    height: 100%;
    top: 0;
    right: 0;
    direction: ltr;
    z-index: -1;
    background: ${(props) => (props.colored ? "var(--main)" : "white")};
    transition: all 0.3s ease;
  }

  &:hover {
    color: ${(props) => (props.colored ? "white" : "black")};
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
