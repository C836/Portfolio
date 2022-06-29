import styled from "styled-components";

interface Icon {
  color: string;
  active: boolean;
}

export const Icon = styled.span<Icon>`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => (props.active 
    ? props.color 
    : "white")};
  height: auto;

  & figure {
    margin: 0;
    font-size: 3.5rem;
  }

  & p {
    margin-top: 0.5em;
    font: 1.2rem "Ubuntu Mono";
  }
`;
