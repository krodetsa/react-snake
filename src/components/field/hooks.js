import { useStore } from "effector-react";
import { useEffect } from "react";
import { $foodPos, onFoodPosChange } from "../food/model";
import {
  $keyDown,
  $snakePos,
  onKeyDownChange,
  onSnakePosChange,
} from "../snake/model";

const checkFoodBorders = (head, food) => {
  const stuntX = head.x - 9 <= food.x && food.x <= head.x + 9;
  const stuntY = head.y - 9 <= food.y && food.y <= head.y + 9;

  return stuntX && stuntY;
};

export const useGameStart = () => {
  const keyDown = useStore($keyDown);
  const foodPos = useStore($foodPos);
  const snakePos = useStore($snakePos)[useStore($snakePos).length - 1];
  useEffect(() => {
    if (keyDown !== "") {
      const interval = setInterval(() => {
        onSnakePosChange(keyDown);
      }, 60);
      return () => clearInterval(interval);
    }
  }, [keyDown]);

  useEffect(() => {
    checkFoodBorders(snakePos, foodPos) && onFoodPosChange();
  }, [snakePos, foodPos]);
};

export const useKeyboardListener = () => {
  useEffect(() => {
    const cb = (key) => {
      onKeyDownChange(key);
    };
    window.addEventListener("keydown", (event) => cb(event.key), false);
    return () =>
      window.removeEventListener("keydown", (event) => cb(event.key), false);
  }, []);
};
