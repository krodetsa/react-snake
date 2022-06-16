import { useStore } from "effector-react";
import { useEffect } from "react";
import { $difficulty } from "../../model/model";
import { useAudio } from "../audio";
import { $foodPos, onFoodPosChange } from "../food/model";
import {
  $gameStarted,
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
  const difficulty = useStore($difficulty);
  useEffect(() => {
    if (keyDown !== "") {
      const interval = setInterval(() => {
        onSnakePosChange(keyDown);
      }, difficulty);
      if (keyDown === "Space") {
        clearInterval(interval);
        onSnakePosChange(keyDown);
        onKeyDownChange("Space");
      }
      return () => clearInterval(interval);
    }
  }, [keyDown, difficulty]);

  useEffect(() => {
    checkFoodBorders(snakePos, foodPos) && onFoodPosChange();
  }, [snakePos, foodPos]);
};

export const useKeyboardListener = () => {
  useEffect(() => {
    const cb = (key) => {
      onKeyDownChange(key);
    };
    window.addEventListener("keydown", (event) => cb(event.code), false);
    return () =>
      window.removeEventListener("keydown", (event) => cb(event.key), false);
  }, []);
};

export const useGameStarted = () => {
  const gameStarted = useStore($gameStarted);
  const { toggle } = useAudio("/main.mp3", 0.4);

  useEffect(() => {
    console.log(gameStarted);
    gameStarted && toggle();
  }, [gameStarted]);
};
