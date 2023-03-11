import Navbar from "./components/Navbar";
import "./index.css";

function App() {
  return (
    <div id="main" className="h-100 d-flex flex-column flex-grow-1">
      <Navbar/>
      <div className="container">
        <div id="home" className="d-flex flex-column my-3 p-3 bg-half-black">
          <h1 className="my-2">Hello! My name is Kuba</h1>
          <h3 className="my-2">I am an aspiring software developer.</h3>
          <h5 className="my-2">I have created multiple projects in various programming languages and technologies.</h5>
          <h5 className="my-2">If you are interested in seeing source code of my projects, visit my <a target="_blank" rel="noreferrer" href="https://github.com/Michu01">github account</a>.</h5>
          <h5 className="my-2">One of my hobbies is solving algorithmic problems. Here's my <a target="_blank" rel="noreferrer" href="https://www.codewars.com/users/Michu01">codewars profile</a>.</h5>
        </div>
        <br></br>
        <div id="technologies" className="my-3 p-3 bg-half-black">
          <h2 className="my-3">Technologies I use</h2>
          <div className="d-flex flex-row flex-wrap my-3">
            <div className="col">
              <div className="d-flex flex-column align-items-center my-3">
                <img className="m-1" height={100} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="React.js"/>
                <h5 className="m-1">React.js</h5>
              </div>
              <div className="d-flex flex-column align-items-center my-3">
                <img className="m-1" height={100} src="https://symbols.getvecta.com/stencil_25/87_typescript.cb2d7326fa.svg" alt="TypeScript"/>
                <h5 className="m-1">TypeScript</h5>
              </div>
              <div className="d-flex flex-column align-items-center my-3">
                <img className="m-1" height={100} src="https://static-00.iconduck.com/assets.00/c-sharp-c-icon-456x512-9sej0lrz.png" alt="C#"/>
                <h5 className="m-1">C#</h5>
              </div>
              <div className="d-flex flex-column align-items-center my-3">
                <img className="m-1" height={100} src="https://avatars.githubusercontent.com/u/2092016?s=280&v=4" alt="xUnit"/>
                <h5 className="m-1">xUnit</h5>
              </div>
            </div>
            <div className="col">
              <div className="d-flex flex-column align-items-center my-3">
                <img className="m-1" height={100} src="https://symbols.getvecta.com/stencil_25/37_html5.d4d8050235.svg" alt="HTML5"/>
                <h5 className="m-1">HTML5</h5>
              </div>
              <div className="d-flex flex-column align-items-center my-3">
                <img className="m-1" height={100} src="https://symbols.getvecta.com/stencil_25/63_nodejs.124d3fe0e1.svg" alt="Node.js"/>
                <h5 className="m-1">Node.js</h5>
              </div>
              <div className="d-flex flex-column align-items-center my-3">
                <img className="m-1" height={100} src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Microsoft_.NET_logo.svg/1200px-Microsoft_.NET_logo.svg.png" alt=".NET"/>
                <h5 className="m-1">.NET</h5>
              </div>
              <div className="d-flex flex-column align-items-center my-3">
                <img className="m-1" height={100} src="https://cdn-icons-png.flaticon.com/512/5968/5968364.png" alt="SQL Server"/>
                <h5 className="m-1">SQL Server</h5>
              </div>
            </div>
            <div className="col">
              <div className="d-flex flex-column align-items-center my-3">
                <img className="m-1" height={100} src="https://symbols.getvecta.com/stencil_25/14_css3.d930bfb832.svg" alt="CSS3"/>
                <h5 className="m-1">CSS3</h5>
              </div>
              <div className="d-flex flex-column align-items-center my-3">
                <img className="m-1" height={100} src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/926px-C_Programming_Language.svg.png" alt="C"/>
                <h5 className="m-1">C</h5>
              </div>
              <div className="d-flex flex-column align-items-center my-3">
                <img className="m-1" height={100} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png" alt="Bootstrap"/>
                <h5 className="m-1">Bootstrap</h5>
              </div>
              <div className="d-flex flex-column align-items-center my-3">
                <img className="m-1" height={100} src="https://symbols.getvecta.com/stencil_28/61_sql-database-generic.90b41636a8.svg" alt="SQL"/>
                <h5 className="m-1">SQL</h5>
              </div>
            </div>
            <div className="col">
              <div className="d-flex flex-column align-items-center my-3">
                <img className="m-1" height={100} src="https://symbols.getvecta.com/stencil_25/41_javascript.0ca26ec4ab.svg" alt="JavaScript"/>
                <h5 className="m-1">JavaScript</h5>
              </div>
              <div className="d-flex flex-column align-items-center my-3">
                <img className="m-1" height={100} src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png" alt="C++"/>
                <h5 className="m-1">C++</h5>
              </div>
              <div className="d-flex flex-column align-items-center my-3">
                <img className="m-1" height={100} src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="GIT"/>
                <h5 className="m-1">GIT</h5>
              </div>
              <div className="d-flex flex-column align-items-center my-3">
                <img className="m-1" height={100} src="images/arduino-logo.svg" alt="Arduino"/>
                <h5 className="m-1">Arduino</h5>
              </div>
            </div>
          </div>
          <div className="d-flex flex-row flex-wrap my-3 justify-content-center">
            <h5 className="m-3">ASP.NET</h5>
            <h5 className="m-3">Entity Framework</h5>
            <h5 className="m-3">WPF</h5>
            <h5 className="m-3">MVC</h5>
            <h5 className="m-3">MVVM</h5>
            <h5 className="m-3">REST API</h5>
          </div>
        </div>
        <br></br>
        <div id="projects" className="my-3">
          <h2 className="my-3 p-3 bg-half-black">My projects</h2>
          <div className="d-flex flex-column">
            <div className="d-flex flex-row my-5 p-3 bg-half-black">
              <div className="col-4">
                <h3 className="my-2">Quizz</h3>
                <h5>A web app for creating and solving quizes.</h5>
                <h5>Stack: C#, ASP.NET, SQL Server, Entity Framework, TypeScript, React</h5>
                <h5>Github: <a target="_blank" rel="noreferrer" href="https://github.com/Michu01/QuizApi">Api</a> <a target="_blank" rel="noreferrer" href="https://github.com/Michu01/quiz-client">Client</a></h5>
              </div>
              <div className="col-8">
                <div id="quizAppCarousel" className="carousel slide" data-ride="carousel">
                  <ol className="carousel-indicators">
                    <li data-target="#quizAppCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#quizAppCarousel" data-slide-to="1"></li>
                    <li data-target="#quizAppCarousel" data-slide-to="2"></li>
                    <li data-target="#quizAppCarousel" data-slide-to="3"></li>
                    <li data-target="#quizAppCarousel" data-slide-to="4"></li>
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img className="d-block w-100" src="images/quiz-app/1.png" alt="First slide"/>
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src="images/quiz-app/2.png" alt="Second slide"/>
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src="images/quiz-app/3.png" alt="Third slide"/>
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src="images/quiz-app/4.png" alt="Fourth slide"/>
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src="images/quiz-app/5.png" alt="Fourth slide"/>
                    </div>
                  </div>
                  <a className="carousel-control-prev" href="#quizAppCarousel" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#quizAppCarousel" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
            <br></br>
            <div className="d-flex flex-row my-5 p-3 bg-half-black">
              <div className="col-8">
                <div id="rubikCubeSolverCarousel" className="carousel slide" data-ride="carousel">
                  <ol className="carousel-indicators">
                    <li data-target="#rubikCubeSolverCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#rubikCubeSolverCarousel" data-slide-to="1"></li>
                    <li data-target="#rubikCubeSolverCarousel" data-slide-to="2"></li>
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img className="d-block w-100" src="images/rubik-cube-solver/1.png" alt="First slide"/>
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src="images/rubik-cube-solver/2.png" alt="Second slide"/>
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src="images/rubik-cube-solver/3.png" alt="Third slide"/>
                    </div>
                  </div>
                  <a className="carousel-control-prev" href="#rubikCubeSolverCarousel" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#rubikCubeSolverCarousel" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
              <div className="col-4">
                <h3 className="my-2">Rubik Cube Solver</h3>
                <h5>A desktop app for solving Rubik's cube</h5>
                <p>Contains an implementation of Thistlethwaite's algorithm, which solves Rubik's cube in at most 45 moves.</p>
                <h5>Stack: C#, WPF</h5>
                <h5>Github: <a target="_blank" rel="noreferrer" href="https://github.com/Michu01/RubikCubeSolverApp">Link</a></h5>
              </div>
            </div>
            <br></br>
            <div className="d-flex flex-row my-5 p-3 bg-half-black">
              <div className="col-4">
                <h3 className="my-2">Robot Arm GUI</h3>
                <h5>A desktop GUI for arduino robot arm</h5>
                <p>Together with my university science club "Koło wzajemnej kompilacji" we have built a robotic arm "Braccio TinkerKit" based on arduino microcontroller.
                   I've written a software that allows communication with robot, storing procedures of move sequences and steering robot with PS4 controller.
                </p>
                <h5>Stack: C#, WPF, Arduino</h5>
                <h5>Github: <a target="_blank" rel="noreferrer" href="https://github.com/Michu01/RobotArmApp">Link</a></h5>
              </div>
              <div className="col-8">
                <div id="robotArmCarousel" className="carousel slide" data-ride="carousel">
                  <ol className="carousel-indicators">
                    <li data-target="#robotArmCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#robotArmCarousel" data-slide-to="1"></li>
                    <li data-target="#robotArmCarousel" data-slide-to="2"></li>
                    <li data-target="#robotArmCarousel" data-slide-to="3"></li>
                    <li data-target="#robotArmCarousel" data-slide-to="4"></li>
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img className="d-block w-100" src="images/robot-arm-app/1.png" alt="First slide"/>
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src="images/robot-arm-app/2.png" alt="Second slide"/>
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src="images/robot-arm-app/3.png" alt="Third slide"/>
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src="images/robot-arm-app/4.png" alt="Fourth slide"/>
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src="images/robot-arm-app/5.png" alt="Fifth slide"/>
                    </div>
                  </div>
                  <a className="carousel-control-prev" href="#robotArmCarousel" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#robotArmCarousel" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
            <br></br>
            <div className="d-flex flex-row my-5 p-3 bg-half-black">
              <div className="col-8">
                <div id="wordleCloneCarousel" className="carousel slide" data-ride="carousel">
                  <ol className="carousel-indicators">
                    <li data-target="#wordleCloneCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#wordleCloneCarousel" data-slide-to="1"></li>
                    <li data-target="#wordleCloneCarousel" data-slide-to="2"></li>
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img className="d-block w-100" src="images/wordle-clone/1.png" alt="First slide"/>
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src="images/wordle-clone/2.png" alt="Second slide"/>
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src="images/wordle-clone/3.png" alt="Third slide"/>
                    </div>
                  </div>
                  <a className="carousel-control-prev" href="#wordleCloneCarousel" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#wordleCloneCarousel" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
              <div className="col-4">
                <h3 className="my-2">Wordle Clone</h3>
                <h5>A clone of recently popular game "Wordle"</h5>
                <p>The game's objective is to guess the word. The app communicates with DictionaryAPI, asking for random word of given length.</p>
                <h5>Stack: C#, ASP.NET, HTML, JavaScript</h5>
                <h5>Github: <a target="_blank" rel="noreferrer" href="https://github.com/Michu01/wordleclone">WordleClone</a> <a target="_blank" rel="noreferrer" href="https://github.com/Michu01/DictionaryAPI">DictionaryAPI</a></h5>
              </div>
            </div>
            <br></br>
            <div className="d-flex flex-row my-5 p-3 bg-half-black">
              <div className="col-4">
                <h3 className="my-2">AniSono</h3>
                <h5>A web app for guessing anime opening songs</h5>
                <p>User listens to a song and has to input correct title.</p>
                <h5>Stack: Node.js, Express.js, JavaScript, EJS, MongoDB</h5>
                <h5>Github: <a target="_blank" rel="noreferrer" href="https://github.com/Michu01/AniSono">Link</a></h5>
              </div>
              <div className="col-8">
                <div id="aniSonoCarousel" className="carousel slide" data-ride="carousel">
                  <ol className="carousel-indicators">
                    <li data-target="#aniSonoCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#aniSonoCarousel" data-slide-to="1"></li>
                    <li data-target="#aniSonoCarousel" data-slide-to="2"></li>
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img className="d-block w-100" src="images/anisono/1.png" alt="First slide"/>
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src="images/anisono/2.png" alt="Second slide"/>
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src="images/anisono/3.png" alt="Third slide"/>
                    </div>
                  </div>
                  <a className="carousel-control-prev" href="#aniSonoCarousel" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#aniSonoCarousel" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
            <br></br>
            <div className="d-flex flex-row my-5 p-3 bg-half-black">
              <div className="col-8">
                <div id="fractalsCarousel" className="carousel slide" data-ride="carousel">
                  <ol className="carousel-indicators">
                    <li data-target="#fractalsCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#fractalsCarousel" data-slide-to="1"></li>
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img className="d-block w-100" src="images/fractals/1.png" alt="First slide"/>
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src="images/fractals/2.png" alt="Second slide"/>
                    </div>
                  </div>
                  <a className="carousel-control-prev" href="#fractalsCarousel" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#fractalsCarousel" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
              <div className="col-4">
                <h3 className="my-2">Fractals</h3>
                <h5>A desktop app that renders Mandelbrot set in real time</h5>
                <h5>Stack: C++, SFML</h5>
                <h5>Github: <a target="_blank" rel="noreferrer" href="https://github.com/Michu01/fractals">Link</a></h5>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <div id="contact" className="my-3 p-3 bg-half-black">
          <h2 className="my-3">Contact me</h2>
          <div className="d-flex flex-column align-items-center">
            <h4 className="my-2">CV: <a target="_blank" rel="noreferrer" href="documents/cv-polish.pdf">Polish</a> <a target="_blank" rel="noreferrer" href="documents/cv-english.pdf">English</a></h4>
            <h4 className="my-2">Email: <a target="_blank" rel="noreferrer" href="mailto:jakubmichalski01@gmail.com">jakubmichalski01@gmail.com</a></h4>
            <h4 className="my-2">Phone: +48697786022</h4>
          </div>
        </div>
      </div>
      <footer className="d-flex flex-row justify-content-center m-3">
        <h5>©Jakub Michalski - 2023</h5>
      </footer>
    </div>
  );
}

export default App;
