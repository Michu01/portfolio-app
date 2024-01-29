import AniSono from "./projects/AniSono";
import CountriesApp from "./projects/CountriesApp";
import Fractals from "./projects/Fractals";
import PicsApp from "./projects/PicsApp";
import QuizApp from "./projects/QuizApp";
import RobotArm from "./projects/RobotArm";
import RubikCubeSolver from "./projects/RubikCubeSolver";
import SortingApp from "./projects/SortingApp";
import Wordle from "./projects/Wordle";

function ProjectListComponent() {
  return (
    <div id="projects">
      <div className="row bg-half-black mb-5 p-3">
        <h2 className="mb-0">My projects</h2>
      </div>
      <div className="vstack gap-5">
        <QuizApp/>
        <Fractals/>
        <PicsApp/>
        <CountriesApp/>
        <SortingApp/>
        <AniSono/>
        <RubikCubeSolver/>
        <RobotArm/>
        <Wordle/>
      </div>
    </div>
  );
}

export default ProjectListComponent;