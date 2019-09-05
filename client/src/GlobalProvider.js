import React from 'react'

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