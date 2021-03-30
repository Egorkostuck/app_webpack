import React, {useContext} from 'react';
import './button.less';
import Store from './../../context';

const Button = ({text}) => {
    const currentTheme = useContext(Store)
    return (
        <button className={currentTheme}>{text}</button>
    );
};

export default Button;