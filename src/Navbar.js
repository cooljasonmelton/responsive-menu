import React from 'react';
import './App.css';

class Navbar extends React.Component {
    state = { activeItem: "home" }
    handleClick = e => {
        console.log(e.target.nav)

    }
    render(){
        const { activeItem } = this.state
        return (
            <nav className="navbar">
                <button className="nav-item" onClick={this.handleClick} nav="nav">
                    yo
                </button>

            </nav>
        );
    }
}

export default Navbar;
