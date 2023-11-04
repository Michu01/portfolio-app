function TechnologyComponent(props: { name: string, src: string }) {
  const { name, src } = props;

  return (
    <div style={{ width: "14em" }} className="vstack gap-1 align-items-center">
      <img height={100} src={src} alt={name} referrerPolicy="no-referrer"/>
      <h5>{name}</h5>
    </div>
  );
}

export default TechnologyComponent;