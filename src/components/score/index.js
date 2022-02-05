import { useStore } from "effector-react";
import { $snakePos } from "../snake/model";
import { StyledCounter } from "./styles";
import { StyledScoreContainer } from "./styles";

const Score = () => {
  const total = useStore($snakePos).length;
  return (
    <StyledScoreContainer>
      <StyledCounter counter={total}>
        SCORE: <span>{total - 3}</span>
      </StyledCounter>
    </StyledScoreContainer>
  );
};

export default Score;
