import { createEvent, createStore } from "effector";

export const onSnakeStateChange = createEvent();
export const $snakeState = createStore(4).on(
  onSnakeStateChange,
  (_, state) => state
);
