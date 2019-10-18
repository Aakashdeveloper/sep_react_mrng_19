import React, {Component} from 'react';
import { connect } from 'react-redux';
import { latestNews,articleNews} from '../actions';
import { bindActionCreators } from 'redux';


import LatestNews from '../components/Home/LatestNews';
import ArticlesNews from '../components/Home/ArticlesNews';
import Gallery from '../components/Home/GalleryNews';

class Home extends Component{
    
    componentDidMount(){
        this.props.latestNews()
        this.props.articleNews()
    }

    render(){
        return(
            <div>
                <LatestNews latest={this.props.articles.latest}/>
                <ArticlesNews article={this.props.articles.article}/>
                <Gallery galItem={this.props.gal.galdata}/>
            </div>
        )
    }
}

function mapStateToProps(state){
    // console.log(state)
    return{
        articles:state.articles,
        gal:state.gallery
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({latestNews,articleNews},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);