import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import {render} from 'react-dom';
import Header from './components/Header/Header';
import './../src/assets/style/style.less';
import Button from './components/UI/Button';
import Input from './components/UI/Input';
import Footer from './components/Footer/Footer';




const App = () => {
    const [theme, setTheme] = useState('outlined');
    const [container, setContainer] = useState('outlinedContainer');
    const switchTheme = (event) => {
        setTheme(event.currentTarget.value);
        if(event.currentTarget.value === 'outlined') {
            setContainer('outlinedContainer');
        } else if (event.currentTarget.value === 'filled') {
            setContainer('filledContainer');
        } else if (event.currentTarget.value === 'gray') {
            setContainer('grayContainer');
        }
    };
    return (        
        <BrowserRouter>
            <Header headerContainer='headerContainer'/>
            <select className='theme-block' onChange={switchTheme}>
                <option value='outlined' >Outlined</option>
                <option value='filled'>filled</option>
                <option value='gray'>gray</option>
            </select>            
            <div>React Component fron Webpack</div>
            <Button type={theme} text='Download'/>
            <Input style={theme} nameContainer={container}/>
            <Footer />
        </BrowserRouter>
    )
}

render(<App />, document.getElementById('root'))