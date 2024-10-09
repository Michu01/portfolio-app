import GithubLink from "../GithubLink";
import AssetType from "../../types/AssetType";
import ProjectComponent from "./ProjectComponent";
import ReactChip from "../technologyChips/ReactChip";
import TypeScriptChip from "../technologyChips/TypeScriptChip";
import SupabaseChip from "../technologyChips/SupabaseChip";
import MantineChip from "../technologyChips/MantineChip";
import LiveVersionLink from "../LiveVersionLink";

type Props = {
  index: number;
}

function Quotes(props: Props) {
  const { index } = props;

  const name = "Quotes";
  const formattedName = "quotes";
  const header = "SPA for displaying famous people's quotes with pretty backgrounds";
  const description = "User can change quotes and backgrounds, which are stored in supabase. " + 
    "Every quote can have author, source (with links to webpage) and author's avatar. " +
    "There are a few options for creating pictures with dynamic and static backgrounds.";
  const technologyChips = [
    <ReactChip />,
    <TypeScriptChip />,
    <SupabaseChip />,
    <MantineChip />
  ];
  const links = [
    <GithubLink key="quotes" displayName="Quotes" navigationName="quotes-app" />,
    <LiveVersionLink key="live" href="https://quotes-app-five-rho.vercel.app/" />
  ];
  const assetTypes = ["video", "image", "image"] satisfies AssetType[];

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

export default Quotes;