import React, { useState } from "react";
import "../assets/css/Register.css";
import { Link } from "react-router-dom";
export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="wrapperRegister">
            <div className="auth-form-containerreg">
                    <h2>Register</h2>
                <form className="register-form" onSubmit={handleSubmit}>
                    <label className="reglabel" htmlFor="name">Full name</label>
                    <input className="reginput" value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" />
                    <label className="reglabel" htmlFor="email">email</label>
                    <input className="reginput" value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                    <label className="reglabel" htmlFor="password">password</label>
                    <input className="reginput" value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                    <button className="regsubmit" type="submit">Log In</button>
                </form>
                <Link to="/login"><button className="link-btnreg">Already have an account? Login here.</button></Link>
            </div>
        </div>
    )
}