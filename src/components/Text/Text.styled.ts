import styled from "styled-components";

export const Title = styled.h1`
  font: bold 3rem "Ubuntu Mono";
  margin: 0;
  margin-bottom: 30px;

  @media only screen and (max-width: 650px) {
    font: bold 3rem "Ubuntu Mono";
  }
`;

export const Subtitle = styled.h2`
  font-family: 'Ubuntu Mono';
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
  margin-bottom: 15px;
  color: blue;

  @media only screen and (max-width: 650px) {
    font-size: 1.5rem;
  }
`;


export const Text = styled.p`
  font: 1rem 'Nunito';
  margin: 0;
  line-height: 1.7;
`;

export const Small = styled.small`
  font: .9rem 'Ubuntu Mono';

  @media only screen and (max-width: 650px) {
    font-size: .8rem;
  }
`

