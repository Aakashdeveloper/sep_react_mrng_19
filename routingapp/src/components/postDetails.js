import React, {Component} from 'react';

class PostDetails extends Component{
    render(){
        console.log(this.props)
        return(
            <div>
                <h2>Details Page for {this.props.match.params.topic}</h2>
            </div>
        )
    }
}


export default PostDetails;