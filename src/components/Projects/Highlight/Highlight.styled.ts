import styled from "styled-components";

export const Highlight = styled.section`
  display: flex;
  align-items: center;

  margin: 0;
  width: 100%;
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
  margin-left: 40px;

  & h3 {
    margin: 0;
    font: bold 2rem "Ubuntu Mono";
  }

  & p {
    margin-top: 28px;
    font-size: 1.1rem;
    line-height: 1.75rem;
  }
`;

export const TechList = styled.ul`
  list-style: none;
  display: flex;
  margin-top: 20px;
  padding: 0;
`;

export const Tech = styled.li`
  margin-right: 15px;
  font-size: 1rem;
`;

export const Links = styled.ul`
  color: white;
  font-size: 26px;
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  height: 40px;

  & a {
    color: white;
    margin-right: 15px;
  }
`;
