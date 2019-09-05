import React from 'react'

const { Provider, Consumer } = React.createContext()

class GlobalProvider extends Component {
    constructor(){
        super()
        this.state = {

        }
    }




    render(){
        <Provider value = {{
            
        }}>
            {this.props.children}
        </Provider>
    }
}

export default GlobalProvider

export const globalProvider = props => (
    <Consumer>
        {value => <C {...value}{...props} />}
    </Consumer>
)