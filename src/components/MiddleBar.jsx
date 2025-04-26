function MiddleBar(props) {
    if (props.selected === 'time') {
        return (
            <>
            <li>30</li>
            <li>45</li>
            <li>60</li>
            <li>90</li>
            <li>120</li>
            </>
        )
    }
    if (props.selected === 'words') {
        return (
            <>
            <li>10</li>
            <li>25</li>
            <li>50</li>
            <li>100</li>
            <li>120</li>
            </>
        )
    }
    if (props.selected === 'custom') {
        return (
            <>
            <li>edit</li>
            </>
        )
    }
}

export default MiddleBar;