import AssetType from "../../types/AssetType";
import GithubLink from "../GithubLink";
import LiveVersionLink from "../LiveVersionLink";
import GraphQLChip from "../technologyChips/GraphQLChip";
import ReactChip from "../technologyChips/ReactChip";
import TypeScriptChip from "../technologyChips/TypeScriptChip";
import ProjectComponent from "./ProjectComponent";

type Props = {
  index: number;
}

function CountriesApp(props: Props) {
  const { index } = props;

  const name = "Countries App";
  const formattedName = "countries-app";
  const header = "A frontend app for querying and displaying country data from an external api";
  const description =
    "User selects continent and inputs result count. " +
    "App displays information about countries such as capital, population, currencies, etc. ";
  const technologyChips = [
    <ReactChip key="react" />,
    <TypeScriptChip key="typescript" />,
    <GraphQLChip key="graph-ql" />
  ];
  const links = [
    <GithubLink key="countries-app" displayName="Countries App" navigationName="countries-app" />,
    <LiveVersionLink key="live" href="https://countries-app-michu01.vercel.app/" />
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
    />
  )
}

export default CountriesApp;