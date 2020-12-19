import React, { useState } from 'react'
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LockIcon from '@material-ui/icons/Lock';
import './Login.css'
import { useRadioGroup } from '@material-ui/core';
import auth from './firebase';
import { Link } from 'react-router-dom';

function Login() {
    const [uzer, setuzer] = useState({
        email: "",
        password: "",       
        error: "", 
    })

    const handleChange = (e) =>{
        setuzer({
            ...uzer,
            [e.target.name]: e.target.value,
        })
    }
    const handleLogin = (e) =>{
        e.preventDefault()    
        auth.signInWithEmailAndPassword(uzer.email, uzer.password).catch(err => setuzer({
            ...uzer,
            error: err.message
        }))
    }
    return (
        <form className="Login">
            <div className="Login__form">
                <MailOutlineIcon />
                <input type="text" value={uzer.email} name="email" onChange={handleChange} placeholder="Email" required />
            </div>

            <div className="Login__form">
                <LockIcon />
                <input type="password" value={uzer.password} placeholder="Password" name="password" onChange={handleChange} required />
            </div>

            <Link to="/"><button onClick={handleLogin} id="signUp__btn">Login</button></Link>
            <div>{uzer.error}</div>
        </form>
    )
}

export default Login
