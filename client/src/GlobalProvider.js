import React from 'react'
import axios from 'axios'

const { Provider, Consumer } = React.createContext()

class GlobalProvider extends React.Component {
    constructor(){
        super()
        this.state = {
            themedBoxes: [],
            isSaved: false,
            isSubscribed: false,
            savedbox: JSON.parse(localStorage.getItem('savedbox')) || [],
            subscriptOption: JSON.parse(localStorage.getItem('subscriptionOption')) || "",
        }
    }
    getThemedBoxes = () => {
        axios.get('/box').then(response => {
            // console.log(response.data)
            this.setState({ themedBoxes: response.data }) 
        }) 
    }
    savedSubscription = (subscriptionPlan) => {
        this.setState(prevState => ({
            isSubscribed: true,
            subscriptOption: subscriptionPlan,
        }),
            () => {
                // console.log(this.state.subscriptOption)
                localStorage.setItem('subscriptOption', JSON.stringify(this.state.subscriptOption))
            })
    }
  
    saveBoxTheme = (box) => {
        this.setState(prevState => ({
            isSaved: true,
            savedbox: [...prevState.savedbox, box],
        }),
            () => {
                console.log(this.state.savedbox)
                localStorage.setItem('savedbox', JSON.stringify(this.state.savedbox))
            })
    }
    deleteTheme = (theme) => {
        
    }
    
    render(){
        return(
            <Provider value={{
                getThemedBoxes: this.getThemedBoxes,
                saveBoxTheme: this.saveBoxTheme,
                savedSubscription: this.savedSubscription,
                deleteTheme: this.deleteTheme,
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



