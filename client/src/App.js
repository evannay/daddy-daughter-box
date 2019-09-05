import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import About from './About'
import Cart from './Cart'
import './App.css'

const App = () => {
    return (
        <div className='app-container'>
            <Header />
            <Navbar />
            <About />
            <Cart />
        </div>
    )
}

export default App