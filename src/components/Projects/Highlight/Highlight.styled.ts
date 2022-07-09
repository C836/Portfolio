import styled from "styled-components";

interface Highlight {
  right?: boolean;
  color?: string;
}

export const Highlight = styled.section<Highlight>`
  display: flex;
  align-items: center;
  width: 100%;

  @media (min-width: 851px) {
    margin: ${(props) => (props.right ? "50px 0" : "0")};
    direction: ${(props) => (props.right ? "rtl" : "ltr")};
  }

  @media (max-width: 850px) {
    flex-direction: column;
  }
`;

export const Border = styled.figure`
  object-fit: contain;
  position: relative;
  width: 40%;
  margin: 0;
  border: 4px solid white;
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
  font-size: 40px;
  line-height: 0;
  position: absolute;
  top: -35px;
  right: ${(props)=> !props.right && "-35px"};
  left: ${(props)=> props.right && "-35px"};
  margin: 0;
  border-radius: 50%;
  background-color: ${(props)=> props.color};
  z-index: 2;
  border: 2px solid white;
`

export const Icon = styled.figure<Highlight>`
  margin: 0;
  position: absolute;
  bottom: 18px;
  right: ${(props)=> props.right && "18px"};
  left: ${(props)=> !props.right && "18px"};
`

export const Img_Wrapper = styled.div`
  position: relative;
  z-index: 1;

  & img {
    width: 100%;
  }
`;

export const TextField = styled.article<Highlight>`
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

  @media (max-width: 1050px) {
    margin: 30px;
    width: 40%;
  }

  @media (max-width: 850px) {
    width: 100%;
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
  margin-right: 18px;

  @media (min-width: 851px) {
    margin: 0 ${(props) => (props.right ? "0 0 18px" : "18px 0 0")};
  }
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

    @media (min-width: 851px) {
      margin: 0 ${(props) => (props.right ? "0 0 20px" : "20px 0 0")};
    }
  }
`;
