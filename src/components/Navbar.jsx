import MiddleBar from "./MiddleBar"
import Seperator from "./Seperator"
import "./Navbar.css"
import { useState } from "react";

function Navbar() {
    const [selected, setSelected] = useState('time');
    return (
    <div className = "navbar">
        <li onClick={()=> {setSelected("time")}}>time</li>
        <li onClick={()=> {setSelected("words")}}>words</li>
        <li onClick={()=> {setSelected("custom")}}>custom test</li>

        <Seperator />
        <MiddleBar selected = {selected} />
        <Seperator />

        <li>Leaderboard</li>
        <li>User Info / Log In</li>

    </div>
)
}

export default Navbar;