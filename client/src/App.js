import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import About from './About'
import Cart from './Cart/Index'
import StoreFront from './StoreFront/index'
import Footer from '../src/Footer/index'

import { Switch, Route } from 'react-router-dom'


const App = () => {
    return (
        <div className='app-container'>
            <Header />
            <Navbar />
            <Switch>
                <Route exact path='/' component={About} />
                <Route path='/cart' component={Cart}/>
                <Route path='/shop' component={StoreFront} />
            </Switch>
            <Footer />
        </div>
    )
}

export default App