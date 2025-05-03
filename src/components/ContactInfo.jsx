import "./ContactInfo.css";
import { FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { BsDiscord } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

function ContactInfo() {
    return (
        <div className="contact-info">
        <li><FaGithub /></li>
        <li><MdOutlineEmail /></li>
        <li><BsDiscord /></li>
        <li><FaLinkedin /></li>
        </div>
    )
}
export default ContactInfo;