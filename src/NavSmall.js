import React from 'react';
import './App.css';
import { withRouter } from 'react-router-dom';
import NavOptions from './NavOptions';

class NavSmall extends React.Component {
    constructor(){
        super()
        this.state = { toggleMenu: false }
    }


    handleToggle = () => {
        this.setState(prevState => ({ 
            toggleMenu: !prevState.toggleMenu 
        }))
    }

    render(){
        const { toggleMenu } = this.state
        return (
            <nav className="nav-small">
                <button className="nav-small-button" onClick={this.handleToggle}>Menu</button>
                {toggleMenu ?
                <NavOptions/>
                :
                ""
                }
            </nav>
        );
    }
}

export default withRouter(NavSmall);