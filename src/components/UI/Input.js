import React from 'react';
import './Input.less';

const Input = ({style,nameContainer}) => {
    return(
        <div className={nameContainer}>
            <input type='email' className={'inputEmail'} placeholder='Email'/> 
            <input type="button" className={style} />
        </div> 
    )
}

export default Input;