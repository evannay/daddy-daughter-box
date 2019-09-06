import React from 'react'
// import ThemeBoxContainer from './ThemeBoxContainer'
import { Link } from 'react-router-dom'
import './storeFront.css'

const StoreFront = (props) => {
    console.log(props)
    return (
        <div className='store-front-container'>
            <h1>Choose your time line</h1>
            <p>Your box will be selected from Theme choices</p>
            <div className = 'subscription-price-box'>
            <div className='subsciption-box-option'>
                <h3> 1 Month</h3>
                <h1>34.99</h1>
                <p>a month</p>
            </div>
            <div className='subsciption-box-option'>
                <h3> 3 Months</h3>
                <h1>29.99</h1>
                <p>a month</p>
            </div>
            <div className='subsciption-box-option'>
                <h3> 6 Months</h3>
                <h1>24.99</h1>
                <p>a month</p>

            </div>
            <div className='subsciption-box-option'>
                <h3> 12 Months</h3>
                <h1>19.99</h1>
                <p>a month</p>
            </div>
        </div>
            <Link to='/ThemeChoices'><button className='subsciption-box-option-button'>Next</button></Link>
            {/* <ThemeBoxContainer/> */}
        </div>
    )
}

export default StoreFront