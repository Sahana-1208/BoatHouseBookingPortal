
import { BrowserRouter as Router , Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import React from 'react';
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import HouseBoat from "./pages/HouseBoat";
import Navbar from "./components/Navbar";
import Details from "./pages/Details";
import { useState } from "react";
import Profile from "./pages/profile";
import ContactUs from "./pages/ContactUs";
import ViewProfile from "./components/ViewProfile";
import ViewBookings from "./components/ViewBookings";
import Admin from "./pages/Admin";
import { useSelector } from "react-redux";
function App() {
  const user=useSelector((state)=>state.user);
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  return (
      <Router>
        { user.role=='ADMIN'?<></>:
        <Navbar/>
}
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/houseboat" element={<HouseBoat/>}/>
          <Route path="/details/*" element={<Details/>}/>
          <Route path="/contactus" element={<ContactUs/>}/>
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/dashboard/profile" element={<Profile rightContent={<ViewProfile/>}/>}/>
          <Route path="/dashboard/view-bookings" element={<Profile rightContent={<ViewBookings val={false}/>}/>}/>
          <Route path="/dashboard/delete-booking" element={<Profile rightContent={<ViewBookings val={true}/>}/>}/>
        </Routes>
      </Router>
  )
}

export default App;
