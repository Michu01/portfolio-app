function RubikCubeSolver() {
  return (
    <div className="row p-3 bg-half-black">
      <div className="col-8">
        <div id="rubikCubeSolverCarousel" className="carousel slide carousel-fade">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#rubikCubeSolverCarousel" data-bs-slide-to="0" className="active inverted"></button>
            <button type="button" data-bs-target="#rubikCubeSolverCarousel" data-bs-slide-to="1" className="inverted"></button>
            <button type="button" data-bs-target="#rubikCubeSolverCarousel" data-bs-slide-to="2" className="inverted"></button>
          </div>
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
          <button className="carousel-control-prev inverted" type="button" data-bs-target="#rubikCubeSolverCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next inverted" type="button" data-bs-target="#rubikCubeSolverCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
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
  );
}

export default RubikCubeSolver;