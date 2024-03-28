import iconUrls from "../../constants/iconUrls";
import TechnologyChip from "./TechnologyChip";

function CppChip() {
  return (
    <TechnologyChip
      name="C++"
      color="#004283"
      iconUrl={iconUrls.cpp}
    />
  );
}

export default CppChip;