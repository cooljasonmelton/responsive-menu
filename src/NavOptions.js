import React, {useState} from 'react';
import { withRouter } from 'react-router-dom';

//styling
import './App.css';

const NavOptions = (props) => {
    const {handleToggle, history} = props
    const [activeItem, setActiveItem] = useState('home')

    //navigation menu options
    const navOptions = [
        "home", 
        "t-rex", 
        "stegasaurus", 
        "triceratops"
    ]

    const handleClick = (e) => {
        //close menu drop down
        handleToggle && handleToggle()

        //push to route
        let clickedNav = e.target.getAttribute("nav")
        setActiveItem(clickedNav)
        clickedNav === 'home'
            ? history.push('/')
                : history.push(`${clickedNav}`)
    }

    return (
        navOptions.map(option => <div 
                className={"nav-option" + (activeItem === option ? " clicked" : '')}
                onClick={handleClick} 
                nav={option}
                key={option} 
            >
                {option}
            </div>
        )
    )
}

export default withRouter(NavOptions);






