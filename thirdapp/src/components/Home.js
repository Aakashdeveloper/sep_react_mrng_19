import React, {Component} from 'react';
import Banner from './Banner'
import ArtistList from './ArtistList';

const url = 'http://localhost:8900/artists'

class Home extends Component {
    constructor(){
        console.log("<<<<Inside Constructor>>>>")
        super();

        this.state = {
            artists:''
        }
    }

    componentDidMount(){
        console.log("<<<<Inside Did Mount>>>>")
        fetch(url,{
            method:'GET'
        })
        
        .then(response => response.json())
        .then((data,err) => { 
            this.setState({
                artists:data
            })
        })
        .catch()
    }

    render(){
        console.log("<<<<Inside render>>>>")
        return(
            <div>
                <Banner/>
                <ArtistList artistData={this.state.artists}></ArtistList>
            </div>
            
        )
    }
}

export default Home;