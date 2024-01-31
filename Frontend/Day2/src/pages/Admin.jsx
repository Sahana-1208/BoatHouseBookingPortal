import { useState } from 'react';
import '../assets/css/Admin.css';
import img from "../assets/images/profile.png";

function Admin(){
    const[edit,setEdit]=useState(false);
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
                    <div className='adminoplist'>Add Boats</div>
                    <div className='adminoplist'>Site Settings</div>
                    <div className='adminoplist'>Logout</div>
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
                    <table className='admintable'>
                        <tr className='admintr'>
                            <th className='adminth'>BoatId</th>
                            <th className='adminth'>BoatName</th>
                            <th className='adminth'>Action</th>
                        </tr>
                        <tr className='admintr'>
                            <td className='admintd'>12</td>
                            <td className='admintd'>Woodland</td>
                            <td className='admintd'>
                                <button>Delete</button>
                                <button>Edit</button>
                            </td>
                        </tr>
                        <tr className='admintr'>
                            <td className='admintd'>12</td>
                            <td className='admintd'>Woodland</td>
                            <td className='admintd'>
                                <button>Delete</button>
                                <button>Edit</button>
                            </td>
                        </tr>
                        <tr className='admintr'>
                            <td className='admintd'>12</td>
                            <td className='admintd'>Woodland</td>
                            <td className='admintd'>
                                <button>Delete</button>
                                <button>Edit</button>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        </>
    )
}
export default Admin;