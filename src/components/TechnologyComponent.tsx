function TechnologyComponent(props: { name: string, src: string }) {
  const { name, src } = props;

  return (
    <div className="row" style={{ width: "16em", height: "10em" }}>
      <div className="col-auto mx-auto zoom-m user-select-none text-center">
        <img className="mb-1" height={100} src={`/logos/${src}.svg`} alt={name} />
        <h5>{name}</h5>
      </div>
    </div>
  );
}

export default TechnologyComponent;