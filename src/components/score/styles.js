import styled from "styled-components";

export const StyledScoreContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 26%;
`;

export const StyledCounter = styled.div`
  margin-right: 10%;
  position: relative;
  display: inline-block;
  padding: 7px 10px;
  color: var(--darkblue);
  z-index: 10;
  text-shadow: 0.2px 0px 0px var(--midd), 0.4px 0px 0px var(--midd),
    0.1px 0px 0.1px var(--midd), 0.2px 0px 0.1px var(--midd),
    0.4px 0px 0.1px var(--midd), 0.1px 0px 2px var(--midd),
    0.2px 0px 2px var(--midd), 0.4px 0px 2px var(--midd),
    0.1px 0px 5px var(--dark), 0.2px 0px 20px var(--dark),
    0.4px 0px 5px var(--dark);
  & span {
    color: var(--purpledark);
    height: 100%;
    text-shadow: 0.2px 0px 0px var(--purplemidd),
      0.4px 0px 0px var(--purplemidd), 0.1px 0px 0.1px var(--purplemidd),
      0.2px 0px 0.1px var(--purplemidd), 0.4px 0px 0.1px var(--purplemidd),
      0.1px 0px 2px var(--purplemidd), 0.2px 0px 2px var(--purplemidd),
      0.4px 0px 2px var(--purplemidd), 0.1px 0px 5px var(--purpledark),
      0.2px 0px 20px var(--purpledark), 0.4px 0px 5px var(--purpledark);
    animation: ${(props) => (props.counter ? "show-up 1s alternate" : "")};
    @keyframes show-up {
      0% {
        opacity: 0.1;
        -webkit-box-shadow: 0px 0px -40px 4px rgba(16, 134, 232, 0.73);
        -moz-box-shadow: 0px 0px -40px 4px rgba(16, 134, 232, 0.73);
        box-shadow: 0px 0px -40px 4px rgba(16, 134, 232, 0.73);
      }
      2% {
        opacity: 1;
        -webkit-box-shadow: 0px 0px -40px 4px rgba(16, 134, 232, 0.73);
        -moz-box-shadow: 0px 0px -40px 4px rgba(16, 134, 232, 0.73);
        box-shadow: 0px 0px -40px 4px rgba(16, 134, 232, 0.73);
      }
      4% {
        opacity: 0.9;
        -webkit-box-shadow: 0px 0px -40px 4px rgba(16, 134, 232, 0.73);
        -moz-box-shadow: 0px 0px -40px 4px rgba(16, 134, 232, 0.73);
        box-shadow: 0px 0px -40px 4px rgba(16, 134, 232, 0.73);
      }

      8% {
        opacity: 1;
        -webkit-box-shadow: 0px 0px -40px 4px rgba(16, 134, 232, 0.73);
        -moz-box-shadow: 0px 0px -40px 4px rgba(16, 134, 232, 0.73);
        box-shadow: 0px 0px -40px 4px rgba(16, 134, 232, 0.73);
      }
      70% {
        opacity: 0.9;
        -webkit-box-shadow: 0px 0px -40px 4px rgba(16, 134, 232, 0.73);
        -moz-box-shadow: 0px 0px -40px 4px rgba(16, 134, 232, 0.73);
        box-shadow: 0px 0px -40px 4px rgba(16, 134, 232, 0.73);
      }
      100% {
        opacity: 1;
        -webkit-box-shadow: 0px 0px -40px 4px rgba(16, 134, 232, 0.73);
        -moz-box-shadow: 0px 0px -40px 4px rgba(16, 134, 232, 0.73);
        box-shadow: 0px 0px -40px 4px rgba(16, 134, 232, 0.73);
      }
    }
  }
`;
