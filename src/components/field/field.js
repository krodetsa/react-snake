import Snake from "../snake/snake";
import { StyledField } from "./styles";
import Food from "../food/food";
import { useGameStart, useGameStarted, useKeyboardListener } from "./hooks";
import Score from "../score";
import Pause from "../pause/pause";

const Field = () => {
  useKeyboardListener();
  useGameStart();
  useGameStarted();

  return (
    <StyledField>
      <Score />
      <Snake />
      <Food />
      <Pause />
    </StyledField>
  );
};

export default Field;
