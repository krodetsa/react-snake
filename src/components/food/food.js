import { $foodPos } from "./model";
import { StyledFood } from "./styles";
import { useStore } from "effector-react";
import { useMemo } from "react";

const Food = () => {
  const { x, y } = useStore($foodPos);
  const food = useMemo(
    () => <StyledFood posX={x} posY={y}></StyledFood>,
    [x, y]
  );

  return food;
};

export default Food;
