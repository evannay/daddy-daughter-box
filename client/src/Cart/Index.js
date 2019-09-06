import React from 'react'
import ThemedBox from '../StoreFront/ThemeBox'
import { withGlobalProvider } from '../GlobalProvider'

const Cart = (props) => {
    console.log(props.savedbox)
    let { lenght, price } = props.subscriptOption
    const mappedThemes = props.savedbox.map((box) => <ThemedBox box={box}/>)
    
return (
        <div className='cart-container'>
    <h1>{lenght}</h1>
    <h1>{price}</h1>
    {mappedThemes}
    </div>
    )
}
export default withGlobalProvider(Cart)