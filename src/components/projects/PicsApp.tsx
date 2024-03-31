import AssetType from "../../types/AssetType";
import AspDotNetChip from "../technologyChips/AspDotNetChip";
import CSharpChip from "../technologyChips/CSharpChip";
import EntityFrameworkChip from "../technologyChips/EntityFrameworkChip";
import RabbitMQChip from "../technologyChips/RabbitMQChip";
import ReactChip from "../technologyChips/ReactChip";
import SassChip from "../technologyChips/SassChip";
import SqlServerChip from "../technologyChips/SqlServerChip";
import TypeScriptChip from "../technologyChips/TypeScriptChip";
import ProjectComponent from "./ProjectComponent";

type Props = {
  index: number;
}

function PicsApp(props: Props) {
  const { index } = props;

  const name = "Pics App";
  const formattedName = "pics-app";
  const header = "A web app for browsing, rating and exploring art inspired by Japanese media";
  const description =
    "User can search art by artist, tags, creation date and many other criteria. " +
    "They can favourite and rate pictures, to easily access them later. " +
    "Backend works by scraping image data from imageboards and storing it in database. " +
    "App is based on microservice architecture with two main services - api and data scraper. " + 
    "RabbitMQ is used for sending messages between these two services.";
  const technologyChips = [
    <CSharpChip key="csharp" />,
    <ReactChip key="react" />,
    <TypeScriptChip key="typescript" />,
    <SassChip key="sass" />,
    <RabbitMQChip key="rabbit-mq" />,
    <AspDotNetChip key="asp-net" />,
    <EntityFrameworkChip key="entity-framework" />,
    <SqlServerChip key="sql-server" />
  ];
  const assetTypes = ["image", "image", "image"] satisfies AssetType[];

  return (
    <ProjectComponent
      index={index}
      name={name}
      formattedName={formattedName}
      description={description}
      header={header}
      technologyChips={technologyChips}
      assetTypes={assetTypes}
      hasPlaceholders
    />
  )
}

export default PicsApp;