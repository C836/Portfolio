import styled from "styled-components";

interface Highlight {
  right?: boolean
}

export const Highlight = styled.section<Highlight>`
  display: flex;
  align-items: center;

  margin: ${props => props.right ? '50px 0' : '0'};
  width: 100%;
  
  direction: ${props => props.right ? 'rtl' : 'ltr'};
`;

export const Border = styled.figure`
  object-fit: contain;
  position: relative;
  width: 40%;
  margin: 0;
`;

export const Img_Wrapper = styled.div`
  position: relative;
  z-index: 1;
  border: 4px solid white;
  & img {
    width: 100%;
  }
`;

export const TextField = styled.article`
  width: 50%;
  margin-top: 40px;
  font-family: "Nunito";
  margin: 0 40px;

  & h3 {
    margin: 0;
    font: bold 2rem "Ubuntu Mono";
  }

  & p {
    margin-top: 18px;
    font-size: 1.1rem;
    line-height: 1.75rem;
    text-align: justify;
  }
`;

export const TechList = styled.ul`
  list-style: none;
  display: flex;
  margin-top: 20px;
  padding: 0;
`;

export const Tech = styled.li<Highlight>`
  font-size: 1rem;

  margin: 0 ${props => props.right ? '0 0 18px' : '18px 0 0'};
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
    margin: 0 ${props => props.right ? '0 0 20px' : '20px 0 0'};
  }
`;
