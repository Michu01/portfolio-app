import iconUrls from "../../constants/iconUrls";
import TechnologyChip from "./TechnologyChip";

function NodeJsChip() {
  return (
    <TechnologyChip
      name="Node.js"
      color="#68a063"
      iconUrl={iconUrls.nodeJs}
    />
  );
}

export default NodeJsChip;