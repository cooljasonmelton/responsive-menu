import React from 'react';
import './App.css';
import { withRouter } from 'react-router-dom';

class SmallNavOptions extends React.Component {
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
        return (
        <>
        <div 
            className="small-nav-option"
            onClick={this.handleClick} 
            nav="home"
        >
            home
        </div>
        <div
            className="small-nav-option"
            onClick={this.handleClick}
            nav="rex"
        >
            t-rex
        </div>
        <div 
            className="small-nav-option"
            onClick={this.handleClick} 
            nav
        >
            stegasaurus
        </div>
        <div 
            className="small-nav-option"
            onClick={this.handleClick} 
        >
            flying one
        </div>
        </>
        );
    }
}

export default withRouter(SmallNavOptions);
