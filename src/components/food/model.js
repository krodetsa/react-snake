import { createEvent, createStore, forward } from "effector";
import { onAddSnakeTail } from "../snake/model";

export const onFoodPosChange = createEvent();

function getRandomPosition(max, min) {
  return {
    x: Math.floor(Math.random() * (max - min)) + min,
    y: Math.floor(Math.random() * (max - min)) + min,
  };
}
export const $foodPos = createStore(getRandomPosition(30, 560)).on(
  onFoodPosChange,
  () => getRandomPosition(30, 560)
);

forward({
  from: onFoodPosChange,
  to: onAddSnakeTail,
});
