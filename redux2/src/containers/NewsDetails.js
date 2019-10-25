import React, {Component } from 'react';
import { connect} from 'react-redux';
import { selectedNews, clearselectedNews} from '../actions';
import { bindActionCreators} from 'redux';
import LikeCounter from './LikeCounter';


class NewsDetails extends Component {
    componentDidMount(){
        this.props.selectedNews(this.props.match.params.id)
    }

    renderNews= ({selected}) => {
        if(selected){
            return selected.map((data) => {
                return(
                    <div key={data.id}>
                        <div className="tags">
                            <span>
                                <i className="fa fa-eye"></i>
                                {data.views}
                            </span>
                            <span>
                                <i className="fa fa-thumbs-up"></i>
                                {data.likes[0]}
                            </span>
                            <span>
                                <i className="fa fa-thumbs-down"></i>
                                {data.likes[1]}
                            </span>
                        </div>
                        <div className="top">
                            <h2>{data.title}</h2>
                            <span>Articles By:<strong>
                                {data.author}
                            </strong></span>
                            <img src={`/images/articles/${data.img}`}/>
                            <div className="body_news">
                                {data.body}
                            </div>
                            <div>
                                <LikeCounter
                                articleId={data.id}
                                likes={data.likes[0]}
                                dislikes={data.likes[1]}/>
                            </div>
                        </div>

                    </div>
                )
            })
        }
    }
    render() {
        return(
            <div className="news_container">
                {this.renderNews(this.props.details)}
            </div>
        )
    }

}
function mapStateToProp(state){
    return {
        details:state.articles
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({selectedNews, clearselectedNews},dispatch)
}

export default connect(mapStateToProp,mapDispatchToProps)(NewsDetails);