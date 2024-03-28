import iconUrls from "../../constants/iconUrls";
import TechnologyChip from "./TechnologyChip";

function MongoDBChip() {
  return (
    <TechnologyChip
      name="MongoDB"
      color="#1b2d39"
      iconUrl={iconUrls.mongoDB}
    />
  );
}

export default MongoDBChip;