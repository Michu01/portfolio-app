import GithubLink from "../GithubLink";
import AssetType from "../../types/AssetType";
import ProjectComponent from "./ProjectComponent";
import CSharpChip from "../technologyChips/CSharpChip";
import AspDotNetChip from "../technologyChips/AspDotNetChip";
import SqlServerChip from "../technologyChips/SqlServerChip";
import EntityFrameworkChip from "../technologyChips/EntityFrameworkChip";
import ReactChip from "../technologyChips/ReactChip";
import TypeScriptChip from "../technologyChips/TypeScriptChip";
import SassChip from "../technologyChips/SassChip";
import BootstrapChip from "../technologyChips/BootstrapChip";
import range from "../../utility/range";
import LiveVersionLink from "../LiveVersionLink";

type Props = {
  index: number;
}

function OutOfOffice(props: Props) {
  const { index } = props;

  const name = "Out of Office";
  const formattedName = "out-of-office";
  const header = "Workforce management system";
  const description = "It caters to four distinct roles within an organization. " +
    "The administrator has full control over the system. They manage all data, including employees, projects, and leave requests. " + 
    "The HR manager focuses on employee-related tasks. Project managers oversee project assignments and approvals. " + 
    "Employees interact with the system to request leave and view project details.";
  const technologyChips = [
    <CSharpChip key="csharp" />,
    <AspDotNetChip key="asp-net" />,
    <ReactChip key="react" />,
    <TypeScriptChip key="typescript" />,
    <EntityFrameworkChip key="entity-framework" />,
    <SassChip key="sass" />,
    <BootstrapChip key="bootstrap" />,
    <SqlServerChip key="mssql" />,
  ];
  const links = [
    <GithubLink key="outOfOffice" displayName="Out of Office" navigationName="OutOfOffice" />,
    <LiveVersionLink key="live" href="https://michu01outofoffice.azurewebsites.net/" />
  ];
  const assetTypes = range(0, 9).map(_ => "image") satisfies AssetType[];

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
      hasPlaceholders
    />
  )
}

export default OutOfOffice;