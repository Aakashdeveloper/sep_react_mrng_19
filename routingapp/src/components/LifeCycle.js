//Get DeFault State
//Set Initial State
//Before Get Created
//Render JSX
//After Component mounted
import React,{Component} from 'react';

class Lifecycle extends Component{
   
    //1Get DeFault State
    constructor(props){
        super(props)

        //2Set Initial State
        this.state={
            title:'LifeCycle'
        }
        console.log("Constructor")
    }

    //3 Before Get Created
    componentWillMount(){
        console.log("Before Get Created")
    }

    componentWillUpdate(){
        console.log("componentWillUpdate")
    }
    componentDidUpdate(){
        console.log("componentDidUpdate")
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("shouldd ComponentnUpdate")
        if(nextState.title === this.state.title){
            return false
        } else {
            return true
        }
    }

    //4 Render JSX
    render(){
        console.log("Render JSX")
        return(
            <React.Fragment>
                <div>This is {this.state.title}</div>
                <div onClick={()=> this.setState({title:'Something'})}>
                    Click Me
                </div>
            </React.Fragment>
        )
    }

     //5 After Component mounted
     componentDidMount(){
        console.log("After  Created")
    }

    componentWillUnmount(){
        let out = window.confirm('Do you want to leave')
        console.log(out)
        if(out == false){
            return false
        }
    }
    
}


export default Lifecycle;
