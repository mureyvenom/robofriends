import React, {Component} from 'react';

class ErrorBoundary  extends Component {
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info){
        this.setState({hasError: true});
    }

    render(){
        if(this.state.hasError){
            return(
                <div>
                    <h1>That wasnt supposed to happen</h1>
                </div>
            )
        }else{
            return(
                <div>
                    {this.props.children}
                </div>
            )
        }        
    }
}

export default ErrorBoundary;