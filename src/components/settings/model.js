import { createEvent, createStore } from "effector";

export const onSettingsStateChanged = createEvent();
export const $settingsState = createStore(false).on(
  onSettingsStateChanged,
  (store) => !store
);

export const onSettingsChanged = createEvent();
export const $settings = createStore({ walls: false, snake: false }).on(
  onSettingsChanged,
  (store, state) => {
    return { ...store, ...state };
  }
);
