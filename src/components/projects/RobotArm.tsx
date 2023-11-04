function RobotArm() {
  return (
    <div className="row p-3 bg-half-black">
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
        <div id="robotArmCarousel" className="carousel slide carousel-fade">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#robotArmCarousel" data-bs-slide-to="0" className="active inverted"></button>
            <button type="button" data-bs-target="#robotArmCarousel" data-bs-slide-to="1" className="inverted"></button>
            <button type="button" data-bs-target="#robotArmCarousel" data-bs-slide-to="2" className="inverted"></button>
            <button type="button" data-bs-target="#robotArmCarousel" data-bs-slide-to="3" className="inverted"></button>
            <button type="button" data-bs-target="#robotArmCarousel" data-bs-slide-to="4" className="inverted"></button>
          </div>
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
          <button className="carousel-control-prev inverted" type="button" data-bs-target="#robotArmCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next inverted" type="button" data-bs-target="#robotArmCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default RobotArm;