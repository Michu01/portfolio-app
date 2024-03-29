import iconUrls from "../../constants/iconUrls";
import TechnologyChip from "./TechnologyChip";

function AndroidChip() {
  return (
    <TechnologyChip
      name="Android"
      color="#3b8840"
      iconUrl={iconUrls.android}
    />
  );
}

export default AndroidChip;