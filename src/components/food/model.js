import { createEvent, createStore, forward } from "effector";
import { onAddSnakeTail } from "../snake/model";

export const onFoodPosChange = createEvent();

function getRandomPosition(max, min) {
  return {
    x: Math.floor(Math.random() * (max - min)) + min,
    y: Math.floor(Math.random() * (max - min)) + min,
  };
}
export const $foodPos = createStore(getRandomPosition(0, 600)).on(
  onFoodPosChange,
  () => {
    return getRandomPosition(0, 600);
  }
);

forward({
  from: onFoodPosChange,
  to: onAddSnakeTail,
});
