import Navbar from "../components/Navbar";
import "../assets/css/Home.css";
import img1 from '../assets/images/boat.png';
import img2 from '../assets/images/booking.png';
import img3 from '../assets/images/routemap.png';
import img4 from '../assets/images/callsupport.png';
function Home(){
    return(
        <>
        <div className="wrapperhome">
            <section className="wrappersection">
                <form className="bookingPanel" >
                    <div className="homepannel">
                        <label>Number of bedrooms:</label>
                        <select id="numberofbedrooms" >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option> 
                            <option value="4">4</option> 
                            <option value="5">5</option> 
                            <option value="6">6</option> 
                            <option value="7">7</option> 
                            <option value="8">8</option> 
                            <option value="All">All</option> 
                        </select>
                    </div>
                    <div className="homepannel">
                        <label>Category:</label>
                        <select id="category" >
                            <option value="Delux">Delux</option>
                            <option value="Premium">Premium</option>
                            <option value="Luxury">Luxury</option> 
                            <option value="UltraLuxury">UltraLuxury</option> 
                            <option value="SpecialCruises">SpecialCruises</option> 
                            <option value="All">All</option> 
                        </select>
                    </div>
                    <div className="homepannel">
                        <label id="date">Date:</label>
                        <input type="date" name="date" id="date" />
                    </div>
                    <div className="homepannel">
                        <button>Submit</button>
                    </div>
                </form>
            </section>
            <hr style={{border:"1px solid gray"}}></hr>
            <section className="features">
                <div className="featurelist">
                    <img src={img1} width="40%" height="50%"/>
                    <h3>200+ houseboats</h3>
                </div>
                <div className="featurelist">
                    <img src={img2} width="40%" height="50%"/>
                    <h3>Exotic routess</h3>
                </div>
                <div className="featurelist">
                    <img src={img3}  width="40%" height="50%"/>
                    <h3>Easy Booking</h3>
                </div>
                <div className="featurelist">
                    <img src={img4}  width="40%" height="50%"/>
                    <h3>Fulltime support</h3>
                </div>
            </section>
            <hr style={{border:"1px solid gray"}}></hr>
        </div>
        </>
    )
}
export default Home;