import { $foodPos } from "./model";
import { StyledFood } from "./styles";
import { useStore } from "effector-react";
import { useMemo } from "react";
import { useFoodEaten } from "./hooks";

const Food = () => {
  const { x, y } = useStore($foodPos);
  useFoodEaten();
  const food = useMemo(
    () => <StyledFood posX={x} posY={y}></StyledFood>,
    [x, y]
  );

  return food;
};

export default Food;
