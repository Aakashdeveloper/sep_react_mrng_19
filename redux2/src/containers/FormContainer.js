import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { PostData } from '../actions'

class FormContainer extends Component {
    constructor(){
        super()

        this.state={
            title:'Earth Quick in pakistan',
            newsBody:'Yesterday there was erath quick',
            category:'News'
        }

        this.handleChangeTitle= this.handleChangeTitle.bind(this);
        this.handleChangeNewsBody= this.handleChangeNewsBody.bind(this);
        this.handleChangeCategory= this.handleChangeCategory.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this) ;

    }

    handleChangeTitle(event){
        this.setState({title:event.target.value})
    }

    handleChangeNewsBody(event){
        this.setState({title:event.target.value})
    }
    handleChangeCategory(event){
        this.setState({title:event.target.value})
    }
    handleSubmit(event){
        this.props.PostData(this.state.title,
            this.state.newsBody,
            this.state.category);
            alert('data submitted')
       
    }


    render(){
        return(
<div className="container">
                <form>
                    <div className="form-group">
                        <label>Title</label>
                        <input type="text" 
                            className="form-control"
                            value={this.state.title}
                            onChange={this.handleChangeTitle}
                            id="title"
                        />
                    </div>
                    <div className="form-group">
                        <label>News Body</label>
                        <input type="text" 
                            className="form-control"
                            value={this.state.newsBody}
                            onChange={this.handleChangeNewsBody}
                            id="newsBody"
                        />
                    </div>
                    <div className="form-group">
                        <label>Category</label>
                        <input type="text" 
                            className="form-control"
                            value={this.state.category}
                            onChange={this.handleChangeCategory}
                            id="category"
                        />
                    </div>
                    <button type="submit" className="btn btn-success"
                    onClick={this.handleSubmit}>
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({PostData}, dispatch)
}

export default connect(null,mapDispatchToProps)(FormContainer)