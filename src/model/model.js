import { createStore } from "effector";
import { onAddSnakeTail, onKeyDownChange } from "../components/snake/model";

export const $pauseStore = createStore(false).on(
  onKeyDownChange,
  (_, keydown) => {
    return keydown === "Space";
  }
);

export const $difficulty = createStore(60).on(onAddSnakeTail, (store) => {
  return store - 1;
});
