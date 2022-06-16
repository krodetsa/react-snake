import { Styledlabel } from "../../styles";
import { StyledCheckbox } from "./styles";

export const CustomCheckbox = ({ value, onChange, type }) => {
  return (
    <StyledCheckbox>
      <input
        id={`custom-${type}`}
        type="checkbox"
        value={value}
        onChange={() => onChange({ [type]: !value })}
      />
      <Styledlabel htmlFor={`custom-${type}`}></Styledlabel>
    </StyledCheckbox>
  );
};

export default CustomCheckbox;
