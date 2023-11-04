import AboutComponent from "./AboutComponent";
import ContactComponent from "./ContactComponent";
import ProjectListComponent from "./ProjectListComponent";
import TechnologyListComponent from "./TechnologyListComponent";

function Home(props: { className?: string }) {
  const { className } = props;

  return (
    <div className={`container ${className}`}>
      <div className="row mb-5">
        <AboutComponent/>
      </div>
      <div className="row mb-5">
        <TechnologyListComponent/>
      </div>
      <div className="row mb-5">
        <ProjectListComponent/>
      </div>
      <div className="row">
        <ContactComponent/>
      </div>
    </div>
  );
}

export default Home;