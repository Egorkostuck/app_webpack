import React, {useContext} from 'react';
import './Input.less';
import Store from './../../context';


const Input = () => {
    const currentTheme = useContext(Store);
    return(
        <div className={`${currentTheme}Container`}>
            <input type='email' className={'inputEmail'} placeholder='Email'/> 
            <input type="button" className={currentTheme} />
        </div> 
    )
}

export default Input;