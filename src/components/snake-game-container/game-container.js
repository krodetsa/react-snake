import { useSwipeable } from "react-swipeable";
import Field from "../field/field";
import { onKeyDownChange } from "../snake/model";
import { StyledField } from "./styles";

const GameContainer = () => {
  const config = {
    delta: 10, // min distance(px) before a swipe starts.
    preventDefaultTouchmoveEvent: false, // call e.preventDefault
    trackTouch: true, // track touch input
    trackMouse: true, // track mouse input
    rotationAngle: 0, // set a rotation angle
  };
  const handlers = useSwipeable({
    onSwiped: (eventData) => onKeyDownChange("Arrow" + eventData.dir),
    ...config,
  });
  return (
    <StyledField {...handlers}>
      <Field />
    </StyledField>
  );
};

export default GameContainer;
