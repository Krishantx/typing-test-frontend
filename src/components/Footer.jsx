import ResetButton from "./ResetButton";
import "./footer.css";
import ContactInfo from "./ContactInfo";
import Hotkeys from "./Hotkeys";
function Footer() {
    return (
    <div className="center"><div className="footer">
        <ResetButton />
        <Hotkeys />
        <ContactInfo />
    </div>
    </div>)
}

export default Footer;