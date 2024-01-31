import '../assets/css/ViewBookings.css';
import BoatViewCard from './BoatViewCard';
function ViewBookings(props){
    return(
        <div className='viewBookingwrapper'>
            <BoatViewCard delete={props.val}/>
            <BoatViewCard delete={props.val}/>
        </div>
    )
}
export default ViewBookings;