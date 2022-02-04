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
  return direction;
});

// $snakePos.watch((value) => {
//   const currentHeadPos = value[value.length - 1];
//   const currentFoodPos = $foodPos.getState();
//   // if (
//   //   currentFoodPos.x === currentHeadPos.x &&
//   //   currentFoodPos.y === currentHeadPos.y
//   // ) {
//   //   console.log(currentHeadPos, currentFoodPos);
//   //   onFoodPosChange();
//   // }
//   if (checkFoodBorders(currentHeadPos, currentFoodPos)) {
//     console.log(currentHeadPos, currentFoodPos);
//     onFoodPosChange();
//   }
//   // console.log(currentHeadPos, currentFoodPos);
// });
