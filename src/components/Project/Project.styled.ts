import styled from "styled-components";

interface Project {
  right?: boolean;
  color?: string;
}

export const Project = styled.section<Project>`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;

  @media (max-width: 850px) {
    flex-direction: column;
  }
`;

export const Border = styled.figure`
  --border-width: 6px;

  box-shadow: 0 0 0 var(--border-width) black,
    0 0 0 calc(var(--border-width) + 2px) white;
  object-fit: contain;
  position: relative;
  width: 40%;
  margin: 0;
  overflow: hidden;

  @media (max-width: 1050px) {
    width: 60%;
  }

  @media (max-width: 850px) {
    width: 100%;
  }
`;

export const Icon = styled.figure<{color: String}>`
  margin: 0;
  padding: 8px;
  position: absolute;
  font-size: 38px;
  border: 2px solid white;
  border-radius: 50%;
  line-height: 0;
  top: 8px;
  right: 8px;
  background-color: ${(props) => props.color};
  z-index: 90;
`;

export const Img_Wrapper = styled.div`
  position: relative;
  z-index: 1;

  & img {
    width: 100%;
    vertical-align: middle;
  }
`;

export const TextField = styled.article<Project>`
  width: 60%;

  margin: 0;

  @media (max-width: 1050px) {
    width: 40%;
  }

  @media (max-width: 850px) {
    margin-top: 40px;
    width: 100%;
  }

  @media (min-width: 851px) {
    margin-left: 40px;
    max-width: 600px;
  }
`;

export const TechList = styled.ul`
  list-style: none;
  display: flex;
  margin-top: 20px;
  padding: 0;
  width: 100%;
  flex-wrap: wrap;
`;

export const Tech = styled.li<Project>`
  margin-right: 18px;
  margin-bottom: 8px;
`;

export const Links = styled.ul<Project>`
  color: white;
  font-size: 26px;
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  height: 40px;

  & a {
    color: white;
    margin-right: 20px;
  }
`;
