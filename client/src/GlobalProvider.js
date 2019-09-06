import React from 'react'
import axios from 'axios'

const { Provider, Consumer } = React.createContext()

class GlobalProvider extends React.Component {
    constructor(){
        super()
        this.state = {
            themedBoxes: [],
            isSaved: false,
            savedbox: JSON.parse(localStorage.getItem('savedbox')) || []

        }
    }
    getThemedBoxes = () => {
        axios.get('/box').then(response => {
            // console.log(response.data)
            this.setState({ themedBoxes: response.data }) 
        }) 
    }
    saveBoxTheme = (theme) => {
        this.setState(prevState => ({
            isSaved: true,
            savedbox: [...prevState.savedbox, theme],
        }),
            () => {
                console.log(this.state.savedbox)
                localStorage.setItem('savedbox', JSON.stringify(this.state.savedbox))
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



