import React from 'react';
import './App.css';
import { withRouter } from 'react-router-dom';

class Navbar extends React.Component {
    
    state = { activeItem: "home" }

    handleClick = e => {
        let clickedNav = e.target.getAttribute("nav")
        this.setState({activeItem: clickedNav })
        if (clickedNav === 'home') {
            this.props.history.push('/')
            window.location.reload()
         } else {
            this.props.history.push(`${clickedNav}`)
        }
    }

    render(){
        const { activeItem } = this.state
        return (
            <nav className="navbar">
                <div 
                    className={"nav-item" + (activeItem === "home" ? " clicked" : "")} 
                    onClick={this.handleClick} 
                    nav="home"
                >
                    home
                </div>
                <div 
                    className={"nav-item" + (activeItem === "rex" ? " clicked" : "")} 
                    onClick={this.handleClick} 
                    nav="rex"
                >
                    t-rex
                </div>
                <div 
                    className={"nav-item" + (activeItem === "steg" ? " clicked" : "")} 
                    onClick={this.handleClick} 
                    nav="steg"
                >
                    stegasaurus
                </div>
                <div 
                    className={"nav-item" + (activeItem === "fly" ? " clicked" : "")} 
                    onClick={this.handleClick} 
                    nav="fly"
                >
                    flying one
                </div>

            </nav>
        );
    }
}

export default withRouter(Navbar);
