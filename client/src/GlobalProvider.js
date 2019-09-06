import React from 'react'
import axios from 'axios'

const { Provider, Consumer } = React.createContext()

class GlobalProvider extends React.Component {
    constructor(){
        super()
        this.state = {
            themedBoxes: [],
            isSaved: false,
            saved: JSON.parse(localStorage.getItem('saved')) || []

        }
    }
    getThemedBoxes = () => {
        axios.get('/box').then(response => {
            // console.log(response.data)
            this.setState({ themedBoxes: response.data }) 
        }) 
    }
    saveBoxTheme = (e) => {
        this.setState(prevState => ({
            isSaved: true,
            saved: [...prevState.saved],
        }),
            () => {
                localStorage.setItem('saved', JSON.stringify(this.state.saved))
            })
    }
    
    render(){
        return(
            <Provider value={{
                getThemedBoxes: this.getThemedBoxes,
                saveBoxTheme: this.saveBoxTheme,
                ...this.state
        }}>
            {this.props.children}
        </Provider>
    )}
}

export default GlobalProvider

export const withGlobalProvider = Component => props =>
    <Consumer>
        {value => <Component {...value}{...props} />}
    </Consumer>



