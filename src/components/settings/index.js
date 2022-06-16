import { useStore } from "effector-react";
import { $difficulty, onDifficultyChanged } from "../../model/model";
import { StyledSettingsText } from "../snake-game-container/styles";
import CustomCheckbox from "./components/checkbox";
import {
  $settings,
  $settingsState,
  onSettingsChanged,
  onSettingsStateChanged,
} from "./model";
import {
  StyledRangeSlider,
  StyledSettingsContainer,
  StyledOptionContainer,
  Styledlabel,
} from "./styles";

function SettingsContainer() {
  const settingsState = useStore($settingsState);
  const difficulty = useStore($difficulty);
  const { snake, walls } = useStore($settings);
  return (
    <StyledSettingsContainer isOpen={settingsState}>
      <StyledOptionContainer>
        <Styledlabel>Difficulty:</Styledlabel>
        <StyledRangeSlider
          type="range"
          min="0"
          max="66"
          step="33"
          value={difficulty}
          onChange={(e) => onDifficultyChanged(e.target.value)}
        />
        <Styledlabel>
          {difficulty < 3 ? "EHEHEHE" : difficulty < 35 ? "Normal" : "Easy"}
        </Styledlabel>
      </StyledOptionContainer>
      <StyledOptionContainer>
        <Styledlabel>Through the walls!!!</Styledlabel>
        <CustomCheckbox
          value={walls}
          onChange={onSettingsChanged}
          type={"walls"}
        />
        <Styledlabel>{walls ? "Yep" : "Nope"}</Styledlabel>
      </StyledOptionContainer>
      <StyledOptionContainer>
        <Styledlabel>Through the snake!!!</Styledlabel>
        <CustomCheckbox
          value={snake}
          onChange={onSettingsChanged}
          type={"snake"}
        />
        <Styledlabel>{snake ? "Yep" : "Nope"}</Styledlabel>
      </StyledOptionContainer>
      <StyledSettingsText onClick={onSettingsStateChanged}>
        <p>APPLY & CLOSE</p>
      </StyledSettingsText>
    </StyledSettingsContainer>
  );
}

export default SettingsContainer;
