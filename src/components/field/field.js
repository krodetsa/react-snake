import Snake from "../snake/snake";
import { StyledField } from "./styles";
import { $keyDown, onKeyDownChange, onSnakePosChange } from "../snake/model";
import { useEffect } from "react";
import { useStore } from "effector-react";

const Field = () => {
  const keyDown = useStore($keyDown);
  useEffect(() => {
    if (keyDown !== "") {
      const interval = setInterval(() => {
        onSnakePosChange(keyDown);
      }, 50);
      return () => clearInterval(interval);
    }
  }, [keyDown]);
  useEffect(() => {
    const cb = (key) => {
      onKeyDownChange(key);
    };
    window.addEventListener("keydown", (event) => cb(event.key), false);
    return () =>
      window.removeEventListener("keydown", (event) => cb(event.key), false);
  }, []);
  return (
    <StyledField>
      <Snake />
    </StyledField>
  );
};

export default Field;
