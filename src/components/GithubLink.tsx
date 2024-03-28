import { FaGithub } from "react-icons/fa6";

type Props = {
  displayName: string; 
  navigationName: string;
}

function GithubLink(props: Props) {
  const { displayName, navigationName } = props;

  return (
    <a className="btn btn-dark fs-5" href={`https://github.com/Michu01/${navigationName}`}>
      <FaGithub size={24} className="me-2 mb-1" />
      {displayName}
    </a>
  )
}

export default GithubLink;