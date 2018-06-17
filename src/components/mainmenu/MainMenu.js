import React, {Component} from 'react';
import 'main-menu.css';

class MainMenu extends Component {


    render() {
        return <div className="main-menu-container">
            <div className="main-menu__opener">menu</div>
            <div className="main-menu">

                <div className="main-menu__closer">close</div>
            </div>
        </div>
    }

}