import iconUrls from "../../constants/iconUrls";
import TechnologyChip from "./TechnologyChip";

function TypeScriptChip() {
  return (
    <TechnologyChip
      name="TypeScript"
      color="#007acc"
      iconUrl={iconUrls.typeScript}
    />
  );
}

export default TypeScriptChip;