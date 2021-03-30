import React, { useEffect, useState } from 'react';
import {useCookies} from 'react-cookie';
import { BrowserRouter } from 'react-router-dom';
import {render} from 'react-dom';
import Header from './components/Header/Header';
import './../src/assets/style/style.less';
import Button from './components/UI/Button';
import Input from './components/UI/Input';
import Footer from './components/Footer/Footer';
import Store from './context';




const App = () => {
    const [cookie, setCookie] = useCookies(['theme']);
    const [theme, setTheme] = useState(cookie.theme || 'outlined');    
    const switchTheme = (event) => {
        const themeLocal = event.currentTarget.value;
        setTheme(themeLocal);
        setCookie('theme', themeLocal);
    };

    return (        
        <BrowserRouter>
            <Store.Provider value={theme}>
                <Header headerContainer='headerContainer'/>
                <select className='theme-block' onChange={switchTheme}>
                    <option value='outlined' >Outlined</option>
                    <option value='filled'>filled</option>
                    <option value='gray'>gray</option>
                </select>            
                <div>React Component fron Webpack</div>
                <Button text='Download'/>
                <Input />
                <Footer />
            </Store.Provider>
        </BrowserRouter>
    )
}

render(<App />, document.getElementById('root'))