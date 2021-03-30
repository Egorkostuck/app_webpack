import React from 'react';
import Input from './../UI/Input';
import './Footer.less';

const Footer = () => {
    const arrData = [
        {tittle: 'product', support: 'Support Developers', customer: 'Customer Service', guide: 'Ger Started Guide'},
        {tittle: 'company', support: 'Support Developers', customer: 'Customer Service', guide: 'Ger Started Guide'},
        {tittle: 'learn more', support: 'Support Developers', customer: 'Customer Service', guide: 'Ger Started Guide'}
    ];

    return(
        <section>
            <div className={'footerContainer'}>
                {arrData.map((block, index) => (
                    <div className={'footerBlock'}>
                        <h6 key={index}>{block.tittle}</h6>
                        <p key={index + 'p'}>{block.support}</p>
                        <p>{block.customer}</p>
                        <p>{block.guide}</p>
                    </div>
                ))}
                <div>
                    <h6>SUBSCRIBE TO NEWSLETTERS</h6>
                    <Input style={'outlined'} nameContainer={'outlinedContainer'}/>
                </div>   
            </div>
            <div className={'footerCorporation'}>
                <p>© 2020 Landing. All rights reserved.</p>
            </div>                   
        </section>
    )
}

export default Footer;