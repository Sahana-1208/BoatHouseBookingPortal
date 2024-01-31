import img from '../assets/images/boat2.jpg';
import '../assets/css/BoatViewCard.css';
function BoatViewCard(props){
    return(
        <div className="viewcardwrapper">
            <div className="viewcardimage" >
                <img src={img} height="95%" width="95%" />
            </div>
            <div className='viewcarddetails'>
                <p>From:15/02/2024</p>
                <p>To:17/02/2024</p>
                {
                    props.delete?
                    <button>Cancel</button>:<></>
                }
            </div>
        </div>
    )
}
export default BoatViewCard;