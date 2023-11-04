function Fractals() {
  return (
    <div className="row p-3 bg-half-black">
      <div className="col-8">
        <div id="fractalsCarousel" className="carousel slide carousel-fade">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#fractalsCarousel" data-bs-slide-to="0" className="active"></button>
            <button type="button" data-bs-target="#fractalsCarousel" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#fractalsCarousel" data-bs-slide-to="2"></button>
            <button type="button" data-bs-target="#fractalsCarousel" data-bs-slide-to="3"></button>
            <button type="button" data-bs-target="#fractalsCarousel" data-bs-slide-to="4"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src="images/fractals/1.png" alt="First slide"/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="images/fractals/2.png" alt="Second slide"/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="images/fractals/3.png" alt="Third slide"/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="images/fractals/4.png" alt="Fourth slide"/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="images/fractals/5.png" alt="Fifth slide"/>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#fractalsCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#fractalsCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="col-4">
        <h3 className="my-2">Fractals</h3>
        <h5>A desktop app that renders Mandelbrot and Julia sets in real time.</h5>
        <h5>Stack: C++, SFML</h5>
        <h5>Github: <a target="_blank" rel="noreferrer" href="https://github.com/Michu01/fractals">Link</a></h5>
      </div>
    </div>
  );
}

export default Fractals;