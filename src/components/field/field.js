import Snake from "../snake/snake";
import { StyledField } from "./styles";
import Food from "../food/food";
import { useGameStart, useKeyboardListener } from "./hooks";

const Field = () => {
  useKeyboardListener();
  useGameStart();

  return (
    <StyledField>
      <Snake />
      <Food />
    </StyledField>
  );
};

export default Field;
