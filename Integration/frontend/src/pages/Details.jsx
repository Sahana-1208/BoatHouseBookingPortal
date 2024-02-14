import img from "../assets/images/boat1.jpg";
import "../assets/css/details.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
function Details(){
    const user=useSelector((state)=>state.user);
    const query=new URLSearchParams(location.search);
    const x=query.get("id");
    const[bookingDetails,setBookingDetails]=useState({
        adults: 0,
        child: 0,
        fromDate: null,
        toDate: null,
        userid: user.id,
        boatid: parseInt(x, 10) || 0
      });
    const handleChangeforbookings=(e)=>{
        const {id,value}=e.target;
        setBookingDetails((prevData)=>({...prevData, [id]:value}));
    }
    const bookBoat=async ()=>{
        try{
            const response = await axios.post('http://localhost:8080/api/bookings',bookingDetails,{
            headers:{
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        });
        console.log("done");
        }
        catch(error){
            console.log(error);
        }
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(bookingDetails);
        bookBoat();
    }
    return(
        <>
        <div className="detailswrapper">
            <div className="detailsimg">
                <div className="imgcontainer">
                    <img src={img} width="100%" height="100%"></img>
                </div>
            </div>
            <div className="bookingcontent">
                <h1 className="dethead">Day Cruise</h1>
                <form className="detform" onSubmit={handleSubmit}>
                    <div className="detattributes">
                        <label for="adults">No.of.adults:</label>
                        <input type="number" id="adults" value={setBookingDetails.adults} onChange={handleChangeforbookings}></input>
                    </div>
                    <div className="detattributes">
                        <label for="child">No.of.childs:</label>
                        <input type="number" id="child" value={setBookingDetails.child} onChange={handleChangeforbookings}></input>
                    </div>
                    <div className="detattributes">
                        <label for="fromDate">From:</label>
                        <input type="date" id="fromDate" value={setBookingDetails.fromDate} onChange={handleChangeforbookings}></input>
                    </div>
                    <div className="detattributes">
                        <label for="toDate">To:</label>
                        <input type="date" id="toDate" value={setBookingDetails.toDate} onChange={handleChangeforbookings}></input>
                    </div>
                    <button type="submit" className="bookingbutton" >Book</button>
                </form>
            </div>
        </div>
        <div className="boatservingdetails">
            <section class="amenities">
        <h2 style={{marginTop:"0"}}>Amenities</h2>
        <ul>
            <li>Spacious rooms with scenic views</li>
            <li>Private deck for each room</li>
            <li>Onboard restaurant and bar</li>
            <li>24/7 room service</li>
            <li>Water sports and activities</li>
        </ul>
    </section>

    <section class="menu">
        <h2>Food Menu</h2>
        <ul>
            <li>Breakfast:
                <ul>
                    <li>Continental Breakfast</li>
                    <li>Full English Breakfast</li>
                </ul>
            </li>
            <li>Lunch:
                <ul>
                    <li>Seafood Platter</li>
                    <li>Grilled Vegetables</li>
                </ul>
            </li>
            <li>Dinner:
                <ul>
                    <li>Steak with Mushroom Sauce</li>
                    <li>Shrimp Scampi</li>
                </ul>
            </li>
        </ul>
    </section>

    <section class="itinerary">
        <h2>Cruise Itinerary</h2>
        <ul>
            <li>Day 1: Departure from Port City</li>
            <li>Day 2: Island Excursion and Water Activities</li>
            <li>Day 3: Coastal Tour with Sunset Dinner</li>
            <li>Day 4: Return to Port City</li>
        </ul>
    </section>

            </div>
        </>
    )
}
export default Details;