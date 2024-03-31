import AssetType from "../../types/AssetType";
import GithubLink from "../GithubLink";
import CppChip from "../technologyChips/CppChip";
import WxWidgetsChip from "../technologyChips/WxWidgetsChip";
import ProjectComponent from "./ProjectComponent";

type Props = {
  index: number;
}

function SortingApp(props: Props) {
  const { index } = props;

  const name = "Sorting App";
  const formattedName = "sorting-app";
  const header = "A desktop app for visualizing sorting algorithms";
  const description =
    "App contains implementations of algorithms such as merge sort, heap sort, quick sort, etc. " +
    "User can select algorithm, data count and color palette. ";
  const technologyChips = [
    <CppChip key="cpp" />,
    <WxWidgetsChip key="wx-widgets" />
  ];
  const links = [
    <GithubLink key="sorting-app" displayName="Sorting App" navigationName="SortingApp" />
  ];
  const assetTypes = ["video", "video", "video"] satisfies AssetType[];

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

export default SortingApp;