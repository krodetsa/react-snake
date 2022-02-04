import styled from "styled-components";

export const StyledFood = styled.div.attrs((props) => {
  return {
    style: {
      left: `${props.posX}px`,
      top: `${props.posY}px`,
    },
  };
})`
  width: 10px;
  height: 10px;
  background-color: var(--dark);
  display: inline-block;
  /* box-sizing: border-box; */
  position: absolute;
  /* transition: 0.2s; */
  border-radius: 50%;
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
