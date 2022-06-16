import { createStore, createEvent } from "effector";
import { onAddSnakeTail, onKeyDownChange } from "../components/snake/model";

export const $pauseStore = createStore(false).on(
  onKeyDownChange,
  (_, keydown) => {
    return keydown === "Space";
  }
);

export const onDifficultyChanged = createEvent();

export const $difficulty = createStore(43)
  .on(onAddSnakeTail, (store) => {
    return store - 1;
  })
  .on(onDifficultyChanged, (_, state) => state);
