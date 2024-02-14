import img from '../assets/images/boat2.jpg';
import '../assets/css/BoatViewCard.css';
function BoatViewCard({booking}){
    return(
        <div className="viewcardwrapper">
            <div className="viewcardimage" >
                <img src={img} height="95%" width="95%" />
            </div>
            <div className='viewcarddetails'>
                <p>From:{booking.fromDate}</p>
                <p>To:{booking.toDate}</p>
                {
                    props.delete?
                    <button>Cancel</button>:<></>
                }
            </div>
        </div>
    )
}
export default BoatViewCard;