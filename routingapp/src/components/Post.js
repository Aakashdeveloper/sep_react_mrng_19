import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Posts extends Component {
    render(){
        return(
            <div>
                <div className="panel panel-primary">
                    <div className="panel-heading">Post Page</div>
                    <div className="panel-body">
                        <h2>Post Content Here</h2>
                        <br/>
                        <Link to="/posts/javaScript" className="btn btn-info">JavaScript</Link>
                        <br/> <br/>
                        <Link to="/posts/redux" className="btn btn-info">Redux</Link>
                        <br/> <br/>
                        <Link to="/posts/node" className="btn btn-info">NodeJs</Link>
                    </div>
                </div>
            </div>
        )
    }
}
export default Posts;