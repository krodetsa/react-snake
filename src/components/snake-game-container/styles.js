import styled from "styled-components";

export const StyledField = styled.div`
  max-width: 1024px;
  width: 100%;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 300px) and (max-width: 1199.98px) {
    width: 300px;
    height: 300px;
  }
`;

export const StyledSettingsText = styled.div`
  position: relative;
  transform: translateX(5px, 3px);
  cursor: pointer;
  & p {
    color: var(--light);
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    animation: glitch 1s infinite;
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
`;
