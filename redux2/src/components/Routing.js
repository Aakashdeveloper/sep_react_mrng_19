import React, {Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import Home from '../containers/Home';
import Header from './Header';
import Footer from './Footer';
import NewsDetails from '../containers/NewsDetails'

class Routing extends Component {
    render(){
        return(
            <BrowserRouter>
                <div>
                    <Header></Header>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/details/:id" component={NewsDetails}/>
                    <Footer></Footer>
                </div>
            </BrowserRouter>
        )
    }
}

export default Routing;