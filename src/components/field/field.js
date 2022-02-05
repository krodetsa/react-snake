import Snake from "../snake/snake";
import { StyledField } from "./styles";
import Food from "../food/food";
import { useGameStart, useKeyboardListener } from "./hooks";
import Score from "../score";

const Field = () => {
  useKeyboardListener();
  useGameStart();

  return (
    <StyledField>
      <Score />
      <Snake />
      <Food />
    </StyledField>
  );
};

export default Field;
