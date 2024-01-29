function SortingApp() {
  return (
    <div className="row p-3 bg-half-black">
      <div className="col-8">
        <div id="sortingAppCarousel" className="carousel slide carousel-fade">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#sortingAppCarousel" data-bs-slide-to="0" className="active inverted"></button>
            <button type="button" data-bs-target="#sortingAppCarousel" data-bs-slide-to="1" className="inverted"></button>
            <button type="button" data-bs-target="#sortingAppCarousel" data-bs-slide-to="2" className="inverted"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <video className="d-block w-100" src="videos/sorting-app/1.mp4" autoPlay loop muted/>
            </div>
            <div className="carousel-item">
              <video className="d-block w-100" src="videos/sorting-app/2.mp4" autoPlay loop muted/>
            </div>
            <div className="carousel-item">
              <video className="d-block w-100" src="videos/sorting-app/3.mp4" autoPlay loop muted/>
            </div>
          </div>
          <button className="carousel-control-prev inverted" type="button" data-bs-target="#sortingAppCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next inverted" type="button" data-bs-target="#sortingAppCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="col-4">
        <h3 className="my-2">Sorting App</h3>
        <h5>A desktop app for visualizing various sorting algorithms such as merge sort, heap sort, quick sort, etc.</h5>
        <h5>Stack: C++, wxWidgets</h5>
        <h5>Github: <a target="_blank" rel="noreferrer" href="https://github.com/Michu01/SortingApp">Link</a></h5>
      </div>
  </div>
  );
}

export default SortingApp;