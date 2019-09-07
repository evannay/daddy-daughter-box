import React from 'react'
import { withGlobalProvider } from '../GlobalProvider'

const ThemeBox = (props) => {
    let style = {
        
    }
    let { theme, imgUrl, _id} = props.box
    return (<div className="box-container" style={style}>
            <h2>{theme}</h2>
            <p>{imgUrl} Image goes here</p>
        <button onClick={() => props.saveBoxTheme(props.box)} className="save-theme-button">Select Theme</button>
        <button onClick={() => props.deleteBoxTheme(props.box)} className="delete-them-button">Delete/De-select</button>
        </div>
    )
}
export default withGlobalProvider(ThemeBox)