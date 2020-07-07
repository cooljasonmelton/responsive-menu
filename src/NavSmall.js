import React, {useState} from 'react';
import './App.css';
import NavOptions from './NavOptions';

const NavSmall = () => {
    const [toggleMenu, setToggleMenu] = useState(false)

    const handleToggle = () => {
        setToggleMenu(!toggleMenu)
    }
    return (
        <nav className="nav-small">
            <button className="nav-small-button" onClick={handleToggle}>
                Menu
            </button>
            {toggleMenu 
                ? <NavOptions handleToggle={this.handleToggle}/>
                    : ""}
        </nav>
    )
}

export default NavSmall;
