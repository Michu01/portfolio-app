import GithubLink from "../GithubLink";
import ProjectComponent from "./ProjectComponent";
import AspDotNetChip from "../technologyChips/AspDotNetChip";
import CSharpChip from "../technologyChips/CSharpChip";
import EntityFrameworkChip from "../technologyChips/EntityFrameworkChip";
import ReactChip from "../technologyChips/ReactChip";
import SqlServerChip from "../technologyChips/SqlServerChip";
import TypeScriptChip from "../technologyChips/TypeScriptChip";

type Props = {
  index: number;
}

function QuizApp(props: Props) {
  const { index } = props;

  const name = "Quizz";
  const formattedName = "quiz-app";
  const header = "A web app for creating and solving quizes";
  const description =
    "User can search quizes by name, categories and creator. " +
    "They can solve quizes and see how many points did they score. " +
    "User can create quizes, add, modify and remove questions. " +
    "App includes user authentication and authorization.";
  const technologyChips = [
    <CSharpChip key="csharp" />,
    <ReactChip key="react" />,
    <TypeScriptChip key="typescript" />,
    <AspDotNetChip key="asp-net" />,
    <EntityFrameworkChip key="entity-framework" />,
    <SqlServerChip key="sql-server" />
  ];
  const links = [
    <GithubLink key="quiz-api" displayName="Quiz Api" navigationName="quizApi" />,
    <GithubLink key="quiz-client" displayName="Quiz Client" navigationName="quiz-client" />
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
    />
  )
}

export default QuizApp;