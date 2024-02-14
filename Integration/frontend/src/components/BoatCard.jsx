import { Link } from "react-router-dom";
import "../assets/css/BoatCard.css";
import img from '../assets/images/boat2.jpg';
function BoatCard({boat}){
    return(
        <div className="cardwrapper">
            <div className="boatimage">
                <img src={img} height="100%" width="100%"/>
            </div>
            <div className="boatinfo" style={{boxSizing:'border-box'}}>
                <h3 style={{padding:'0',margin:'0'}}>{boat.boatname}</h3>
                <p>price:{boat.price}</p>
            </div>
            <Link to={`/details?id=${boat.boatid}`}><button>Book</button></Link>
        </div>
    )
}
export default BoatCard;