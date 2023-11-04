function Wordle() {
  return (
    <div className="row p-3 bg-half-black">
      <div className="col-8">
        <div id="wordleCloneCarousel" className="carousel slide carousel-fade">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#wordleCloneCarousel" data-bs-slide-to="0" className="active inverted"></button>
            <button type="button" data-bs-target="#wordleCloneCarousel" data-bs-slide-to="1" className="inverted"></button>
            <button type="button" data-bs-target="#wordleCloneCarousel" data-bs-slide-to="2" className="inverted"></button>
          </div>
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
          <button className="carousel-control-prev inverted" type="button" data-bs-target="#wordleCloneCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next inverted" type="button" data-bs-target="#wordleCloneCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
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
  );
}

export default Wordle;