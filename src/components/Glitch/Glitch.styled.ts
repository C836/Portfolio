import styled from "styled-components";

export const Glitch = styled.div`
  color: white;
  animation: glitch-skew 1s infinite linear alternate-reverse;

  &:before {
    content: "<Gabriel Lopes />";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    left: 2px;
    text-shadow: -2px 0 #ff00c1;
    clip: rect(44px, 450px, 56px, 0);
    animation: glitch-anim 5s infinite linear alternate-reverse;
  }
  &:after {
    content: "<Gabriel Lopes />";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    left: -2px;
    text-shadow: -2px 0 #00fff9, 2px 2px #ff00c1;
    animation: glitch-anim2 1s infinite linear alternate-reverse;
  }
  @keyframes glitch-anim {
    0% {
      clip: rect(65px, 9999px, 10px, 0);
      transform: skew(0.59deg);
    }
    5% {
      clip: rect(97px, 9999px, 18px, 0);
      transform: skew(0.6deg);
    }
    10% {
      clip: rect(51px, 9999px, 26px, 0);
      transform: skew(0.04deg);
    }
    15% {
      clip: rect(99px, 9999px, 56px, 0);
      transform: skew(0.21deg);
    }
    20% {
      clip: rect(50px, 9999px, 16px, 0);
      transform: skew(0.46deg);
    }
    25% {
      clip: rect(63px, 9999px, 93px, 0);
      transform: skew(0.95deg);
    }
    30% {
      clip: rect(57px, 9999px, 59px, 0);
      transform: skew(0.32deg);
    }
    35% {
      clip: rect(77px, 9999px, 85px, 0);
      transform: skew(0.08deg);
    }
    40% {
      clip: rect(4px, 9999px, 72px, 0);
      transform: skew(0.91deg);
    }
    45% {
      clip: rect(1px, 9999px, 8px, 0);
      transform: skew(0.88deg);
    }
    50% {
      clip: rect(39px, 9999px, 9px, 0);
      transform: skew(0.22deg);
    }
    55% {
      clip: rect(40px, 9999px, 79px, 0);
      transform: skew(0.93deg);
    }
    60% {
      clip: rect(94px, 9999px, 85px, 0);
      transform: skew(0.57deg);
    }
    65% {
      clip: rect(91px, 9999px, 65px, 0);
      transform: skew(0.82deg);
    }
    70% {
      clip: rect(53px, 9999px, 4px, 0);
      transform: skew(0.35deg);
    }
    75% {
      clip: rect(39px, 9999px, 11px, 0);
      transform: skew(0.55deg);
    }
    80% {
      clip: rect(95px, 9999px, 96px, 0);
      transform: skew(0.9deg);
    }
    85% {
      clip: rect(21px, 9999px, 2px, 0);
      transform: skew(0.7deg);
    }
    90% {
      clip: rect(60px, 9999px, 39px, 0);
      transform: skew(0.33deg);
    }
    95% {
      clip: rect(40px, 9999px, 58px, 0);
      transform: skew(0.12deg);
    }
    100% {
      clip: rect(1px, 9999px, 91px, 0);
      transform: skew(0.59deg);
    }
  }
  @keyframes glitch-anim2 {
    0% {
      clip: rect(60px, 9999px, 5px, 0);
      transform: skew(0.59deg);
    }
    5% {
      clip: rect(12px, 9999px, 67px, 0);
      transform: skew(0.34deg);
    }
    10% {
      clip: rect(53px, 9999px, 22px, 0);
      transform: skew(0.97deg);
    }
    15% {
      clip: rect(63px, 9999px, 76px, 0);
      transform: skew(0.52deg);
    }
    20% {
      clip: rect(16px, 9999px, 17px, 0);
      transform: skew(0.58deg);
    }
    25% {
      clip: rect(72px, 9999px, 70px, 0);
      transform: skew(0.04deg);
    }
    30% {
      clip: rect(41px, 9999px, 44px, 0);
      transform: skew(0.94deg);
    }
    35% {
      clip: rect(92px, 9999px, 14px, 0);
      transform: skew(0.58deg);
    }
    40% {
      clip: rect(71px, 9999px, 34px, 0);
      transform: skew(0.47deg);
    }
    45% {
      clip: rect(84px, 9999px, 55px, 0);
      transform: skew(0.84deg);
    }
    50% {
      clip: rect(46px, 9999px, 38px, 0);
      transform: skew(0.71deg);
    }
    55% {
      clip: rect(7px, 9999px, 44px, 0);
      transform: skew(0.38deg);
    }
    60% {
      clip: rect(67px, 9999px, 5px, 0);
      transform: skew(0.59deg);
    }
    65% {
      clip: rect(91px, 9999px, 34px, 0);
      transform: skew(0.24deg);
    }
    70% {
      clip: rect(4px, 9999px, 47px, 0);
      transform: skew(0.52deg);
    }
    75% {
      clip: rect(8px, 9999px, 3px, 0);
      transform: skew(0.17deg);
    }
    80% {
      clip: rect(7px, 9999px, 67px, 0);
      transform: skew(0.6deg);
    }
    85% {
      clip: rect(69px, 9999px, 87px, 0);
      transform: skew(0.56deg);
    }
    90% {
      clip: rect(41px, 9999px, 99px, 0);
      transform: skew(0.9deg);
    }
    95% {
      clip: rect(29px, 9999px, 25px, 0);
      transform: skew(0.9deg);
    }
    100% {
      clip: rect(33px, 9999px, 76px, 0);
      transform: skew(0.86deg);
    }
  }
  @keyframes glitch-skew {
    0% {
      transform: skew(2deg);
    }
    10% {
      transform: skew(0deg);
    }
    20% {
      transform: skew(2deg);
    }
    30% {
      transform: skew(-3deg);
    }
    40% {
      transform: skew(-3deg);
    }
    50% {
      transform: skew(2deg);
    }
    60% {
      transform: skew(0deg);
    }
    70% {
      transform: skew(1deg);
    }
    80% {
      transform: skew(1deg);
    }
    90% {
      transform: skew(-2deg);
    }
    100% {
      transform: skew(2deg);
    }
  }
`;
