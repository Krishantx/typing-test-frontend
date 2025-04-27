import "./Logo.css"
function Logo(props) {
    return (
        <img className = "logo"  src =  {props.src}/>
    )
}
export default Logo;