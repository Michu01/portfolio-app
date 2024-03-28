import iconUrls from "../../constants/iconUrls";
import TechnologyChip from "./TechnologyChip";

function SassChip() {
  return (
    <TechnologyChip
      name="Sass"
      color="#cd669a"
      iconUrl={iconUrls.sass}
    />
  );
}

export default SassChip;