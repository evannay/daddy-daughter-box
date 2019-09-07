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
            isSubscribed2: false,
            isSubscribed3: false,
            isSubscribed4: false,
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
            isSubscribed: !prevState.isSubscribed,
            subscriptOption: subscriptionPlan,
        }),
            () => {
                // console.log(this.state.subscriptOption)
                localStorage.setItem('subscriptOption', JSON.stringify(this.state.subscriptOption))
            })
    }
    savedSubscription2 = (subscriptionPlan) => {
        this.setState(prevState => ({
            isSubscribed2: !prevState.isSubscribed2,
            subscriptOption: subscriptionPlan,
        }),
            () => {
                // console.log(this.state.subscriptOption)
                localStorage.setItem('subscriptOption', JSON.stringify(this.state.subscriptOption))
            })
    }
    savedSubscription3 = (subscriptionPlan) => {
        this.setState(prevState => ({
            isSubscribed3: !prevState.isSubscribed3,
            subscriptOption: subscriptionPlan,
        }),
            () => {
                // console.log(this.state.subscriptOption)
                localStorage.setItem('subscriptOption', JSON.stringify(this.state.subscriptOption))
            })
    }
    savedSubscription4 = (subscriptionPlan) => {
        this.setState(prevState => ({
            isSubscribed4: !prevState.isSubscribed4,
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

    deleteBoxTheme = (box) => {
        this.setState(prevState => ({
            savedbox: prevState.savedbox.filter(selected => selected !== (box))
        }),
            () => {
                localStorage.setItem('savedbox', JSON.stringify(this.state.savedbox))
            }
        )
    }

    
    render(){
        return(
            <Provider value={{
                getThemedBoxes: this.getThemedBoxes,
                saveBoxTheme: this.saveBoxTheme,
                savedSubscription: this.savedSubscription,
                deleteBoxTheme: this.deleteBoxTheme,
                savedSubscription2: this.savedSubscription2,
                savedSubscription3: this.savedSubscription3,
                savedSubscription4: this.savedSubscription4,
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



