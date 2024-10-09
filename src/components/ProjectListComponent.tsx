import AniSono from "./projects/AniSono";
import CountriesApp from "./projects/CountriesApp";
import Fractals from "./projects/Fractals";
import MazeBall from "./projects/MazeBall";
import Musify from "./projects/Musify";
import OutOfOffice from "./projects/OutOfOffice";
import PicsApp from "./projects/PicsApp";
import QuizApp from "./projects/QuizApp";
import Quotes from "./projects/Quotes";
import RayTracing from "./projects/RayTracing";
import RobotArm from "./projects/RobotArm";
import RubikCubeSolver from "./projects/RubikCubeSolver";
import SortingApp from "./projects/SortingApp";
import Wordle from "./projects/Wordle";

const projects = [
  (index: number) => <OutOfOffice key={index} index={index} />,
  (index: number) => <Quotes key={index} index={index} />,
  (index: number) => <QuizApp key={index} index={index} />,
  (index: number) => <Fractals key={index} index={index} />,
  (index: number) => <PicsApp key={index} index={index} />,
  (index: number) => <CountriesApp key={index} index={index} />,
  (index: number) => <MazeBall key={index} index={index} />,
  (index: number) => <Musify key={index} index={index} />,
  (index: number) => <RayTracing key={index} index={index} />,
  (index: number) => <SortingApp key={index} index={index} />,
  (index: number) => <AniSono key={index} index={index} />,
  (index: number) => <RubikCubeSolver key={index} index={index} />,
  (index: number) => <RobotArm key={index} index={index} />,
  (index: number) => <Wordle key={index} index={index} />,
]

function ProjectListComponent() {
  return (
    <div id="projects">
      <div className="row bg-half-black mb-5 p-3 rounded">
        <h2 className="mb-0">My projects</h2>
      </div>
      <div className="vstack gap-5">
        {projects.map((e, i) => e(i))}
      </div>
    </div>
  );
}

export default ProjectListComponent;