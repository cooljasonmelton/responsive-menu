import React from 'react';
import './App.css';

class Navbar extends React.Component {
    state = { activeItem: "home" }
    handleClick = e => {
        console.log(e.target.className)
    }
    render(){
        const { activeItem } = this.state
        return (
            <nav className="navbar">
                <a 
                href="#" 
                className={"nav-item" + activeItem === "home" ? " clicked": ""}
                onClick={this.handleClick}>
                    Home
                </a>
                <a href="#" className="nav-item stega">
                    Stegasaurus
                </a>
                <a href="#" className="nav-item trex">
                    T-Rex
                </a>
                <a href="#" className="nav-item flyingone?">
                    Flying One?
                </a>
            </nav>
        );
    }
}

export default Navbar;
