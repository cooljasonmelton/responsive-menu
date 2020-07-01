import React from 'react';
import './App.css';
import { withRouter } from 'react-router-dom';
import SmallNavOptions from './SmallNavOptions'

class SmallNav extends React.Component {
    constructor(){
        super()
        this.state = { toggleMenu: false }
    }


    handleToggle = () => {
        this.setState(prevState => ({ 
            toggleMenu: !prevState.toggleMenu 
        }))
    }

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
        const { toggleMenu } = this.state
        return (
            <nav className="small-nav">
                <button onClick={this.handleToggle}>Menu</button>
                {toggleMenu ?
                <SmallNavOptions/>
                :
                ""
                }
            </nav>
        );
    }
}

export default withRouter(SmallNav);
