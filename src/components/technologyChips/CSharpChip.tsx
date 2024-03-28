import iconUrls from "../../constants/iconUrls";
import TechnologyChip from "./TechnologyChip";

function CSharpChip() {
  return (
    <TechnologyChip
      name="C Sharp"
      color="#3a0091"
      iconUrl={iconUrls.cSharp}
    />
  );
}

export default CSharpChip;