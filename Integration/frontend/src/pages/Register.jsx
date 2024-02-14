import React, { useState } from "react";
import "../assets/css/Register.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [passcon, setPassCon] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState(null);
    const navigate=useNavigate();
    const callRegister= async ()=>{
        try {
            const response = await axios.post('http://localhost:8080/api/v1/auth/register', {
              name: name,
              email: email,
              password: pass,
              confirmPassword: passcon,
            });
            console.log(response);
            navigate('/login');
          } catch (error) {
            setError(error.response ? error.response.data : error.message);
            console.error('Login failed:', error.response ? error.response.data : error.message);
          }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        callRegister();
    };

    return (
        <>
        <div className="wrapperRegister">
            <div className="auth-form-containerreg">
                    <h2>Register</h2>
                <form className="register-form" onSubmit={handleSubmit}>
                    <label className="reglabel" htmlFor="name">Full name</label>
                    <input className="reginput" value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" />
                    <label className="reglabel" htmlFor="email">Email</label>
                    <input className="reginput" value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                    <label className="reglabel" htmlFor="password">Password</label>
                    <input className="reginput" value={pass} onChange={(e) => setPass(e.target.value)}type="password" placeholder="********" id="password" name="password" />
                    <label className="reglabel" htmlFor="password">ConfirmPassword</label>
                    <input className="reginput" value={passcon} onChange={(e) => setPassCon(e.target.value)} type="password" placeholder="********" id="conpassword" name="conpassword" />
                    <button className="regsubmit" type="submit">Register</button>
                </form>
                <Link to="/login"><button className="link-btnreg">Already have an account? Login here.</button></Link>
            </div>
        </div>
        </>
    )
}