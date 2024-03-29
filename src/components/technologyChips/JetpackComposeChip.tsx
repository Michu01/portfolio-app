import iconUrls from "../../constants/iconUrls";
import TechnologyChip from "./TechnologyChip";

function JetpackComposeChip() {
  return (
    <TechnologyChip
      name="Jetpack Compose"
      color="#083042"
      iconUrl={iconUrls.jetpackCompose}
    />
  );
}

export default JetpackComposeChip;