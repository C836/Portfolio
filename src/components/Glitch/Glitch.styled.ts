import styled from "styled-components";

export const Glitch = styled.div`
  color: white;
  font-size: clamp(35px, 7vw, 80px);
  animation: glitch-skew 1s infinite linear alternate-reverse;
  cursor: pointer;

  ::before {
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

  ::after {
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
      clip: rect(51px, 9999px, 18px, 0);
      transform: skew(0.38deg);
    }
    5% {
      clip: rect(25px, 9999px, 30px, 0);
      transform: skew(0.08deg);
    }
    10% {
      clip: rect(22px, 9999px, 21px, 0);
      transform: skew(0.2deg);
    }
    15% {
      clip: rect(89px, 9999px, 81px, 0);
      transform: skew(0.47deg);
    }
    20% {
      clip: rect(81px, 9999px, 56px, 0);
      transform: skew(0.28deg);
    }
    25% {
      clip: rect(54px, 9999px, 69px, 0);
      transform: skew(0.83deg);
    }
    30% {
      clip: rect(28px, 9999px, 39px, 0);
      transform: skew(0.33deg);
    }
    35% {
      clip: rect(62px, 9999px, 87px, 0);
      transform: skew(0.31deg);
    }
    40% {
      clip: rect(77px, 9999px, 90px, 0);
      transform: skew(0.46deg);
    }
    45% {
      clip: rect(97px, 9999px, 84px, 0);
      transform: skew(0.46deg);
    }
    50% {
      clip: rect(32px, 9999px, 52px, 0);
      transform: skew(0.19deg);
    }
    55% {
      clip: rect(12px, 9999px, 26px, 0);
      transform: skew(0.08deg);
    }
    60% {
      clip: rect(85px, 9999px, 29px, 0);
      transform: skew(0.14deg);
    }
    65% {
      clip: rect(52px, 9999px, 99px, 0);
      transform: skew(0.99deg);
    }
    70% {
      clip: rect(21px, 9999px, 16px, 0);
      transform: skew(0.58deg);
    }
    75% {
      clip: rect(6px, 9999px, 92px, 0);
      transform: skew(0.94deg);
    }
    80% {
      clip: rect(73px, 9999px, 100px, 0);
      transform: skew(0.61deg);
    }
    85% {
      clip: rect(74px, 9999px, 91px, 0);
      transform: skew(0.52deg);
    }
    90% {
      clip: rect(26px, 9999px, 98px, 0);
      transform: skew(0.71deg);
    }
    95% {
      clip: rect(73px, 9999px, 81px, 0);
      transform: skew(0.4deg);
    }
    100% {
      clip: rect(86px, 9999px, 77px, 0);
      transform: skew(0.06deg);
    }
  }

  @keyframes glitch-anim2 {
    0% {
      clip: rect(27px, 9999px, 68px, 0);
      transform: skew(0.23deg);
    }
    5% {
      clip: rect(20px, 9999px, 45px, 0);
      transform: skew(0.94deg);
    }
    10% {
      clip: rect(19px, 9999px, 73px, 0);
      transform: skew(0.84deg);
    }
    15% {
      clip: rect(35px, 9999px, 62px, 0);
      transform: skew(0.32deg);
    }
    20% {
      clip: rect(43px, 9999px, 100px, 0);
      transform: skew(0.95deg);
    }
    25% {
      clip: rect(17px, 9999px, 74px, 0);
      transform: skew(0.42deg);
    }
    30% {
      clip: rect(81px, 9999px, 74px, 0);
      transform: skew(0.59deg);
    }
    35% {
      clip: rect(91px, 9999px, 2px, 0);
      transform: skew(0.19deg);
    }
    40% {
      clip: rect(18px, 9999px, 92px, 0);
      transform: skew(0.4deg);
    }
    45% {
      clip: rect(48px, 9999px, 91px, 0);
      transform: skew(0.84deg);
    }
    50% {
      clip: rect(17px, 9999px, 45px, 0);
      transform: skew(0.79deg);
    }
    55% {
      clip: rect(61px, 9999px, 66px, 0);
      transform: skew(0.18deg);
    }
    60% {
      clip: rect(85px, 9999px, 66px, 0);
      transform: skew(0.35deg);
    }
    65% {
      clip: rect(61px, 9999px, 22px, 0);
      transform: skew(0.97deg);
    }
    70% {
      clip: rect(53px, 9999px, 35px, 0);
      transform: skew(0.22deg);
    }
    75% {
      clip: rect(2px, 9999px, 81px, 0);
      transform: skew(0.2deg);
    }
    80% {
      clip: rect(34px, 9999px, 97px, 0);
      transform: skew(0.78deg);
    }
    85% {
      clip: rect(80px, 9999px, 20px, 0);
      transform: skew(0.18deg);
    }
    90% {
      clip: rect(26px, 9999px, 40px, 0);
      transform: skew(0.81deg);
    }
    95% {
      clip: rect(83px, 9999px, 44px, 0);
      transform: skew(0.86deg);
    }
    100% {
      clip: rect(32px, 9999px, 91px, 0);
      transform: skew(0.14deg);
    }
  }

  @keyframes glitch-skew {
    0% {
      transform: skew(2deg);
    }
    10% {
      transform: skew(-2deg);
    }
    20% {
      transform: skew(-4deg);
    }
    30% {
      transform: skew(-3deg);
    }
    40% {
      transform: skew(3deg);
    }
    50% {
      transform: skew(-2deg);
    }
    60% {
      transform: skew(0deg);
    }
    70% {
      transform: skew(5deg);
    }
    80% {
      transform: skew(0deg);
    }
    90% {
      transform: skew(5deg);
    }
    100% {
      transform: skew(3deg);
    }
  }
`;
