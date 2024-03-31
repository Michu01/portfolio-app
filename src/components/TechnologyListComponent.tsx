import TechnologyComponent from "./TechnologyComponent";

const technologiesWithLogos = [
  { name: "HTML5", src: "html" },
  { name: "CSS3", src: "css" },
  { name: "Sass", src: "sass" },
  { name: "Bootstrap", src: "bootstrap" },
  { name: "JavaScript", src: "javascript" },
  { name: "TypeScript", src: "typescript" },
  { name: "React", src: "react" },
  { name: "GraphQL", src: "graphql" },
  { name: "C#", src: "csharp" },
  { name: ".NET", src: "dotnet" },
  { name: "xUnit", src: "xunit" },
  { name: "SQL", src: "sql" },
  { name: "MS SQL Server", src: "ms-sql-server" },
  { name: "C", src: "c" },
  { name: "C++", src: "cpp" },
  { name: "RabbitMQ", src: "rabbitmq" },
  { name: "Arduino", src: "arduino" },
  { name: "Azure DevOps", src: "azure-devops" },
  { name: "GIT", src: "git" },
  { name: "JQuery", src: "jquery" }
];

const technologies = [
  "ASP.NET", "Entity Framework", "WPF", "MVC", "MVVM", "REST API"
];

function TechnologyListComponent() {
  return (
    <div id="technologies" className="p-3 bg-half-black rounded">
      <div className="row mb-3">
        <h2>Technologies I use</h2>
      </div>
      <div className="row mb-3">
        <div className="d-flex flex-row flex-wrap justify-content-center">
          { technologiesWithLogos.map(e => <TechnologyComponent key={e.name} name={e.name} src={e.src}/>) }
        </div>
      </div>
      <div className="row">
        <div className="hstack flex-wrap justify-content-center gap-4">
          { technologies.map(e => <h5 key={e} className="user-select-none zoom-s">{e}</h5>) }
        </div>
      </div>
    </div>
  );
}

export default TechnologyListComponent;