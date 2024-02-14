import { useEffect, useState } from "react";
import "../assets/css/HouseBoat.css";
import BoatCard from "../components/BoatCard";
import { Link } from "react-router-dom";
import axios from "axios";
function HouseBoat(){
    const [sidebarHide,togglesidebar]=useState(false);
    const [boats, setBoats]=useState([]);
    const handleSidebar=()=>{
        togglesidebar(!sidebarHide);
    }
    useEffect(()=>{
        const fetchBoatData= async ()=>{
            const response=await axios.get('http://localhost:8080/api/boats');
            const {data}=response;
            setBoats(data);
        }
        fetchBoatData();
    },[]);
    return(
        <>
        <div className="housesidebar" style={{right:(sidebarHide)?"0%":"25%",width:(sidebarHide)?"20%":"0%"}}>
            <button className="hcloseside" onClick={handleSidebar}>Close &times;</button>
                <Link to="/"><div className="hsideoptions">Home</div></Link>
                <div className="hsideoptions">Aboutus</div>
                <div className="hsideoptions">Contactus</div>
                <div className="hsideoptions">Sort</div>
            </div>
        <div className="housewrapper" style={{width:(sidebarHide)?"80%":"100%"}}> 
            <div className="housenavbar"style={{display:(sidebarHide)?"none":"inline-block"}}>
                <button className="housenavbutton" onClick={handleSidebar}>&#9776;</button>
            </div>
            <div className="househead" style={{height:(sidebarHide)?"8vh":"6vh"}}>
                <h1 className="househeadh1">House Boats</h1>
            </div>
            <div className="housecardswrapper">
            {boats.map((boat,index)=>
                <BoatCard key={index} boat={boat}/>
            )}
            </div>
        </div>
        </>
    )
}
export default HouseBoat;