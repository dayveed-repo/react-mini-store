import React, { useState } from 'react'
import Login from './Login.js'
import SignUp from './SignUp.js'
import './Authenticate.css'
import { Link } from 'react-router-dom'
 

function Authenticate() {
    const [checkAuth, setcheckAuth] = useState("")

    let signup_style = {
        background: `${checkAuth === "signup" ? "white" : ""}`
    }

    let login_style = {
        background: `${checkAuth === "login" ? "white" : ""}`
    }

    return (
        <div className="Authenticate">
            <div className="Authenticate__main">
                <h1>Welcome to Dayveed's Store</h1>
                <div className="Authenticate__body">
                    <div className="Switcher">
                        <Link to="/signup"><h2 onClick={() => setcheckAuth("signup")} style={signup_style}>Sign Up</h2></Link>
                        <Link to="/login"><h2 onClick={() => setcheckAuth("login")} style={login_style}>Login</h2></Link>
                    </div>

                    <div className="Auth__output">
                        {checkAuth === "login" ? <Login /> : <SignUp />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Authenticate

