import { $snakePos } from "./model";
import { StyledSnakePart } from "./styles";
import { useStore } from "effector-react";
import { useMemo } from "react";

const Snake = () => {
  const position = useStore($snakePos);

  const snake = useMemo(
    () =>
      position.map((el, i) => (
        <StyledSnakePart
          posX={el.x}
          posY={el.y}
          el={el}
          key={i + el}
        ></StyledSnakePart>
      )),
    [position]
  );

  return snake;
};

export default Snake;
