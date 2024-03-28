import GithubLink from "../GithubLink";
import ArduinoChip from "../technologyChips/ArduinoChip";
import CSharpChip from "../technologyChips/CSharpChip";
import WPFChip from "../technologyChips/WPFChip";
import ProjectComponent from "./ProjectComponent";

type Props = {
  index: number;
}

function RobotArm(props: Props) {
  const { index } = props;

  const name = "Robot Arm with GUI";
  const formattedName = "robot-arm-app";
  const header = "A desktop GUI for arduino robot arm";
  const description = "Together with university science club \"Koło wzajemnej kompilacji\" we built a robotic arm \"Braccio TinkerKit\" based on arduino microcontroller. " +
    "I wrote a program that allows communication with robot, storing procedures of move sequences and steering robot with PS4 controller.";
  const technologyChips = [
    <CSharpChip key="csharp" />,
    <ArduinoChip key="arduino" />,
    <WPFChip key="wpf" />
  ];
  const links = [
    <GithubLink key="robot-arm" displayName="Robot Arm App" navigationName="RobotArmApp" />
  ];
  const assets = ["1.png", "2.png", "3.png", "4.png", "5.png"];

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

export default RobotArm;