import { useStore } from "effector-react";
import { Fragment } from "react/cjs/react.production.min";
import { $gameStarted } from "../snake/model";
import {
  StyledBottom,
  StyledGround,
  StyledImage,
  StyledSky,
  StyledTop,
} from "./styles";

const BackgroundComponent = () => {
  const gameStarted = useStore($gameStarted);
  return (
    <StyledImage gameStarted={gameStarted}>
      <StyledTop>
        <StyledSky></StyledSky>
      </StyledTop>
      <StyledBottom>
        <StyledGround></StyledGround>
      </StyledBottom>
    </StyledImage>
  );
};

export default BackgroundComponent;
