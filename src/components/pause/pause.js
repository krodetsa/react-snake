import { useStore } from "effector-react";
import { useMemo } from "react";
import { $pauseStore } from "../../model/model";
import { StyledPauseContainer, StyledPauseText } from "./styles";

const Pause = () => {
  const pauseState = useStore($pauseStore);
  const gameIsPaused = useMemo(
    () =>
      pauseState ? (
        <StyledPauseContainer>
          <StyledPauseText>
            <p>PAUSE</p>
          </StyledPauseText>
        </StyledPauseContainer>
      ) : null,
    [pauseState]
  );
  return gameIsPaused;
};

export default Pause;
