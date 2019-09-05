import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <ul className='navbar-container'>
            <Link to='/'>ABOUT</Link>
            <Link to='/shop'>SHOP</Link>
            <Link to='/cart'>CART</Link>
        </ul>
    )
}

export default Navbar