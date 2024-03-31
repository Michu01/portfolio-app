import GithubLink from "../GithubLink";
import EJSChip from "../technologyChips/EJSChip";
import ExpressJsChip from "../technologyChips/ExpressJsChip";
import JavaScriptChip from "../technologyChips/JavaScriptChip";
import MongoDBChip from "../technologyChips/MongoDBChip";
import NodeJsChip from "../technologyChips/NodeJsChip";
import AssetType from "../../types/AssetType";
import ProjectComponent from "./ProjectComponent";

type Props = {
  index: number;
}

function AniSono(props: Props) {
  const { index } = props;

  const name = "AniSono";
  const formattedName = "anisono";
  const header = "A web app for guessing anime opening songs";
  const description = "User listens to a song and has to guess anime title. ";
  const technologyChips = [
    <NodeJsChip key="node-js" />,
    <JavaScriptChip key="javascript" />,
    <EJSChip key="ejs"/>,
    <MongoDBChip key="mongo-db" />,
    <ExpressJsChip key="express-js" />
  ];
  const links = [
    <GithubLink key="anisono" displayName="AniSono" navigationName="anisono" />
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
      links={links}
      darkMode
    />
  )
}

export default AniSono;