import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import './App.css';


class App extends Component {

    componentDidMount() {
        document.title = 'Minimalistic markdown editor';
    }

    render() {

        return <React.Fragment>
            <Route path="/" exact component={HomePage}/>
            <Route path="/about" exact component={AboutPage}/>
        </React.Fragment>
    }
}

export default App;
