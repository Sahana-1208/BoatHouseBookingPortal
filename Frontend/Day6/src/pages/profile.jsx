import { Link } from 'react-router-dom';
import '../assets/css/profile.css';
import img from "../assets/images/profile.png";
import ViewBookings from '../components/ViewBookings';
// import ViewProfile from '../components/ViewProfile';
function Profile(props){
    return(
        <div className="profilewrapper">
            <div className="profilesidebar">
                <div className='prologo'><img src={img} width="100%" height="100%"/></div>
                <Link to="/dashboard/profile" style={{textDecoration:"none",color:"black"}}><div className="profileoptions">Profile</div></Link>
                <Link to="/dashboard/view-bookings"  style={{textDecoration:"none",color:"black"}}><div className="profileoptions">View Bookings</div></Link>
                <Link to="/dashboard/delete-booking"  style={{textDecoration:"none",color:"black"}}><div className="profileoptions">Cancel Bookings</div></Link>
                <div className="profileoptions">Logout</div>
            </div>
            <div className="profilecontent">
                {props.rightContent}
            </div>
        </div>
    )
}
export default Profile;