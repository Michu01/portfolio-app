function ContactComponent() {
  return (
    <div id="contact" className="my-3 p-3 bg-half-black">
      <h2 className="my-3">Contact</h2>
      <div className="vstack gap-3 align-items-center">
        <h4>CV: <a target="_blank" rel="noreferrer" href="documents/cv-polish.pdf">Polish</a> <a target="_blank" rel="noreferrer" href="documents/cv-english.pdf">English</a></h4>
        <h4>Email: <a target="_blank" rel="noreferrer" href="mailto:jakubmichalski01@gmail.com">jakubmichalski01@gmail.com</a></h4>
        <h4>Phone: +48697786022</h4>
      </div>
    </div>
  );
}

export default ContactComponent;