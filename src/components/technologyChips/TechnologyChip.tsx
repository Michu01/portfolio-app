type Props = {
  iconName?: string;
  name?: string;
  color?: string;
}

function TechnologyChip(props: Props) {
  const { iconName, name, color } = props;

  return (
    <span className="d-inline-block rounded-pill px-3 py-1 bg-white zoom-s user-select-none" style={{ color }}>
      {iconName && <img className="me-1" height={30} src={`/logos/${iconName}.svg`} />}
      {name && <span className="d-inline-block py-1 fs-6 fw-semibold">{name}</span>}
    </span>
  );
}

export default TechnologyChip;