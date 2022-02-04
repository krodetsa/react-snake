import { $snakeState } from "./model";
import { StyledSnake } from "./styles";
import { useStore } from "effector-react";

const Snake = () => {
  const snakeState = useStore($snakeState);
  return <StyledSnake></StyledSnake>;
};

export default Snake;
