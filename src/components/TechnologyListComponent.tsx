import TechnologyComponent from "./TechnologyComponent";

function TechnologyListComponent() {
  const technologiesWithLogos = [
    { name: "HTML5", src: "https://symbols.getvecta.com/stencil_25/37_html5.d4d8050235.svg" },
    { name: "CSS3", src: "https://symbols.getvecta.com/stencil_25/14_css3.d930bfb832.svg" },
    { name: "Sass", src: "https://sass-lang.com/assets/img/styleguide/seal-color.png" },
    { name: "Bootstrap", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png" },
    { name: "JavaScript", src: "https://symbols.getvecta.com/stencil_25/41_javascript.0ca26ec4ab.svg" },
    { name: "TypeScript", src: "https://symbols.getvecta.com/stencil_25/87_typescript.cb2d7326fa.svg" },
    { name: "React", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" },
    { name: "GraphQL", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/2048px-GraphQL_Logo.svg.png" },
    { name: "C#", src: "https://static-00.iconduck.com/assets.00/c-sharp-c-icon-456x512-9sej0lrz.png" },
    { name: ".NET", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Microsoft_.NET_logo.svg/1200px-Microsoft_.NET_logo.svg.png" },
    { name: "xUnit", src: "https://avatars.githubusercontent.com/u/2092016?s=280&v=4" },
    { name: "SQL", src: "https://symbols.getvecta.com/stencil_28/61_sql-database-generic.90b41636a8.svg" },
    { name: "SQL Server", src: "https://cdn-icons-png.flaticon.com/512/5968/5968364.png" },
    { name: "C", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/926px-C_Programming_Language.svg.png" },
    { name: "C++", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png" },
    { name: "RabbitMQ", src: "https://cdn.freebiesupply.com/logos/large/2x/rabbitmq-logo-png-transparent.png" },
    { name: "Arduino", src: "https://brandslogos.com/wp-content/uploads/images/arduino-logo-1.png" },
    { name: "Azure DevOps", src: "https://cdn.iconscout.com/icon/free/png-256/free-azure-devops-3628645-3029870.png" },
    { name: "GIT", src: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" },
    { name: "JQuery", src: "https://cdn.worldvectorlogo.com/logos/jquery-4.svg" }
  ];

  const technologies = [
    "ASP.NET", "Entity Framework", "WPF", "MVC", "MVVM", "REST API"
  ];

  return (
    <div id="technologies" className="p-3 bg-half-black">
      <div className="row mb-3">
        <h2>Technologies I use</h2>
      </div>
      <div className="row mb-3">
        <div className="hstack flex-wrap justify-content-center gap-3">
          { technologiesWithLogos.map(e => <TechnologyComponent key={e.name} name={e.name} src={e.src}/>) }
        </div>
      </div>
      <div className="row">
        <div className="hstack flex-wrap justify-content-center gap-3">
          { technologies.map(e => <h5 key={e}>{e}</h5>) }
        </div>
      </div>
    </div>
  );
}

export default TechnologyListComponent;