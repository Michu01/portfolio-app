function LiveVersionLink({ href }: { href: string }) {
  return (
    <a key="live-version" className="btn btn-light fs-5" href={href}>
      <img className="me-2 mb-1" height={24} src="/logos/vercel.svg" />Live Version
    </a>
  );
}

export default LiveVersionLink;