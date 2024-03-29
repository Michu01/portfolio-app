import GithubLink from "../GithubLink";
import CSharpChip from "../technologyChips/CSharpChip";
import UnityChip from "../technologyChips/UnityChip";
import ProjectComponent from "./ProjectComponent";

type Props = {
  index: number;
}

function MazeBall(props: Props) {
  const { index } = props;

  const name = "Maze Ball Game";
  const formattedName = "maze-ball";
  const header = "A game which objective is to get the ball to the end of maze";
  const description = 
    "User can rotate the maze with mouse. " +
    "Game has three levels, with different difficulties. " + 
    "Maze is generated procedurally with minimum spanning tree algorithm.";
  const technologyChips = [
    <CSharpChip key="csharp" />,
    <UnityChip key="unity" />
  ];
  const links = [
    <GithubLink key="maze-ball" displayName="Maze Ball Game" navigationName="MazeBall" />
  ];
  const assets = ["1.mp4", "2.png", "3.png"];

  return (
    <ProjectComponent
      index={index}
      name={name}
      formattedName={formattedName}
      header={header}
      description={description}
      technologyChips={technologyChips}
      assets={assets}
      links={links}
    />
  )
}

export default MazeBall;