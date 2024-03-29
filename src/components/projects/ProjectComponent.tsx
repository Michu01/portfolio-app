import range from "../../utility/range";

type Props = {
  index: number;
  name: string;
  header: string;
  description?: string;
  formattedName: string;
  assets: string[];
  darkMode?: boolean;
  technologyChips: JSX.Element[];
  links?: JSX.Element[];
}

function ProjectComponent(props: Props) {
  const { index, name, header, description, formattedName, assets, darkMode, technologyChips, links } = { ...props, darkMode: props.darkMode ?? false };

  function Description() {
    return (
      <div className="col-12 col-xl-4 d-flex flex-column justify-content-center">
        <div className="mb-4">
          <h3>{name}</h3>
          <h5>{header}</h5>
          <p className="mb-0">{description}</p>
        </div>
        <div className="d-flex flex-row flex-wrap gap-2 mb-4">{technologyChips}</div>
        <div className="d-flex flex-row flex-wrap gap-3">{links}</div>
      </div>
    );
  }

  function Display() {
    const carouselId = `${formattedName}-carousel`;
    const mode = darkMode ? "dark" : "light";

    function CarouselIndicator(props: { index: number }) {
      const { index } = props;
      const active = index == 0 ? "active" : "";

      return <button type="button" data-bs-target={"#" + carouselId} data-bs-slide-to={index} className={active} />;
    }

    function CarouselItem(props: { asset: string, index: number }) {
      const { asset, index } = props;

      const active = index == 0 ? " active" : "";
      const isVideo = asset.endsWith(".mp4");
      const src = "projects/" + formattedName + "/" + asset;

      return (
        <div className={"carousel-item" + active}>
          {
            isVideo ?
              <video
                className="d-block w-100"
                src={src}
                onMouseEnter={e => e.currentTarget.play()}
                onMouseLeave={e => e.currentTarget.pause()}
                loop muted
              /> :
              <img style={{ maxHeight: "60vh" }} className="d-block mw-100 mx-auto" src={src} loading="lazy" />
          }
        </div>
      );
    }

    return (
      <div className="col-12 col-xl-8">
        <div id={carouselId} className="carousel slide" data-bs-theme={mode}>
          <div className="carousel-indicators">
            {range(0, assets.length).map(e => <CarouselIndicator key={e} index={e} />)}
          </div>
          <div className="carousel-inner">
            {assets.map((e, i) => <CarouselItem key={e} asset={e} index={i} />)}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target={"#" + carouselId} data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target={"#" + carouselId} data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    );
  }

  const isEven = index % 2 == 0;

  return (
    <div className="row p-3 bg-half-black rounded">
      {isEven ? <Description /> : <Display />}
      {isEven ? <Display /> : <Description />}
    </div>
  );
}

export default ProjectComponent;