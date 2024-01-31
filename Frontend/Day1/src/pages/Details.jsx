import img from "../assets/images/boat1.jpg";
import "../assets/css/details.css";
function Details(){
    return(
        <div className="detailswrapper">
            <div className="detailsimg">
                <div className="imgcontainer">
                    <img src={img} width="100%" height="100%"></img>
                </div>
            </div>
            <div className="bookingcontent">
                <h1 className="dethead">Day Cruise</h1>
                <form className="detform">
                    <div className="detattributes">
                        <label>No.of.people:</label>
                        <input type="number"></input>
                    </div>
                    <div className="detattributes">
                        <label>Amount:</label>
                        <input type="number"></input>
                    </div>
                    <div className="detattributes">
                        <label>No.of.Days:</label>
                        <input type="number"></input>
                    </div>
                    <div className="detattributes">
                        <label>From:</label>
                        <input type="date"></input>
                    </div>
                    <div className="detattributes">
                        <label>To:</label>
                        <input type="date"></input>
                    </div>
                    <button type="submit" className="bookingbutton">Book</button>
                </form>
            </div>
        </div>
    )
}
export default Details;