import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <header className="header">
            <div className="inside_header">

                <nav className="navbar">
                    <NavLink exact to="/" activeClassName="active">
                        About
                    </NavLink>
                    <NavLink to="/resume" activeClassName="active">
                        Resume
                    </NavLink>
                    <NavLink to="/projects" activeClassName="active">
                        Projects
                    </NavLink>
                    <NavLink to="/contact" activeClassName="active">
                        Contact
                    </NavLink>
                </nav>


            </div>
        </header>
    )
}

export default Header
