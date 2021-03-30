import React, {useContext} from 'react';
import logo from './../../img/Landing.png';
import shape from './../../img/Shape.svg';
import './Header.less';
import Nav from './../Nav/Nav.js';
import Store from './../../context';

const Header = ({headerContainer}) => {
    const currentTheme = useContext(Store);
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