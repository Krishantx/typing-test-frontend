import Logo from "./Logo";
import "./Header.css"
function Header() {
    return (
    <div className="header">
    <div className="left-header">
        <Logo src = {"./Logo.png"}/>
        <h1 style={{color : "#A2A7A5" }}>Type Racer</h1>
    </div>
    <div className="right-header">
        <Logo src = {"./trophy.png"}/>
        <Logo src = {"./user.png"}/>
    </div>
    </div>
)
}

export default Header;