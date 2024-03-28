import iconUrls from "../../constants/iconUrls";
import TechnologyChip from "./TechnologyChip";

function ArduinoChip() {
  return (
    <TechnologyChip
      name="Arduino"
      color="#129ba0"
      iconUrl={iconUrls.arduino}
    />
  );
}

export default ArduinoChip;