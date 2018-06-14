import React from 'react';
import {Route} from 'react-router-dom';
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import './App.css';


const App = ()=><div className="App">
    <Route path="/" exact component={HomePage}/>
    <Route path="/about" exact component={AboutPage}/>
</div>

export default App;
