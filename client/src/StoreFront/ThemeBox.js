import React from 'react'
import {withGlobalProvider} from '../GlobalProvider'
const ThemeBox = () => {
    let { theme, imgUrl, _id} = this.props.box
    return (<div className="themed-box-container">
        <h1>This is where we will make and style our themed boxes</h1>
            <h2>{theme}</h2>
            <p>{imgUrl} Image goes here</p>
            <button onClick={() => this.props.saveBoxTheme(_id)}>Theme Selected</button>
        </div>
    )
}
export default withGlobalProvider(ThemeBox)