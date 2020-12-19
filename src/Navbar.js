import React, { useState } from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import { Badge } from '@material-ui/core'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import shopActions from './shopActions'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import auth from './firebase';

function Navbar() {
    const num_of_cartItems = useSelector(state => state.num_of_cartItems)
    const dispatch = useDispatch()

    const [input, setinput] = useState("")
    const handleSubmit = (e) =>{
        e.preventDefault()
        setinput("")
    }

    const handleChange = (e) =>{
        setinput(e.target.value)
    }

    const handlelogOut = () =>{
        auth.signOut()
    }
    console.log(input)
    return (
        <div className="Navbar">
            <Link to="/" style={{ textDecoration: "none"}}>
            <h1>home</h1>
            </Link>

            <form onSubmit={handleSubmit} className="saerchContainer">
                <input type="text" value={input} onChange={handleChange} placeholder="search" />
                <SearchIcon onClick={handleSubmit} />
            </form>
        <div className="Nav__icons">
        <ExitToAppIcon onClick={handlelogOut} color="secondary" />
        <Link to="/cart" style={{ textDecoration: "none", color: 'white' }}>
        <Badge badgeContent={num_of_cartItems} color="secondary" showZero >
            <ShoppingCartIcon />
        </Badge>
        </Link>
        </div>
        </div>
    )
}

export default Navbar
