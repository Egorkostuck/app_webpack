import React from 'react';
import {NavLink} from 'react-router-dom';
import './Nav.less'

const Nav = ({navContainer}) => {
    return (
        <nav className={navContainer}>
            <NavLink to='#'>
                Products
            </NavLink>
            <NavLink to='#'>
                About
            </NavLink>
            <NavLink to='#'>
                blog
            </NavLink>
            <NavLink to='#'>
                Contact
            </NavLink>
        </nav>
    )
}

export default Nav;