import { useState } from "react";
import "../assets/css/Login.css";
import { Link } from "react-router-dom";
export const Login = (props) =>{
    const {email,setEmail} = useState('');
    const {pass,setPass} = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(email);
    }
    return(
        <div className="wrapperlogin">
            <div className="auth-form-containerlog">
                <h2 className="logintitle">Login</h2>
                <form className="login-form" onSubmit={handleSubmit} >
                    <label className="loglabel" for="email">Email</label>
                    <input className="loginput" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your email" required></input>
                    <label className="loglabel" for="email">Password</label>
                    <input className="loginput" value={pass} onChange={(e) => setPass(e.target.value)} type="email" placeholder="***********" required></input>
                    <button className="logsubmit">Log In</button>
                </form>
                <Link to="/register"><button className="link-btnlog">Don't have an account? Register here..</button></Link>
        </div>
       </div>
    )
}