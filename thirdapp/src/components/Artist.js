import React, { Component } from 'react';
import Header from './Header';

class Artist extends Component {
    constructor(){
        super()
    }

    componentDidMount(){
        console.log(this.props.match.params.id)
    }
    render(){
        return(
            <React.Fragment>
                <Header/>
                Artists Details
            </React.Fragment>
        )
    }
}

export default Artist; 