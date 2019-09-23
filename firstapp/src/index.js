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
            news: JSON
        }
    }

    render(){
        return(
            <React.Fragment>
                <Header/>
                <NewsList newsdata={this.state.news}/>
                <Footer/>
            </React.Fragment>
        )
    }
}

ReactDOM.render(<Main/>,document.getElementById('root'))

