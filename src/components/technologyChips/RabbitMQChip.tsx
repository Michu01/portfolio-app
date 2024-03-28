import iconUrls from "../../constants/iconUrls";
import TechnologyChip from "./TechnologyChip";

function RabbitMQChip() {
  return (
    <TechnologyChip
      name="RabbitMQ"
      color="#ff6600"
      iconUrl={iconUrls.rabbitMQ}
    />
  );
}

export default RabbitMQChip;