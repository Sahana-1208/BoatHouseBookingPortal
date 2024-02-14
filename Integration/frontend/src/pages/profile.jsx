import { Link } from 'react-router-dom';
import '../assets/css/profile.css';
import img from "../assets/images/profile.png";
import { useDispatch } from 'react-redux';
import { setIsLoggedIn, setUser } from '../actions/userActions';
function Profile({rightContent}){
    const dispatch=useDispatch();
    const handleLogout=()=>{
        dispatch(setIsLoggedIn(false));
        dispatch(setUser(null,'',''));
    }
    return(
        <>
        <div className="profilewrapper">
            <div className="profilesidebar">
                <div className='prologo'><img src={img} width="100%" height="100%"/></div>
                <Link to="/dashboard/profile" style={{textDecoration:"none",color:"black"}}><div className="profileoptions">Profile</div></Link>
                <Link to="/dashboard/view-bookings"  style={{textDecoration:"none",color:"black"}}><div className="profileoptions">View Bookings</div></Link>
                <Link to="/dashboard/delete-booking"  style={{textDecoration:"none",color:"black"}}><div className="profileoptions">Cancel Bookings</div></Link>
                <Link to="/" style={{textDecoration:"none",color:"black"}}><div className="profileoptions" onClick={handleLogout}>Logout</div></Link>
            </div>
            <div className="profilecontent">
                {rightContent}
            </div>
        </div>
        </>
    )
}
export default Profile;