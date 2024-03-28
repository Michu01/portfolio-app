import iconUrls from "../../constants/iconUrls";
import TechnologyChip from "./TechnologyChip";

function WxWidgetsChip() {
  return (
    <TechnologyChip
      name="wxWidgets"
      color="black"
      iconUrl={iconUrls.wxWidgets}
    />
  );
}

export default WxWidgetsChip;