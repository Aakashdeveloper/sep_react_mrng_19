import React, {Component } from 'react';
import { connect} from 'react-redux';
import { selectedNews, clearselectedNews} from '../actions';
import { BindActionCreator} from 'reduc';


class NewsDetails extends Component {
    componentDidMount(){
        this.props.selectedNews(this.props.match.params.id)
    }
    render() {
        return(
            <div>
                Details PAage
            </div>
        )
    }

}
function mapStateToProp(state){
    return {

    }
}

function mapDispatchToProps(dispatch){
    return BindActionCreator({selectedNews, clearselectedNews},dispatch)
}

export default connect(mapStateToProp,mapDispatchToProps)(NewsDetails);