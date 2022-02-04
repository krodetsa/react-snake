import { createEvent, createStore } from "effector";

export const onSnakePosChange = createEvent();
export const $snakePos = createStore([
  { x: 0, y: 0 },
  { x: 10, y: 0 },
  { x: 20, y: 0 },
]).on(onSnakePosChange, (store, state) => {
  let newStore = [...store];
  if (state === "ArrowRight") {
    newStore.shift();
    newStore.push({
      y: newStore[newStore.length - 1].y,
      x:
        newStore[newStore.length - 1].x + 8 > 605
          ? -50
          : newStore[newStore.length - 1].x + 8,
    });
  }
  if (state === "ArrowLeft") {
    newStore.shift();
    newStore.push({
      y: newStore[newStore.length - 1].y,
      x:
        newStore[newStore.length - 1].x - 8 < -5
          ? 660
          : newStore[newStore.length - 1].x - 8,
    });
  }
  if (state === "ArrowDown") {
    newStore.shift();
    newStore.push({
      x: newStore[newStore.length - 1].x,
      y:
        newStore[newStore.length - 1].y + 8 > 605
          ? -50
          : newStore[newStore.length - 1].y + 8,
    });
  }
  if (state === "ArrowUp") {
    newStore.shift();
    newStore.push({
      x: newStore[newStore.length - 1].x,
      y:
        newStore[newStore.length - 1].y - 8 < -8
          ? 660
          : newStore[newStore.length - 1].y - 8,
    });
  }
  return newStore;
});

export const onKeyDownChange = createEvent();
export const $keyDown = createStore("").on(onKeyDownChange, (store, state) => {
  let direction = store;

  if (store !== "ArrowRight" && state === "ArrowLeft") {
    direction = state;
  }
  if (store !== "ArrowLeft" && state === "ArrowRight") {
    direction = state;
  }
  if (store !== "ArrowDown" && state === "ArrowUp") {
    direction = state;
  }
  if (store !== "ArrowUp" && state === "ArrowDown") {
    direction = state;
  }
  return direction;
});
