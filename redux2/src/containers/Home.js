import React, {Component} from 'react';
import { connect } from 'react-redux';
import { latestNews,articleNews, latestGallery} from '../actions';
import PropTypes from 'prop-types'


import LatestNews from '../components/Home/LatestNews';
import ArticlesNews from '../components/Home/ArticlesNews';
import Gallery from '../components/Home/GalleryNews';

class Home extends Component{
    
    componentDidMount(){
        this.props.dispatch(latestNews())
        this.props.dispatch(articleNews())
        this.props.dispatch(latestGallery())
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
    console.log(state)
    return{
        articles:state.articles,
        gal:state.gallery
    }
}

Home.protoTypes={
    dispatch: PropTypes.func
}



export default connect(mapStateToProps)(Home);