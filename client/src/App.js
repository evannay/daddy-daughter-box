import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import About from './About'

const App = () => {
    return (
        <div className='app-container'>
            <Header />
            <Navbar />
            <About />
        </div>
    )
}

export default App