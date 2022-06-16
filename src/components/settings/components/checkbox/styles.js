import styled from "styled-components";

export const StyledCheckbox = styled.div`
  margin-top: -3px;
  margin-left: -5px;
  margin-right: 5px;
  width: 28px;
  height: 28px;
  position: relative;
  background: transparent;
  border-radius: 50px;

  & label {
    width: 20px;
    height: 20px;
    cursor: pointer;
    position: absolute;
    left: 4px;
    top: 4px;
    border-radius: 50px;
    box-shadow: inset 0px 1px 1px var(--lightblue), 0px 1px 0px var(--darkblue);
    box-shadow: 0 0 1px 0px var(--lightblue), 0 0 3px 2px var(--middblue),
      0 0 5px 3px var(--darkblue), inset 0 0 5px 2px var(--darkblue),
      inset 0 0 3px 2px var(--middblue), inset 0 0 2px 1px var(--lightblue);
  }
  & label:after {
    content: "";
    width: 16px;
    height: 16px;
    position: absolute;
    top: 2px;
    left: 2px;
    background: var(--dark);
    box-shadow: 0.2px 0px 0px var(--midd), 0.4px 0px 0px var(--midd),
      0.1px 0px 0.1px var(--midd), 0.2px 0px 0.1px var(--midd),
      0.4px 0px 6.1px var(--midd), 0.1px 0px 2px var(--midd),
      0.2px 0px 14px var(--midd), 0.4px 0px 2px var(--midd),
      0.1px 0px 1px var(--dark), 0.2px 0px 1px var(--dark),
      0.4px 0px 5px var(--dark), 0.1px 0px 5px var(--dark),
      0.2px 0px 5px var(--dark), 0.4px 0px 5px var(--dark),
      0.1px 0px 5px var(--dark), 0.2px 0px 20px var(--dark),
      0.4px 0px 5px var(--dark);
    opacity: 0;
    border-radius: 50px;
  }
  & label:hover::after {
    opacity: 0.3;
  }
  & input[type="checkbox"] {
    visibility: hidden;
  }
  & input[type="checkbox"]:checked + label:after {
    opacity: 1;
  }
`;
