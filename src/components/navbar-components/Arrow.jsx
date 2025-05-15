import { FaLongArrowAltRight } from "react-icons/fa";
import "./Arrow.css"
import { useEffect, useState } from "react";

function Arrow() {
    const [hovered, setHovered] = useState(false);
    // useEffect(() => {
    //     console.log(`hover set to ${hovered}`);
    // }, [hovered]);
    return <div className={!hovered ? "arrow" : ""}> <FaLongArrowAltRight /></div>
}

export default Arrow;