import React, {Component} from 'react';
import { connect } from 'react-redux';
import { latestNews } from '../actions';
import { bindActionCreators } from 'redux';


import LatestNews from '../components/Home/LatestNews';

class Home extends Component{
    
    componentDidMount(){
        this.props.latestNews()
    }

    render(){
        return(
            <div>
                <LatestNews/>
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log(state)
    return{
        articles:state.articles
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({latestNews},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);