import React, { Component } from 'react'
import ThemedBox from './ThemeBox'
import CustomBox from './Custombox'
import { withGlobalProvider} from '../GlobalProvider.js'

class ThemeBoxContainer extends Component {
    componentDidMount(){
        this.props.getThemedBoxes()
    }
    render() {
        const mappedBoxes = this.props.themedBoxes.map((box) => <ThemedBox key={box._id} box={box} />)
        return (
            <div className="ThemeBoxesContainer">
            {mappedBoxes}
            <CustomBox/>
        </div>)
    }
} export default withGlobalProvider(ThemeBoxContainer)