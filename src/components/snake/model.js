import { createEvent, createStore } from "effector";

export const onSnakePosChange = createEvent();
export const onAddSnakeTail = createEvent();
export const $snakePos = createStore([
  { x: 70, y: 170 },
  { x: 80, y: 170 },
  { x: 90, y: 170 },
])
  .on(onSnakePosChange, (store, state) => {
    let newStore = [...store];
    if (state === "ArrowRight") {
      newStore.shift();
      newStore.push({
        y: newStore[newStore.length - 1].y,
        x:
          newStore[newStore.length - 1].x + 8 >
          (window.screen.width > 390 ? 600 : 300)
            ? 0
            : newStore[newStore.length - 1].x + 8,
      });
    }
    if (state === "ArrowLeft") {
      newStore.shift();
      newStore.push({
        y: newStore[newStore.length - 1].y,
        x:
          newStore[newStore.length - 1].x - 8 < -5
            ? window.screen.width > 390
              ? 600
              : 300
            : newStore[newStore.length - 1].x - 8,
      });
    }
    if (state === "ArrowDown") {
      newStore.shift();
      newStore.push({
        x: newStore[newStore.length - 1].x,
        y:
          newStore[newStore.length - 1].y + 8 >
          (window.screen.width > 390 ? 600 : 300)
            ? 0
            : newStore[newStore.length - 1].y + 8,
      });
    }
    if (state === "ArrowUp") {
      newStore.shift();
      newStore.push({
        x: newStore[newStore.length - 1].x,
        y:
          newStore[newStore.length - 1].y - 8 < -8
            ? window.screen.width > 390
              ? 600
              : 300
            : newStore[newStore.length - 1].y - 8,
      });
    }
    return newStore;
  })
  .on(onAddSnakeTail, (store) => {
    let newStore = [...store];
    newStore.unshift({
      y: newStore[0].y,
      x: newStore[0].x,
    });
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
  if (state === "Space") {
    direction = state;
  }
  return direction;
});

export const onGameStartedChange = createEvent();
export const onGameReset = createEvent();
export const $gameStarted = createStore(false)
  .on(onKeyDownChange, (store) => {
    let result = true;
    if (store === result) {
      return store;
    } else {
      return result;
    }
  })
  .reset(onGameReset);
