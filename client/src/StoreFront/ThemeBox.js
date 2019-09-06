import React from 'react'
import { withGlobalProvider } from '../GlobalProvider'

const ThemeBox = (props) => {
    // console.log(props)
    let { theme, imgUrl, _id} = props.box
    return (<div className="box-container">
            <h2>{theme}</h2>
            <p>{imgUrl} Image goes here</p>
        <button onClick={() => props.saveBoxTheme(theme)} className="save-theme-button">Theme Selected</button>
        </div>
    )
}
export default withGlobalProvider(ThemeBox)