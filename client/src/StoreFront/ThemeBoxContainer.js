import React, { Component } from 'react'
import {withGlobal} from '../GlobalProvider'

class ThemeBoxContainer extends Component {
    componentDidMount(){
        this.props.getThemedBoxes()
    }
    render() {
        const mappedBoxes = this.props.themedBoxes.map((box, i) => <ThemedBox />)
        return (<div className="ThemeBoxContainer">
            {mappedBoxes}
        </div>)
    }
} export default ThemeBoxContainer