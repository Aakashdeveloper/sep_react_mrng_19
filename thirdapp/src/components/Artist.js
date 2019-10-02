import React, { Component } from 'react';
import Header from './Header';
import AlbumList from './albums';

const url = 'http://localhost:8900/artists'

class Artist extends Component {
    constructor(){
        super()

        this.state = {
            details:''
        }
    }

    componentDidMount(){
        console.log(this.props.match.params.id)
        fetch(`${url}/${this.props.match.params.id}`,{
            method:'GET'
        })
        .then((response)  => response.json())
        .then((data)=>{
            this.setState({
                details:data
            })
        })
    }
    render(){
        return(
            <React.Fragment>
                <Header/>
                <div className="artist_bio">
                    <div className="artist_image">
                        <span style={{background:`url('/images/covers/${this.state.details.cover}.jpg')`}}></span>
                        <div className="bio">
                            <h3>{this.state.details.name}</h3>
                            <div className="bio_text">
                                {this.state.details.bio}
                            </div>
                        </div>
                        <AlbumList albumdata={this.state.details.albums}></AlbumList>
                    </div>
                </div>
                
            </React.Fragment>
        )
    }
}

export default Artist; 