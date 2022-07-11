import styled from "styled-components";

export const Project = styled.div`
  padding: 20px;
  position: relative;
  transition: transform 0.2s;
  box-sizing: border-box;
  border: 3px solid transparent;

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    border: 3px solid white;
    background: black;
    transform: translate(-3px, -3px);
  }

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -2;
    top: 0;
    left: 0;
    border: 3px solid #ffffff30;
    background-color: black;
    transform: translate(10px, 10px);
    transition: 0.2s;
  }

  &:hover {
    transform: translate(5px, 5px);

    &::after {
      transform: translate(-3px, -3px);
    }
  }

  @media (max-width: 600px){
  	padding: 16px;
  }
`;

export const Icon = styled.img`
  position: absolute;
  margin: 0;
  top: 5px; right: 5px;
  opacity: .1;
  width: 180px;
`;

export const Cover = styled.img`
  width: 100%;
`;

export const Techs = styled.div`
  display: flex;
  flex-direction: row-reverse;
  position: absolute;
  bottom: 15px;
  right: 15px;
  column-gap: 12px;
`;

export const Tech = styled.figure`
  font-size: 26px;
  line-height: 0;
  margin: 0;
`;

export const Links = styled.ul`
  color: white;
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;

  & a {
    display: block;
    color: white;
    line-height: 0;
    margin-top: 20px;
    margin-right: 15px;
    font-size: 30px;
  }
`;
