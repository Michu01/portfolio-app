function QuizApp() {
  return (
    <div className="row p-3 bg-half-black">
      <div className="col-4">
        <h3 className="my-2">Quizz</h3>
        <h5>A web app for creating and solving quizes.</h5>
        <h5>Stack: C#, ASP.NET, SQL Server, Entity Framework, TypeScript, React</h5>
        <h5>Github: <a target="_blank" rel="noreferrer" href="https://github.com/Michu01/QuizApi">Api</a> <a target="_blank" rel="noreferrer" href="https://github.com/Michu01/quiz-client">Client</a></h5>
      </div>
      <div className="col-8">
        <div id="quizAppCarousel" className="carousel slide carousel-fade">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#quizAppCarousel" data-bs-slide-to="0" className="active"></button>
            <button type="button" data-bs-target="#quizAppCarousel" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#quizAppCarousel" data-bs-slide-to="2"></button>
            <button type="button" data-bs-target="#quizAppCarousel" data-bs-slide-to="3"></button>
            <button type="button" data-bs-target="#quizAppCarousel" data-bs-slide-to="4"></button>
          </div>
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
          <button className="carousel-control-prev" type="button" data-bs-target="#quizAppCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#quizAppCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuizApp;