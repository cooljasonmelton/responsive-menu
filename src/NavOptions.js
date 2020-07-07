import React from 'react';
import './App.css';
import { withRouter } from 'react-router-dom';



class NavOptions extends React.Component {
    constructor(){
        super()
        this.state = {
            activeItem: "home"
        }
    }

    handleClick = e => {
        // close menu drop down
        if (this.props.handleToggle){
            this.props.handleToggle()
        }

        // push to route
        let clickedNav = e.target.getAttribute("nav")
        this.setState({activeItem: clickedNav })
        if (clickedNav === 'home') {
            this.props.history.push('/')
            window.location.reload()
         } else {
            this.props.history.push(`${clickedNav}`)
        }
    }

    renderNavOptions = ()=> {      
        const navOptions = ["home", "t-rex", "stegasaurus", "triceratops"]
        const { activeItem } = this.state
        return navOptions.map(option => {
            return (
                <div 
                className={"nav-option" + (activeItem === option ? " clicked" : "")} 
                onClick={this.handleClick} 
                nav={option}
                key={option}
                >
                    {option}
                </div>
            )
        })
    }

    render(){
        return (
            <>
            {this.renderNavOptions()}
            </>
        );
    }
}

export default withRouter(NavOptions);






