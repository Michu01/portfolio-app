import AboutComponent from "./AboutComponent";
import ContactComponent from "./ContactComponent";
import ProjectListComponent from "./ProjectListComponent";
import TechnologyListComponent from "./TechnologyListComponent";

function Home(props: { className?: string }) {
  const { className } = props;

  return (
    <div className={`container ${className}`}>
      <div className="row mb-5 p-3">
        <AboutComponent/>
      </div>
      <div className="row mb-5 p-3">
        <TechnologyListComponent/>
      </div>
      <div className="row mb-5 p-3">
        <ProjectListComponent/>
      </div>
      <div className="row p-3">
        <ContactComponent/>
      </div>
    </div>
  );
}

export default Home;