function PicsApp() {
  return (
    <div className="row p-3 bg-half-black">
      <div className="col-4">
        <h3 className="my-2">Pics App</h3>
        <h5>A web app for browsing, rating and exploring art inspired by Japanese culture.</h5>
        <span>
          User can search art by artist, tags, creation date and many other criteria. 
          User can favourite and rate pictures, to easily access them later.
          Backend works by scraping image data from imageboards and storing it in database.
          App is based on microservice architecture with two main services: api and data scraper.
        </span>
        <h5>Stack: React, TypeScript, Sass, ASP.NET, SQL Server, Entity Framework, RabbitMQ</h5>
      </div>
      <div className="col-8">
        <div id="picsAppCarousel" className="carousel slide carousel-fade">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#picsAppCarousel" data-bs-slide-to="0" className="active"></button>
            <button type="button" data-bs-target="#picsAppCarousel" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#picsAppCarousel" data-bs-slide-to="2"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src="images/pics-app/1.png" alt="First slide"/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="images/pics-app/2.png" alt="Second slide"/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="images/pics-app/3.png" alt="Third slide"/>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#picsAppCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#picsAppCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}
export default PicsApp;