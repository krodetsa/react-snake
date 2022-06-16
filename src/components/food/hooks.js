import { useStore } from "effector-react";
import { $snakePos } from "../snake/model";
import { useAudio } from "../audio";
import { useEffect } from "react";

export const useFoodEaten = () => {
  const position = useStore($snakePos);
  const { toggle } = useAudio("/gotcha.mp3", 0.7);

  useEffect(() => {
    position.length !== 3 && toggle();
  }, [position.length]);
};
