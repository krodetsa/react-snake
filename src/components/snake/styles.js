import styled from "styled-components";

export const StyledSnakePart = styled.div.attrs((props) => {
  return {
    style: {
      left: `${props.posX}px`,
      top: `${props.posY}px`,
    },
  };
})`
  border: 1px solid;
  font-size: 6px;
  width: 10px;
  height: 10px;
  background-color: #61dafb;
  border: 1px solid #ffffff;
  display: inline-block;
  box-sizing: border-box;
  position: absolute;
  transition: 0.2s;
  border-radius: 50%;
`;
