import { useEffect, useState } from 'react';
import '../assets/css/ViewBookings.css';
import BoatViewCard from './BoatViewCard';
import { useSelector } from 'react-redux';
import axios from 'axios';
function ViewBookings(props){
    const[bookings,setBookings]=useState([]);
    const user=useSelector((state)=>state.user);
    useEffect(()=>{
        const fetchBookingData= async ()=>{
            try{
            const response=await axios.get(`http://localhost:8080/api/bookings/user/${user.id}`,{
                headers:{
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
              }
            );
            const {data}=response;
            setBookings(data);

            console.log(data);
            }
            catch(error){
                console.log(error);
            }
        }
        fetchBookingData();
    },[]);
    return(
        <div className='viewBookingwrapper'>
            {
                bookings.map(b=>
                    <BoatViewCard booking={b}/>
                    )
            }
        </div>
    )
}
export default ViewBookings;