import React, { Component } from 'react'
import ThemedBox from './ThemeBox'
import CustomBox from './Custombox'
import { withGlobalProvider} from '../GlobalProvider.js'
import { Link } from 'react-router-dom'

class ThemeBoxContainer extends Component {
    componentDidMount(){
        this.props.getThemedBoxes()
    }
    render() {
        const mappedBoxes = this.props.themedBoxes.map((box) => <ThemedBox key={box._id} box={box} />)
        return (<>
            <div className="ThemeBoxesContainer">
                {mappedBoxes}
                <CustomBox />
            </div>
            <div className="switch-to-subscription">
                <h1>Pick a Subscription</h1>
                <Link to='/shop'><button className="next-button subsciption-box-option-button">Next</button></Link>
            </div> 
        </>)
    }
} export default withGlobalProvider(ThemeBoxContainer)