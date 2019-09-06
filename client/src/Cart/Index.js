import React from 'react'
import ThemedBox from '../StoreFront/ThemeBox'
import { withGlobalProvider } from '../GlobalProvider'
import './cart.css'
import '../StoreFront/storeFront.css'

const Cart = (props) => {
    console.log(props)
    
    let { lenght, price } = props.subscriptOption
    const mappedThemes = props.savedbox.map((box) => <ThemedBox key={box._id} box={box} />)
    
    
return (
    <div className="cart-container">
        <div>ThemeBoxes Selected</div>
        {mappedThemes}
        <div className="selected-subcription">Subcription Package selected
            <h3>{lenght}</h3>
            <h3>{price}</h3>
        </div>
        <div className="total-container">
            <h1>Total</h1>
            <h1> {price} X box Number</h1>
        </div>

    </div>
    )
}
export default withGlobalProvider(Cart)