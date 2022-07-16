import styled from "styled-components";

interface Button {
  colored?: boolean;
  transparent?: boolean;
  alt?: boolean;
}

export const Button = styled.button<Button>`
  padding: 25px 27px;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 0;
  background: transparent;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  border-width: 2px;
  border-style: solid ;
  border-color: ${props => props.colored ? "var(--main)" : "white"};
  border: ${props => props.alt && "0"};
  border-bottom: 2px solid  ${props => props.colored ? "var(--main)" : "white"};
  z-index: 1;
  color:${props => props.colored ? "var(--main)" : "white"};
  @media (max-width: 800px){
  	font-size: 1rem;
  }

  &::after {
    position: absolute;
    content: "";
    width: ${props => props.alt ? "100%" : "0"};;
    height: ${props => props.alt ? "0" : "100%"};;
    bottom: 0;
    right: ${props => !props.alt && "0"};
    left: ${props => props.alt && "0"};
    direction: ltr;
    z-index: -1;
    background: ${(props) => (props.colored ? "var(--main)" : "white")};
    transition: all 0.3s ease;
  }

  &:hover {
    color: ${(props) => (props.colored ? "white" : "black")};
    &::after {
      right: ${props => !props.alt && "auto"};
      left: ${props => !props.alt && "0"};
      width: ${props => !props.alt && "100%"};

      top: ${props => props.alt && "auto"};
      bottom: ${props => props.alt && "0"};
      height: ${props => props.alt && "100%"};;
    }
  }

  &:active {
    top: 2px;
  }
`;
