import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer';

//return
const Main = () => {
    return(
        <React.Fragment>
            <Header/>
            <h1>This is My React app</h1>
            <img src="https://image.ibb.co/f0hhZc/bp.jpg"/>
            <div>
                <h2>My Component</h2>
            </div>
            <Footer/>
        </React.Fragment>
    )
}

ReactDOM.render(<Main/>,document.getElementById('root'))

