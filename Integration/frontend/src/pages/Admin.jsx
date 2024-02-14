import { useEffect, useState } from 'react';
import '../assets/css/Admin.css';
import img from "../assets/images/profile.png";
// import fin from '../assets/images/find.png';
import SiteSettings from '../components/SiteSettings';
import SearchBar from '../components/Searchbar';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setIsLoggedIn, setUser } from '../actions/userActions';
function Admin(){
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const[edit,setEdit]=useState(false);
    const[addboat,setAddboat]=useState(false);
    const[editboat,setEditboat]=useState(false);
    const[sitesetting,setSitesetting]=useState(false);
    const[boats,setBoats]=useState([]);
    const[putboatid,setPutboatId]=useState(0);
    const user=useSelector((state)=>state.user);
    const handlelogin=(event)=>{
        event.preventDefault();
        dispatch(setIsLoggedIn(false));
        dispatch(setUser(null,'',''));
        navigate('/');
    };
    const [addboatbyadmin,setAddboatByAdmin]=useState({
        boatname: "",
        price: 0,
        childcount: "",
        adultcount: "",
        boattype: "",
        noOfBedRooms: "",
        description: "",
        rating: ""
    });
    const [putboatbyadmin,setputboatByAdmin]=useState({
        boatname: "",
        price: 0,
        childcount: "",
        adultcount: "",
        boattype: "",
        noOfBedRooms: "",
        description: "",
        rating: ""
    });
    const handleChangeforadmin=(e)=>{
        const {id,value}=e.target;
        setAddboatByAdmin((prevData)=>({...prevData, [id]:value}));
    }
    const handleChangeforadminput=(e)=>{
        const {id,value}=e.target;
        setputboatByAdmin((prevData)=>({...prevData, [id]:value}));
    }
    const addBoats = async () => {
        try{
        const response = await axios.post('http://localhost:8080/api/boats',addboatbyadmin,{
            headers:{
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        });
        console.log("done");
        setAddboat(false);
        window.location.reload();
        }
        catch(error){
            console.log(error);
        }
    }
    const putBoats = async () => {
        try{
        const response = await axios.put(`http://localhost:8080/api/boats/${putboatid}`,addboatbyadmin,{
            headers:{
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        });
        console.log("done");
        setEditboat(false);
        window.location.reload();
        }
        catch(error){
            console.log(error);
        }
    }
    const deleteOption = async (boatId) => {
        try {
          const response = await axios.delete(`http://localhost:8080/api/boats/${boatId}`,{
            headers:{
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
          });
          console.log("done");
          window.location.reload();
        } catch (error) {
          console.log(error);
        }
      };
      const handleDelete = (boatId)=>{
        deleteOption(boatId);
      }
      const handleEdit = (boatId)=>{
        setEditboat(true);
        setPutboatId(boatId);
      }
    useEffect(()=>{
        const fetchBoatData= async ()=>{
            const response=await axios.get('http://localhost:8080/api/boats');
            const {data}=response;
            setBoats(data);
            console.log(data);
        }
        fetchBoatData();
    },[]);
    return(
        <>
        {
        edit?
        <div className='admineditprofile'>
            <div className='editproform'>
                <fieldset className='editoptions'>
                    <label>Name</label><br/>
                    <input className='editinputadmin'/>
                </fieldset>
                <fieldset className='editoptions'>
                    <label>PhoneNumber</label><br/>
                    <input className='editinputadmin'/>
                </fieldset>
                <center><button style={{padding:"10px 15px"}} onClick={()=>setEdit(false)}>Update</button></center>
            </div>
        </div>:<></>
        }
        {
            addboat?
            <div className='adminaddboat'>
                <div className='adminboatpage'>
                <button onClick={()=>setAddboat(false)}>x</button>
                <fieldset className='addboateditoptions'>
                    <legend>BoatName</legend>
                    <input className='addboateditinputadmin' id="boatname" value={setAddboatByAdmin.boatname} onChange={handleChangeforadmin}/>
                </fieldset>
                <fieldset className='addboateditoptions'>
                    <legend>Price</legend>
                    <input type='number' className='addboateditinputadmin' id="price" value={setAddboatByAdmin.price} onChange={handleChangeforadmin}/>
                </fieldset>
                <fieldset className='addboateditoptions'>
                    <legend>No of child</legend>
                    <input type="text" className='addboateditinputadmin' id="childcount" value={setAddboatByAdmin.childcount} onChange={handleChangeforadmin}/>
                </fieldset>
                <fieldset className='addboateditoptions'>
                    <legend>No of adults</legend>
                    <input type="text" className='addboateditinputadmin'id="adultcount" value={setAddboatByAdmin.adultcount} onChange={handleChangeforadmin}/>
                </fieldset>
                <fieldset className='addboateditoptions'>
                    <legend>BoatType</legend>
                    <input className='addboateditinputadmin'id="boattype" value={setAddboatByAdmin.boattype} onChange={handleChangeforadmin}/>
                </fieldset>
                <fieldset className='addboateditoptions'>
                    <legend>Rating</legend>
                    <input className='addboateditinputadmin'id="rating" value={setAddboatByAdmin.rating} onChange={handleChangeforadmin}/>
                </fieldset>
                <fieldset className='addboateditoptions'>
                    <legend>No of BedRooms</legend>
                    <textarea className='addboateditinputadmin' id="noOfBedRooms" value={setAddboatByAdmin.noOfBedRooms} onChange={handleChangeforadmin}/><br/>
                
                <center><button style={{padding:"10px 15px",marginTop:"10px"}} onClick={addBoats}>Save changes</button></center>
    
                </fieldset>
                </div>
            </div>:<></>
        }
        {
            editboat?
            <div className='adminaddboat'>
                <div className='adminboatpage'>
                <button onClick={()=>setEditboat(false)}>x</button>
                <fieldset className='addboateditoptions'>
                    <legend>BoatName</legend>
                    <input className='addboateditinputadmin' id="boatname" value={setputboatByAdmin.boatname} onChange={handleChangeforadmin}/>
                </fieldset>
                <fieldset className='addboateditoptions'>
                    <legend>Price</legend>
                    <input type='number' className='addboateditinputadmin' id="price" value={setputboatByAdmin.price} onChange={handleChangeforadmin}/>
                </fieldset>
                <fieldset className='addboateditoptions'>
                    <legend>No of child</legend>
                    <input type="text" className='addboateditinputadmin' id="childcount" value={setputboatByAdmin.childcount} onChange={handleChangeforadmin}/>
                </fieldset>
                <fieldset className='addboateditoptions'>
                    <legend>No of adults</legend>
                    <input type="text" className='addboateditinputadmin'id="adultcount" value={setputboatByAdmin.adultcount} onChange={handleChangeforadmin}/>
                </fieldset>
                <fieldset className='addboateditoptions'>
                    <legend>BoatType</legend>
                    <input className='addboateditinputadmin'id="boattype" value={setputboatByAdmin.boattype} onChange={handleChangeforadmin}/>
                </fieldset>
                <fieldset className='addboateditoptions'>
                    <legend>Rating</legend>
                    <input className='addboateditinputadmin'id="rating" value={setputboatByAdmin.rating} onChange={handleChangeforadmin}/>
                </fieldset>
                <fieldset className='addboateditoptions'>
                    <legend>No of BedRooms</legend>
                    <textarea className='addboateditinputadmin' id="noOfBedRooms" value={setputboatByAdmin.noOfBedRooms} onChange={handleChangeforadmin}/><br/>
                
                <center><button style={{padding:"10px 15px",marginTop:"10px"}} onClick={putBoats}>Save changes</button></center>
    
                </fieldset>
                </div>
            </div>:<></>
        }
        {
            sitesetting?
            <div className='adminaddboat'>
                <SiteSettings setsite={setSitesetting}/>
            </div>
            :<></>
        }
        <div className='adminwrapper'>
            <div className='adminsidebar'>
                <div className='adminprofile'>
                    <div className='adminimg'><img src={img} width="100%" height="100%"/></div>
                    <div className='admininfo'>
                        <p>Name: Admin</p>
                        <p>UserId: 12234</p>
                        <p>Email: admin1234@gmail.com</p>
                        <p>PhoneNo: 9237864733</p>
                        <button onClick={()=>setEdit(true)}>Edit</button>
                    </div>
                </div>
                <div className='adminoptions'>
                    <div className='adminoplist' onClick={()=>{setAddboat(true)}}>Add Boats</div>
                    <div className='adminoplist'onClick={()=>setSitesetting(true)}>Site Settings</div>
                    <Link to="/" style={{textDecoration:"none",color:"black"}}><div className='adminoplist' onClick={()=>{handlelogin}}>Logout</div></Link>
                </div>
            </div>
            <div className='admincontent'>
                <div className='adminStat'>
                    <div className='statoptions'>
                        <p style={{fontSize:"1.5rem",textAlign:"center"}}>BoatCount</p>
                        <p style={{fontSize:"2rem",textAlign:"center"}}>425</p>
                    </div>
                    <div className='statoptions'>
                        <p style={{fontSize:"1.5rem",textAlign:"center"}}>TotalUsers</p>
                        <p style={{fontSize:"2rem",textAlign:"center"}}>400</p>
                    </div>
                    <div className='statoptions'>
                        <p style={{fontSize:"1.5rem",textAlign:"center"}}>TodayBookings</p>
                        <p style={{fontSize:"2rem",textAlign:"center"}}>25</p>
                    </div>
                </div>
                <div className="adminboatlist">
                    <SearchBar/>
                    <table className='admintable'>
                        <tr className='admintr'>
                            <th className='adminth'>BoatId</th>
                            <th className='adminth'>BoatName</th>
                            <th className='adminth'>Action</th>
                        </tr>
                        {boats.map((boat)=>(
                        <tr key={boat.id} className='admintable'>
                            <td className='admintd'>{boat.boatid}</td>
                            <td className='admintd'>{boat.boatname}</td>
                            <td className='admintd'>
                                <button onClick={()=>{handleDelete(boat.boatid)}}>Delete</button>
                                <button onClick={()=>{handleEdit(boat.boatid)}}>Edit</button>
                            </td>
                        </tr>
                        ))}
                    </table>
                </div>
            </div>
        </div>
        </>
    )
}
export default Admin;