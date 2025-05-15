import MiddleBar from "./MiddleBar"
import Seperator from "./Seperator"
import { FaLongArrowAltRight } from "react-icons/fa";
import "./Navbar.css"
import Arrow from "./navbar-components/Arrow";
import { useState } from "react";

function Navbar() {
    const [selected, setSelected] = useState('time');

    function showTime() {

    }

    function showWords() {

    }

    function showCustom() {
        
    }

    return (
        <div className="parent">
    <div className = "navbar">
        <li onMouseEnter={showTime}><Arrow /> time</li>
        <li onMouseEnter={showWords}>words</li>
        <li onMouseEnter={showCustom}>custom test</li>

        <li>Leaderboard</li>

    </div>
    </div>
)
}

export default Navbar;