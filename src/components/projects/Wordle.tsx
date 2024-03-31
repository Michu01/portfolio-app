import AssetType from "../../types/AssetType";
import GithubLink from "../GithubLink";
import AspDotNetChip from "../technologyChips/AspDotNetChip";
import CSharpChip from "../technologyChips/CSharpChip";
import JavaScriptChip from "../technologyChips/JavaScriptChip";
import ProjectComponent from "./ProjectComponent";

type Props = {
  index: number;
}

function Wordle(props: Props) {
  const { index } = props;

  const name = "Wordle Clone";
  const formattedName = "wordle-clone";
  const header = "A clone of popular game \"Wordle\"";
  const description =
    "The game's objective is to guess the word. " +
    "The app communicates with Dictionary Api, asking for random word of given length.";
  const technologyChips = [
    <CSharpChip key="csharp" />,
    <JavaScriptChip key="javascript" />,
    <AspDotNetChip key="asp-net" />
  ];
  const links = [
    <GithubLink key="wordle" displayName="Wordle" navigationName="wordleclone" />,
    <GithubLink key="dictionary-api" displayName="Dictionary Api" navigationName="DictionaryAPI" />
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

export default Wordle;