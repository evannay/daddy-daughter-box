import React, {Component} from 'react'
class CustomBox extends Component {
    openForm() {
        //isdfosjfdoajsf
    }
    render() {
    
        return (<div className="themed-box-container custom-box-container">
            <h2>Custom Suprize Box</h2>
            <p>image goes here</p>
            <p>pick themes that you and your daughter like and we will at random select one of those theme boxes for you and send it to you every month.</p>
            <button onClick={this.openForm}>Select</button>
        </div>
        )
    
    }
}
export default CustomBox

class ShowAlert extends Component {
    showAlert() {
        alert("Im an alert");
    }

    render() {
        return <button onClick={this.showAlert}