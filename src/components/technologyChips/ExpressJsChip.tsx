import iconUrls from "../../constants/iconUrls";
import TechnologyChip from "./TechnologyChip";

function ExpressJsChip() {
  return (
    <TechnologyChip
      name="Express.js"
      color="#828282"
      iconUrl={iconUrls.expressJs}
    />
  );
}

export default ExpressJsChip;