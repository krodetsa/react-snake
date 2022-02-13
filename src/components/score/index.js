import { useStore } from "effector-react";
import { $snakePos } from "../snake/model";
import { useCheckCounter } from "./hooks";
import { StyledCounter, StyledCounterContainer } from "./styles";
import { StyledScoreContainer } from "./styles";

const Score = () => {
  const total = useStore($snakePos).length;
  const score = (
    <StyledCounter className={useCheckCounter(total, "qqw")}>
      {total - 3}
    </StyledCounter>
  );
  return (
    <StyledScoreContainer>
      <StyledCounterContainer>SCORE: {score}</StyledCounterContainer>
    </StyledScoreContainer>
  );
};

export default Score;
