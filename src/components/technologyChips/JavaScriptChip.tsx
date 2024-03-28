import iconUrls from "../../constants/iconUrls";
import TechnologyChip from "./TechnologyChip";

function JavaScriptChip() {
  return (
    <TechnologyChip
      name="JavaScript"
      color="#f7df1e"
      iconUrl={iconUrls.javaScript}
    />
  );
}

export default JavaScriptChip;