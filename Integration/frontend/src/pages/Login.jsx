import { useEffect, useState } from "react";
import "../assets/css/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setIsLoggedIn, setUser } from "../actions/userActions";
export const Login = () =>{
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch=useDispatch();
  const navigate=useNavigate();
    const fetchData = async () => {
      try {
        const response = await axios.post('http://localhost:8080/api/v1/auth/login', {
          email: email,
          password: password,
        });
        console.log(response);
        dispatch(setUser(response.data.id,response.data.name,response.data.role));
        dispatch(setIsLoggedIn(true));
        localStorage.setItem("token",response.data.token);
        if(response.data.role=="USER")
          navigate('/');
        else
          navigate('/admin');
      } catch (error) {
        console.log(error);
      }
    };

  const handleLogin = (event)=>{
    event.preventDefault();
    fetchData();
  }
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

    return(
        <>
        <div className="wrapperlogin">
            <div className="auth-form-containerlog">
                <h2 className="logintitle">Login</h2>
                <form className="login-form"  onSubmit={handleLogin}>
                    <label className="loglabel" for="email">Email</label>
                    <input className="loginput" value={email}  onChange={handleEmailChange} type="email" placeholder="Enter your email" required></input>
                    <label className="loglabel" for="password">Password</label>
                    <input className="loginput" value={password} onChange={handlePasswordChange} type="password" placeholder="***********" required></input>
                    <button className="logsubmit" type="submit">Log In</button>
                </form>
                <Link to="/register"><button className="link-btnlog">Don't have an account? Register here..</button></Link>
        </div>
       </div>
       </>
    )
}