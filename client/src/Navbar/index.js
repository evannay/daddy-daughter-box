import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <ul className='navbar-container'>
            <Link to='/'>About</Link>
            <Link to='/shop'>Shop</Link>
            <Link to='/cart'>Cart</Link>
        </ul>
    )
}

export default Navbar