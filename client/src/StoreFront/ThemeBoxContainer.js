import React, { Component } from 'react'
import ThemedBox from './ThemeBox'
import { withGlobalProvider} from '../GlobalProvider.js'

class ThemeBoxContainer extends Component {
    componentDidMount(){
        this.props.getThemedBoxes()
    }
    render() {
        const mappedBoxes = this.props.themedBoxes.map((box) => <ThemedBox key={box._id} todo={box} />)
        return (<div className="ThemeBoxContainer">
            {mappedBoxes}
            <CustomBox/>
        </div>)
    }
} export default withGlobalProvider(ThemeBoxContainer)