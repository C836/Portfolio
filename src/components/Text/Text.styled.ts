import styled from "styled-components";

export const Title = styled.h1`
  font-family: 'Raleway';
  font-size: 3rem;
  font-weight: bold;
  margin: 0;
  margin-bottom: 15px;

  @media only screen and (max-width: 650px) {
    font-size: 2.5rem;
  }
`;

export const Subtitle = styled.h2`
  font-family: 'Raleway';
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
  margin-bottom: 15px;

  @media only screen and (max-width: 650px) {
    font-size: 1.5rem;
  }
`;


export const Text = styled.p`
  font: 1rem 'Raleway';
  margin: 0;
  line-height: 1.7;
  text-align: justify;

  @media only screen and (max-width: 650px) {
    font-size: .875rem;
  }
`;

export const Small = styled.small`
  font: .9rem 'Raleway';

  @media only screen and (max-width: 650px) {
    font-size: .8rem;
  }
`

