import styled from "styled-components";

interface Dropdown {
  active: boolean;
}

export const Dropdown = styled.section<Dropdown>`
  position: fixed;
  bottom: 1em;
  right: 1em;

  &::after {
    display: block;
    content: " ";
    width: 3.5em;
    height: 3.5em;
    border-radius: 50%;
    position: absolute;
    top: 0;
    right: 0;
    z-index: -2;
    background-color: hsl(4, 98%, 60%);
    transition: all 0.3s ease;

    transform: ${(props) => (props.active ? "scale3d(5.5, 5.5, 1)" : "none")};
    transition-timing-function: ${(props) =>
      props.active ? "cubic-bezier(.68, 1.55, .265, 1)" : "none"};
  }
`;

export const Button = styled.a<Dropdown>`
  display: block;
  width: 3.5em;
  height: 3.5em;
  border-radius: 50%;
  background-color: hsl(4, 98%, 60%);
  box-shadow: 0 2px 5px 0 hsla(0, 0%, 0%, 0.26);
  color: hsl(0, 0%, 100%);
  text-align: center;
  line-height: 3.9;
  cursor: pointer;
  outline: 0;
  box-shadow: ${(props) =>
    props.active
      ? "0 4px 8px 0 hsla(0, 0%, 0%, .4);"
      : "inset 0 0 3px hsla(0, 0%, 0%, .3);"};
`;

export const Menu = styled.menu`
  padding: 0;
  margin: 0;
`;

export const Item = styled.a<Dropdown>`
  position: absolute;
  top: 0.2em;
  right: 0.2em;
  z-index: -1;
  display: block;
  text-decoration: none;
  color: hsl(0, 0%, 100%);
  font-size: 1em;
  width: 3em;
  height: 3em;
  border-radius: 50%;
  text-align: center;
  line-height: 3;
  background-color: hsla(0, 0%, 0%, 0.1);
  transition: transform 0.3s ease, background 0.2s ease;
  transition-timing-function: ${(props) =>
    props.active ? "cubic-bezier(0.175, 0.885, 0.32, 1.275)" : "none"};

  &:hover {
    background-color: hsla(0, 0%, 0%, 0.3);
  }

  &:nth-child(1) {
    transform: ${(props) =>
      props.active ? "translate3d(1em,-7em,0)" : "none"};
  }

  &:nth-child(2) {
    transform: ${(props) =>
      props.active ? "translate3d(-3.5em,-6.3em,0)" : "none"};
  }

  &:nth-child(3) {
    transform: ${(props) =>
      props.active ? "translate3d(-6.5em,-3.2em,0)" : "none"};
  }

  &:nth-child(4) {
    transform: ${(props) =>
      props.active ? "translate3d(-7em,1em,0)" : "none"};
  }
`;
