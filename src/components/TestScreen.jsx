import "./TestScreen.css";
function TestScreen() {
    const lorem = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore atque animi debitis ipsam quo? Earum, alias tempora ipsam quam, molestiae, dolor vitae debitis quasi at voluptatum libero expedita ducimus nam."
    return (
        <div className="parent">
        <div className="test-screen">
            <h2>{lorem.toLowerCase() + " " + lorem.toLowerCase()}</h2>

        </div>
        </div>
    )
}

export default TestScreen;