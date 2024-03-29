import iconUrls from "../../constants/iconUrls";
import TechnologyChip from "./TechnologyChip";

function UnityChip() {
  return (
    <TechnologyChip
      name="Unity"
      color="#222c37"
      iconUrl={iconUrls.unity}
    />
  );
}

export default UnityChip;