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
  border: 1px solid var(--dark);
  display: inline-block;
  position: absolute;
  border-radius: 30%;
  background-color: var(--dark);
  box-shadow: 0.2px 0px 0px var(--midd), 0.4px 0px 0px var(--midd),
    0.1px 0px 0.1px var(--midd), 0.2px 0px 0.1px var(--midd),
    0.4px 0px 0.1px var(--midd), 0.1px 0px 2px var(--midd),
    0.2px 0px 2px var(--midd), 0.4px 0px 2px var(--midd),
    0.1px 0px 1px var(--dark), 0.2px 0px 1px var(--dark),
    0.4px 0px 5px var(--dark), 0.1px 0px 5px var(--dark),
    0.2px 0px 5px var(--dark), 0.4px 0px 5px var(--dark),
    0.1px 0px 5px var(--dark), 0.2px 0px 20px var(--dark),
    0.4px 0px 5px var(--dark);
`;
