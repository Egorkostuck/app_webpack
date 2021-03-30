import React from 'react';
import logo from './../../img/Landing.png';
import shape from './../../img/Shape.svg';
import './Header.less';
import Nav from './../Nav/Nav.js';

const Header = ({headerContainer}) => {
    return (
        <section className={headerContainer}>
            <div>
                <img src={logo} alt='logo'/>
            </div>           
           <Nav navContainer='navContainer'/>
           <div className={'shapeContainer'}>                
                <img src={shape} alt='shape-icon'/>
           </div>
        </section>
    )
}

export default Header