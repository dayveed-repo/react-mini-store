import React, { useState } from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LockIcon from '@material-ui/icons/Lock';
import "./Login.css"
import auth from './firebase';
import { Link } from 'react-router-dom';

function SignUp() {
    const [user, setuser] = useState({
        firstname: "",
        lastname: "",
        password1: "",
        email: "",
        password2: "",
        error: ""
    })

    const handleChange = (e) =>{
        setuser({
            ...user,
            [e.target.name]: e.target.value,
        })
    }
    const handleSignup = (e) =>{
        e.preventDefault()
        if(user.password1 == user.password2){
            auth.createUserWithEmailAndPassword(user.email, user.password1).then(result => {
                result.user.updateProfile({
                displayName: `${user.firstname} ${user.lastname}`,
            }) 
            result.user.sendEmailVerification().then(() => alert("verification sent")).catch(err => alert(err.message))
        }).catch(err => setuser({
                ...user,
                error: err.message,
            }))
            }else{
                console.log("failed to signup")
            }
    }
    console.log(user)
    return (
        <form className="SignUp">
            <div className="Login__form">
                <AccountCircleIcon />
                <input type="text" value={user.firstname} name="firstname" onChange={handleChange} placeholder="First name" required />
            </div>
            
            <div className="Login__form">
                <AccountCircleIcon />
                <input type="text" value={user.lastName} name="lastname" onChange={handleChange} placeholder="Last name" required />
            </div>

            <div className="Login__form">
                <MailOutlineIcon />
                <input type="text" value={user.email} name="email" onChange={handleChange} placeholder="Email" required />
            </div>

            <div className="Login__form">
                <LockIcon />
                <input type="password" value={user.password1} name="password1" onChange={handleChange} placeholder="Password" required />
            </div>

            <div className="Login__form">
                <LockIcon />
                <input type="password" value={user.password2} name="password2" onChange={handleChange} placeholder="confirm Password" required />
            </div>

            <Link to="/"><button onClick={handleSignup} id="signUp__btn">SignUp</button></Link>
            <div>{user.error}</div>
        </form>
    )
}

export default SignUp
