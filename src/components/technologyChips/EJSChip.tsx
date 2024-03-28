import iconUrls from "../../constants/iconUrls";
import TechnologyChip from "./TechnologyChip";

function EJSChip() {
  return (
    <TechnologyChip
      name="EJS"
      color="#90a93a"
      iconUrl={iconUrls.ejs}
    />
  );
}

export default EJSChip;