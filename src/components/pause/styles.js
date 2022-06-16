import styled from "styled-components";

export const StyledPauseContainer = styled.div`
  width: 100%;
  min-width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  background: var(--semiblack);
  transition: 0.5s;
  opacity: 0.7;
`;

export const StyledPauseText = styled.div`
  position: relative;
  transform: translateX(5px, 3px);
  animation: move 0.8s infinite;
  cursor: pointer;
  & p {
    color: var(--font);
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    animation: glitch 0.5s infinite;
  }
  @keyframes glitch {
    0% {
      text-shadow: 6px 4px var(--glitch2), 5px -5px var(--glitch1),
        2px -4px var(--glitch3);
    }
    1% {
      text-shadow: -2px 0px var(--glitch2), -5px 5px var(--glitch1),
        2px 4px var(--glitch3);
    }
    19% {
      text-shadow: -2px 0px var(--glitch2), -5px 5px var(--glitch1),
        2px 4px var(--glitch3);
    }
    20% {
      text-shadow: -4px 4px var(--glitch2), 3px 3px var(--glitch1),
        -2px 4px var(--glitch3);
    }
    39% {
      text-shadow: -4px 4px var(--glitch2), 3px 3px var(--glitch1),
        -2px 4px var(--glitch3);
    }
    40% {
      text-shadow: 1px -1px var(--glitch2), -1px 5px var(--glitch1),
        6px -3px var(--glitch3);
    }
    59% {
      text-shadow: 1px -1px var(--glitch2), -1px 5px var(--glitch1),
        6px -3px var(--glitch3);
    }
    60% {
      text-shadow: -5px -4px var(--glitch2), -4px 4px var(--glitch1),
        -3px 3px var(--glitch3);
    }
    79% {
      text-shadow: -5px -4px var(--glitch2), -4px 4px var(--glitch1),
        -3px 3px var(--glitch3);
    }
    80% {
      text-shadow: -4px 4px var(--glitch2), 3px 3px var(--glitch1),
        -2px 4px var(--glitch3);
    }
    99% {
      text-shadow: -4px 4px var(--glitch2), 3px 3px var(--glitch1),
        -2px 4px var(--glitch3);
    }
  }

  @keyframes move {
    0% {
      transform: translate(5px, 3px);
    }
    25% {
      transform: translate(-4px, 1px);
    }
    50% {
      transform: translate(3px, -4px);
    }
    75% {
      transform: translate(-3px, 4px);
    }
    99% {
      transform: translate(5px, 3px);
    }
  }
`;
