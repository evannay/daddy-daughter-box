import React from 'react'

const { Provider, Consumer } = React.createContext()

class GlobalProvider extends React.Component {
    constructor(){
        super()
        this.state = {

        }
    }




    render(){
        return(
        <Provider value = {{
            
        }}>
            {this.props.children}
        </Provider>
        )
    }
}

export default GlobalProvider

export const globalProvider = (props, C) => (
    <Consumer>
        {value => <C {...value}{...props} />}
    </Consumer>
)