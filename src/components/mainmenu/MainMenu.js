import React, {Component} from 'react';
import './main-menu.css';

class MainMenu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isOpen:false
        }
    
    }

    componentDidMount()
    {
        document.title = 'Minimalistic markdown editor';
    }

    /**
     * Toggles the isOpen status to it's current opposite
     */
    toggle = ()=>{
        this.setState({
            isOpen:!this.state.isOpen
        })
    }


    render() {

        let containerClasses = "main-menu-container";

        if(true === this.state.isOpen) {
            containerClasses +=" main-menu-container--is-open";
        }


        return <div className={containerClasses}>
            <div className="main-menu__opener" onClick={this.toggle}>menu</div>
            <div className="main-menu">
                <div className="main-menu__closer" onClick={this.toggle}>close</div>
            </div>
        </div>
    }

}

export default MainMenu;