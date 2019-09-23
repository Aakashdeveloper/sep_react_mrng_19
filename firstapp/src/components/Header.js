import React,{Component} from 'react';
import './Header.css';

class Header extends Component{

    constructor(){
        super()
        console.log(">>>>>>constructor")
        this.state={
            title:'My React App',
            userinput:'User Text here'

        }
    }

    inputChange(event) {
        console.log(event.target.value)
        this.setState({userinput:event.target.value ?                              event.target.value : 'User Text here'})
    }                         

    render(){
        console.log(">>>>>>render")
        return(
            <header>
                <div className="logo"
                onClick={()=>{console.log('Clicked')}}
                >
                    {this.state.title}
                </div>
                <center>
                    <input onChange={this.inputChange.bind(this)}/>
                    <h3>{this.state.userinput}</h3>
                </center>
                <hr/>
            </header> 
        )
    }

    
}

export default Header;