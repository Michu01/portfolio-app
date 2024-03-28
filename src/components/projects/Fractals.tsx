import GithubLink from "../GithubLink";
import CppChip from "../technologyChips/CppChip";
import SfmlChip from "../technologyChips/SfmlChip";
import ProjectComponent from "./ProjectComponent";

type Props = {
  index: number;
}

function Fractals(props: Props) {
  const { index } = props;

  const name = "Fractals";
  const formattedName = "fractals";
  const header = "A desktop app that renders Mandelbrot and Julia sets in real time";
  const description = 
    "User can move, zoom in/out and rotate fractal. " +
    "They can switch between Mandelbrot and Julia sets. " + 
    "The app includes many different color themes, allowing user to appreciate the intricate look of fractals. " + 
    "The fractals are rendered on CPU using multithreading, providing smooth rendering."
  const technologyChips = [
    <CppChip key="cpp" />,
    <SfmlChip key="sfml" />
  ];
  const links = [
    <GithubLink key="fractals" displayName="Fractals" navigationName="fractals" />
  ];
  const assets = ["1.png", "2.png", "3.png", "4.png", "5.png"];

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

export default Fractals;