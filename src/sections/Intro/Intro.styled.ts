import styled from "styled-components";

export const Curriculo = styled.div`
  position: absolute;
  top: 30px;
  right: 30px;
`;

export const TextField = styled.article`
  color: white;
  width: 70%;

  & p {
    width: 65%;

    &:nth-of-type(2) {
      margin-bottom: 2em;
    }
  }
`;

export const Name = styled.div`
  display: ${(props) => (props.hidden ? "none" : "block")};
`;

export const NameWrapper = styled.div`
  font: 600 clamp(35px, 7vw, 80px) "Ubuntu Mono";
  white-space: nowrap;

  & h1 {
    width: 100%;
    margin: 0.8em 0;
    padding: 0;
    line-height: 0;
  }
`;

export const Hand = styled.span`
  animation-name: wave-animation;
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
  display: inline-block;

  @keyframes wave-animation {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(14deg);
    }
    20% {
      transform: rotate(-8deg);
    }
    30% {
      transform: rotate(14deg);
    }
    40% {
      transform: rotate(-4deg);
    }
    50% {
      transform: rotate(10deg);
    }
    60% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;

export const Intro = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Nunito";
`;
