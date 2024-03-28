import GithubLink from "../GithubLink";
import CSharpChip from "../technologyChips/CSharpChip";
import WPFChip from "../technologyChips/WPFChip";
import ProjectComponent from "./ProjectComponent";

type Props = {
  index: number;
}

function RubikCubeSolver(props: Props) {
  const { index } = props;

  const name = "Rubik Cube Solver";
  const formattedName = "rubik-cube-solver";
  const header = "A desktop app for solving Rubik's cube";
  const description = "Contains an implementation of Thistlethwaite's algorithm, which solves Rubik's cube in at most 45 moves.";
  const technologyChips = [
    <CSharpChip key="csharp" />,
    <WPFChip key="wpf" />
  ];
  const links = [
    <GithubLink key="rubik-cube-solver" displayName="Rubik Cube Solver" navigationName="RubikCubeSolverApp" />
  ];
  const assets = ["1.png", "2.png", "3.png"];

  return (
    <ProjectComponent
      index={index}
      name={name}
      formattedName={formattedName}
      description={description}
      header={header}
      technologyChips={technologyChips}
      assets={assets}
      links={links}
      darkMode
    />
  )
}

export default RubikCubeSolver;