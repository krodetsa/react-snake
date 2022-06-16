import styled from "styled-components";

// this one is based on https://codepen.io/curley/pen/zYrpVXb so huge props to CurleyWebDev!

export const StyledTop = styled.div`
  height: 67%;
  background: linear-gradient(transparent 50%, var(--darkblue) 160%);
  box-shadow: 0 15px 50px 1px white;
  position: relative;
`;
export const StyledSky = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;

  background: repeating-linear-gradient(
      pink 2px,
      transparent 3px,
      transparent 30px
    ),
    repeating-linear-gradient(
        90deg,
        pink 2px,
        transparent 3px,
        transparent 40px
      )
      10px 0;
  -webkit-filter: drop-shadow(0 0 1px var(--purplemidd))
    drop-shadow(0 0 3px var(--purplemidd)) drop-shadow(0 0 7px purplemidd);
  filter: drop-shadow(0 0 1px var(--purplemidd))
    drop-shadow(0 0 3px var(--purplemidd))
    drop-shadow(0 0 7px var(--purplemidd));
  -webkit-animation: move 10s linear infinite;
  animation: move 10s linear infinite;
  opacity: 0.2;
`;
export const StyledBottom = styled.div`
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  transform: perspective(500px) rotateX(65deg);
  bottom: -15%;
  background: linear-gradient(
    90deg,
    var(--purplemidd) -60%,
    transparent 40%,
    transparent 60%,
    var(--purplemidd) 140%
  );
  -webkit-clip-path: polygon(0 100%, 0 55%, 100% 55%, 100% 100%);
  clip-path: polygon(0 100%, 0 55%, 100% 55%, 100% 100%);
`;
export const StyledGround = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 55%;
  background: repeating-linear-gradient(
      white 2px,
      transparent 3px,
      transparent 30px
    ),
    repeating-linear-gradient(
      90deg,
      white 2px,
      transparent 3px,
      transparent 40px
    );
  -webkit-filter: drop-shadow(0 0 1px var(--purplemidd))
    drop-shadow(0 0 3px var(--purplemidd))
    drop-shadow(0 0 7px var(--purplemidd));
  filter: drop-shadow(0 0 1px var(--purplemidd))
    drop-shadow(0 0 3px var(--purplemidd))
    drop-shadow(0 0 7px var(--purplemidd));
  -webkit-animation: move 10s linear infinite;
  animation: move 10s linear infinite;
  @keyframes move {
    to {
      background-position-y: 2000px;
    }
  }
`;

export const StyledImage = styled.div`
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  background: var(--navy);
  display: grid;
  background: #0c0c4a;
  position: absolute;
  animation: ${(props) => (props.gameStarted ? "show 2s linear" : "")};
  opacity: ${(props) => (props.gameStarted ? 1 : 0)};
  @keyframes show {
    0% {
      background: #0c0c4a;
    }
    50% {
      background: var(--purplemidd);
    }
    100% {
      background: #0c0c4a;
    }
  }
`;
