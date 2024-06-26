import AssetType from "../../types/AssetType";
import GithubLink from "../GithubLink";
import AndroidChip from "../technologyChips/AndroidChip";
import JetpackComposeChip from "../technologyChips/JetpackComposeChip";
import KotlinChip from "../technologyChips/KotlinChip";
import ProjectComponent from "./ProjectComponent";

type Props = {
  index: number;
}

function Musify(props: Props) {
  const { index } = props;

  const name = "Musify";
  const formattedName = "musify";
  const header = "A mobile app for listening to music";
  const description = 
    "Currently just a mock, no backend implemented. " +
    "Totally unrelated to Spotify. " + 
    "User can browse artists, albums and songs.";
  const technologyChips = [
    <AndroidChip key="android" />,
    <KotlinChip key="kotlin" />,
    <JetpackComposeChip key="jetpack-compose" />
  ];
  const links = [
    <GithubLink key="musify" displayName="Musify" navigationName="Musify" />
  ];
  const assetTypes = ["image", "image", "image", "image", "image"] satisfies AssetType[];

  return (
    <ProjectComponent
      index={index}
      name={name}
      formattedName={formattedName}
      header={header}
      description={description}
      technologyChips={technologyChips}
      assetTypes={assetTypes}
      links={links}
      hasPlaceholders
    />
  )
}

export default Musify;