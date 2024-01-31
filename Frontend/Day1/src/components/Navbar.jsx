import { Link } from "react-router-dom";
import "../assets/css/Navbar.css";
function Navbar(props){
    return(
        <nav class="nav">
            <h1 className="navlogo">BoatVoyager</h1>
            <div className="wrapper">
                <Link to="/" className="navlink"><div className="navpages">Home</div></Link>
                <Link to="/about" className="navlink"><div className="navpages">Aboutus</div></Link>
                <Link to="/contactus" className="navlink"><div className="navpages">Contactus</div></Link>
                <Link to="/houseboat" className="navlink"><div className="navpages">HouseBoats</div></Link>
            </div>
            {
                props.log?
                <Link to="/dashboard/profile" className="navlink"><button className="navlogin">Profile</button></Link>:
                <Link to="/login" className="navlink"><button className="navlogin">Login</button></Link>
            }
        </nav>
    )
}
export default Navbar;