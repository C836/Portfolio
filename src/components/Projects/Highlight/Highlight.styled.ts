import styled from "styled-components";

interface Highlight {
  right?: boolean;
  color?: string;
}

export const Highlight = styled.section<Highlight>`
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

export const IconWrapper = styled.figure<Highlight>`
  width: 100px;
  height: 100px;
  position: absolute;
  top: -35px;
  right: -35px;
  margin: 0;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  z-index: 2;
  border: 4px solid white;
`;

export const Icon = styled.figure<Highlight>`
  margin: 0;
  position: absolute;
  bottom: 18px;
  left: 18px;
`;

export const Img_Wrapper = styled.div`
  position: relative;
  z-index: 1;

  & img {
    width: 100%;
    vertical-align: middle;
  }
`;

export const TextField = styled.article<Highlight>`
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

export const Tech = styled.li<Highlight>`
  margin-right: 18px;
  margin-bottom: 8px;
`;

export const Links = styled.ul<Highlight>`
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
