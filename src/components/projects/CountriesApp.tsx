function CountriesApp() {
  return (
    <div className="row p-3 bg-half-black">
      <div className="col-8">
        <div id="countriesAppCarousel" className="carousel slide carousel-fade">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#countriesAppCarousel" data-bs-slide-to="0" className="active"></button>
            <button type="button" data-bs-target="#countriesAppCarousel" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#countriesAppCarousel" data-bs-slide-to="2"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src="images/countries-app/1.png" alt="First slide"/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="images/countries-app/2.png" alt="Second slide"/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="images/countries-app/3.png" alt="Third slide"/>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#countriesAppCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#countriesAppCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="col-4">
        <h3 className="my-2">Countries App</h3>
        <h5>A frontend app for querying and displaying country data from an external api.</h5>
        <h5>Stack: React, GraphQL</h5>
        <h5>Github: <a target="_blank" rel="noreferrer" href="https://github.com/Michu01/countries-app">Link</a></h5>
        <h5>Live version: <a target="_blank" rel="noreferrer" href="https://countries-app-michu01.vercel.app/">Link</a></h5>
      </div>
  </div>
  );
}

export default CountriesApp;