import styled from "styled-components";

export const StyledField = styled.div`
  width: 600px;
  height: 600px;
  background-color: #1b1e23;
  overflow: hidden;
  position: relative;
  box-shadow: 0 0 0.1vw 0px var(--lightblue), 0 0 0.4vw 0.6vw var(--middblue),
    0 0 4vw 0.4vw var(--darkblue), inset 0 0 1.5vw 0.4vw var(--darkblue),
    inset 0 0 0.4vw 0.2vw var(--middblue),
    inset 0 0 0.5vw 0.2vw var(--lightblue);
  border-radius: 4%;
  animation: border-flicker 7s alternate infinite;
  @keyframes border-flicker {
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
`;
