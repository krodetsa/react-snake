import styled from "styled-components";

export const StyledOptionContainer = styled.div`
  width: 285px;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Styledlabel = styled.label`
  color: var(--darkblue);
  text-transform: uppercase;
  margin-right: 13px;
  text-shadow: 0.2px 0px 0px var(--midd), 0.4px 0px 0px var(--midd),
    0.1px 0px 0.1px var(--midd), 0.2px 0px 0.1px var(--midd),
    0.4px 0px 0.1px var(--midd), 0.1px 0px 2px var(--midd),
    0.2px 0px 2px var(--midd), 0.4px 0px 2px var(--midd),
    0.1px 0px 5px var(--dark), 0.2px 0px 20px var(--dark),
    0.4px 0px 5px var(--dark);
`;

export const StyledSettingsContainer = styled.div`
  position: absolute;
  top: 0px;
  box-shadow: ${(props) =>
    props.isOpen
      ? "0 0 1px 0px var(--lightblue), 0 0 5px 6px var(--middblue),0 0 100px 5px var(--darkblue), inset 0 0 30px 5px var(--darkblue),inset 0 0 5px 2px var(--middblue), inset 0 0 5px 2px var(--lightblue)"
      : "none"};
  border-radius: 0px 0px 50px 50px;
  width: 100%;
  height: ${(props) => (!props.isOpen ? "0px" : "360px")};
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s;
  overflow: hidden;
  background: red;
  background: rgba(255, 255, 255, 0.01);
  -webkit-backdrop-filter: blur(44px);
  backdrop-filter: blur(44px);
  @supports (-moz-appearance: none) {
    background: linear-gradient(339.17deg, #26242b 6.41%, #3a3348 91.38%),
      #373246;
  }
`;

export const StyledRangeSlider = styled.input`
  -webkit-appearance: none;
  width: 100px;
  height: 2px;
  border-radius: 5px;
  background: var(--darkblue);
  box-shadow: 0.2px 0px 0px var(--midd), 0.4px 0px 0px var(--midd),
    0.1px 0px 0.1px var(--midd), 0.2px 0px 0.1px var(--midd),
    0.4px 0px 0.1px var(--midd), 0.1px 0px 2px var(--midd),
    0.2px 0px 2px var(--midd), 0.4px 0px 2px var(--midd),
    0.1px 0px 5px var(--dark), 0.2px 0px 20px var(--dark),
    0.4px 0px 5px var(--dark);
  outline: none;
  padding: 0;
  margin: 0;
  margin-right: 10px;
  cursor: pointer;
  transform: scale(-1, 1);

  // Range Handle
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 15px;
    height: 15px;
    border-radius: 50%;
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
    cursor: pointer;
    transition: all 0.15s ease-in-out;
    &:hover {
      transform: scale(1.2);
    }
  }
  &::-moz-range-thumb {
    width: $range-handle-size;
    height: $range-handle-size;
    border: 0;
    border-radius: 50%;
    background: var(--dark);
    cursor: pointer;
    box-shadow: 0.2px 0px 0px var(--midd), 0.4px 0px 0px var(--midd),
      0.1px 0px 0.1px var(--midd), 0.2px 0px 0.1px var(--midd),
      0.4px 0px 6.1px var(--midd), 0.1px 0px 2px var(--midd),
      0.2px 0px 14px var(--midd), 0.4px 0px 2px var(--midd),
      0.1px 0px 1px var(--dark), 0.2px 0px 1px var(--dark),
      0.4px 0px 5px var(--dark), 0.1px 0px 5px var(--dark),
      0.2px 0px 5px var(--dark), 0.4px 0px 5px var(--dark),
      0.1px 0px 5px var(--dark), 0.2px 0px 20px var(--dark),
      0.4px 0px 5px var(--dark);
    transition: all 0.15s ease-in-out;
    &:hover {
      transform: scale(1.2);
    }
  }
`;
