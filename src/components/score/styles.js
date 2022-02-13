import styled from "styled-components";

export const StyledScoreContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 26%;
`;

export const StyledCounterContainer = styled.div`
  margin-right: 10%;
  position: relative;
  display: flex;
  align-items: center;
  padding: 7px 10px;
  color: var(--darkblue);
  z-index: 10;
  text-shadow: 0.2px 0px 0px var(--midd), 0.4px 0px 0px var(--midd),
    0.1px 0px 0.1px var(--midd), 0.2px 0px 0.1px var(--midd),
    0.4px 0px 0.1px var(--midd), 0.1px 0px 2px var(--midd),
    0.2px 0px 2px var(--midd), 0.4px 0px 2px var(--midd),
    0.1px 0px 5px var(--dark), 0.2px 0px 20px var(--dark),
    0.4px 0px 5px var(--dark);
  overflow: hidden;
`;
export const StyledCounter = styled.p`
  color: var(--purpledark);
  height: 100%;
  text-shadow: 0.2px 0px 0px var(--purplemidd), 0.4px 0px 0px var(--purplemidd),
    0.1px 0px 0.1px var(--purplemidd), 0.2px 0px 0.1px var(--purplemidd),
    0.4px 0px 0.1px var(--purplemidd), 0.1px 0px 2px var(--purplemidd),
    0.2px 0px 2px var(--purplemidd), 0.4px 0px 2px var(--purplemidd),
    0.1px 0px 5px var(--purpledark), 0.2px 0px 20px var(--purpledark),
    0.4px 0px 5px var(--purpledark);
  transition: 0.4s;
  position: relative;
  margin: 0px;
  margin-left: 3px;

  &.qqw {
    animation: showUp 0.3s;
  }
  @keyframes showUp {
    0% {
      top: 0px;
      color: var(--darkblue);
    }
    50% {
      top: 100px;
    }
    51% {
      top: -100px;
    }
    100% {
      top: 0px;
      color: var(--purpledark);
    }
  }
`;
