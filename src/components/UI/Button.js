import React from 'react';
import './button.less';

const Button = ({type, text}) => {

    return (
        <button className={type}>{text}</button>
    );
};


export default Button;