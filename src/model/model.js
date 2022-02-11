import { createEvent, createStore } from "effector";
import { onKeyDownChange } from "../components/snake/model";

export const onPauseChange = createEvent();

export const $pauseStore = createStore(false).on(
  onKeyDownChange,
  (_, keydown) => {
    return keydown === "Space";
  }
);
