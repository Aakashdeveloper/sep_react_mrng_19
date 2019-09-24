import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header'
import Footer from './components/Footer';
import NewsList from './components/News_list';
import JSON from './db.json';


class Main extends Component{
    constructor(props){
        super()

        this.state= {
            news: JSON,
            filtered: JSON
        }
    }

    filterNews(keyword){
        const output = this.state.news.filter((data) => {
            return data.title.toLowerCase().indexOf(keyword.toLowerCase())>-1;
        })

        this.setState({filtered:output})
    }
   

    render(){
        return(
            <React.Fragment>
                <Header usertext={(uInput)=>{this.filterNews(uInput)}}/>
                <NewsList newsdata={this.state.filtered}/>
                <Footer/>
            </React.Fragment>
        )
    }
}

ReactDOM.render(<Main/>,document.getElementById('root'))

