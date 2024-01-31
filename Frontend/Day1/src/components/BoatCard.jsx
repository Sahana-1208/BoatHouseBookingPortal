import { Link } from "react-router-dom";
import "../assets/css/BoatCard.css";
import img from '../assets/images/boat2.jpg';
function BoatCard(){
    return(
        <div className="cardwrapper">
            <div className="boatimage">
                <img src={img} height="100%" width="100%"/>
            </div>
            <div className="boatinfo">
                <h3>Day cruise</h3>
            </div>
            <Link to="/details"><button>Book</button></Link>
        </div>
    )
}
export default BoatCard;