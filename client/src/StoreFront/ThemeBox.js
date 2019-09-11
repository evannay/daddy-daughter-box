import React from 'react'
import { withGlobalProvider } from '../GlobalProvider'

const ThemeBox = (props) => {
    let { theme, imgUrl, _id } = props.box
    console.log(props.savedbox)
    const boxExists = props.savedbox.find(box => box._id === _id)
    console.log(boxExists)
  


    return (
        <div className="box-container">
            <h2>{theme}</h2>
            <p>{imgUrl} Image goes here</p>
            {
               boxExists
                    ? <button onClick={() => props.deleteBoxTheme(props.box, _id)} className="delete-them-button">X</button>
                    : <button onClick={() => props.saveBoxTheme(props.box, _id)} className="save-theme-button">Select Theme</button>
            }
            
        </div>
    )
}
export default withGlobalProvider(ThemeBox)