import React,{Component} from 'react';
import './Header.css';

class Header extends Component{

    constructor(){
        super()
        console.log(">>>>>>constructor")
        this.state={
            title:'My React App'
        }
    }

    inputChange(event) {
        console.log(event.target.value)
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
                    <input onChange={this.inputChange}/>
                </center>
                <hr/>
            </header> 
        )
    }

    
}

export default Header;