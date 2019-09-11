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
        const mappedBoxes = this.props.themedBoxes.map((box) => <ThemedBox key={box._id} box={box} class='box-container'/>)
        return (
            <div className="ThemeBoxesContainer">
            {mappedBoxes}
            <CustomBox/>
            <Link to='/shop'><button>Next</button></Link>
        </div>)
    }
} export default withGlobalProvider(ThemeBoxContainer)