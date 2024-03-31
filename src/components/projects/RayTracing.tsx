import AssetType from "../../types/AssetType";
import GithubLink from "../GithubLink";
import CppChip from "../technologyChips/CppChip";
import ImGuiChip from "../technologyChips/ImGuiChip";
import OpenGLChip from "../technologyChips/OpenGLChip";
import ProjectComponent from "./ProjectComponent";

type Props = {
  index: number;
}

function RayTracing(props: Props) {
  const { index } = props;

  const name = "Ray Tracing";
  const formattedName = "ray-tracing";
  const header = "My first attempt at ray tracing";
  const description = 
    "Performs ray tracing in real time, calculations are done on CPU. " +
    "Uses GLFW, OpenGL and ImGUI. " + 
    "User can change samples taken per pixel and ray bounces limit.";
  const technologyChips = [
    <CppChip key="cpp" />,
    <OpenGLChip key="open-gl" />,
    <ImGuiChip key="imgui" />
  ];
  const links = [
    <GithubLink key="ray-tracing" displayName="Ray Tracing" navigationName="RayTracing" />
  ];
  const assetTypes = ["image", "image", "image", "video"] satisfies AssetType[];

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

export default RayTracing;