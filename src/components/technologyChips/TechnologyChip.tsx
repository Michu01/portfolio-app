type Props = {
  iconUrl?: string;
  name?: string;
  color?: string;
}

function TechnologyChip(props: Props) {
  const { iconUrl, name, color } = props;

  return (
    <span className="d-inline-block rounded-pill px-3 py-1 bg-white zoom-s user-select-none" style={{ color }}>
      {iconUrl && <img className="me-1" height={30} src={iconUrl} referrerPolicy="no-referrer" />}
      {name && <span className="d-inline-block py-1 fs-6 fw-semibold">{name}</span>}
    </span>
  );
}

export default TechnologyChip;