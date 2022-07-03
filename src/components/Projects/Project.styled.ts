import styled from "styled-components";

export const Project = styled.div`
  width: 350px;
  padding: 20px;
  position: relative;
  transition: transform 0.2s;
  box-sizing: border-box;
  border: 3px solid white;

  & h3 {
    font: 2rem "Ubuntu Mono";
    line-height: 0;
  }
`;

export const Cover = styled.img`
  width: 100%;
`;

export const Tech = styled.figure`
  font-size: 40px;
  line-height: 0;
  margin: 0;
  position: absolute;
  bottom: 15px;
  right: 15px;
`;

export const Links = styled.ul`
  color: white;
  font-size: 26px;
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
  }
`;
