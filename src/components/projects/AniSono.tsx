// function AniSono() {
//   return (
//     <div className="row p-3 bg-half-black">
//           <div className="col-4">
//             <h3 className="my-2">AniSono</h3>
//             <h5>A web app for guessing anime opening songs</h5>
//             <p>User listens to a song and has to input correct title.</p>
//             <h5>Stack: Node.js, Express.js, JavaScript, EJS, MongoDB</h5>
//             <h5>Github: <a target="_blank" rel="noreferrer" href="https://github.com/Michu01/AniSono">Link</a></h5>
//           </div>


import GithubLink from "../GithubLink";
import EJSChip from "../technologyChips/EJSChip";
import ExpressJsChip from "../technologyChips/ExpressJsChip";
import JavaScriptChip from "../technologyChips/JavaScriptChip";
import MongoDBChip from "../technologyChips/MongoDBChip";
import NodeJsChip from "../technologyChips/NodeJsChip";
import ProjectComponent from "./ProjectComponent";

type Props = {
  index: number;
}

function AniSono(props: Props) {
  const { index } = props;

  const name = "AniSono";
  const formattedName = "anisono";
  const header = "A web app for guessing anime opening songs";
  const description = "User listens to a song and has to guess anime title. ";
  const technologyChips = [
    <NodeJsChip key="node-js" />,
    <ExpressJsChip key="express-js" />,
    <JavaScriptChip key="javascript" />,
    <EJSChip key="ejs"/>,
    <MongoDBChip key="mongo-db" />
  ];
  const links = [
    <GithubLink key="anisono" displayName="AniSono" navigationName="anisono" />
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

export default AniSono;