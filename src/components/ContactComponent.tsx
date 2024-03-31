import { FaEnvelope, FaPhone } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";

function ContactComponent() {
  return (
    <div id="contact" className="my-3 p-3 bg-half-black rounded">
      <h2 className="my-3">Contact</h2>
      <div className="vstack gap-3 align-items-center text-nowrap text-truncate">
        <h5><IoDocumentTextOutline /> <a target="_blank" rel="noreferrer" href="cv.pdf">CV</a></h5>
        <h5><FaEnvelope /> Email: <a target="_blank" rel="noreferrer" href="mailto:jakubmichalski01@gmail.com">jakubmichalski01@gmail.com</a></h5>
        <h5><FaPhone /> Phone: +48697786022</h5>
      </div>
    </div>
  );
}

export default ContactComponent;