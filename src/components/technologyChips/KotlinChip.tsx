import iconUrls from "../../constants/iconUrls";
import TechnologyChip from "./TechnologyChip";

function KotlinChip() {
  return (
    <TechnologyChip
      name="Kotlin"
      color="#f08125"
      iconUrl={iconUrls.kotlin}
    />
  );
}

export default KotlinChip;