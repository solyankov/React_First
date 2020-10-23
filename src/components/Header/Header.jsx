import React from 'react';
import s from './Header.module.css';
const Header = ()=>{
    return (
        <div className={s.Header}>
            <div className={s.HeaderWrapper}>
                <img src='https://upload.wikimedia.org/wikipedia/commons/9/91/Quechua_company_logo.png' />
            </div>
        </div>
        )
}

export default Header
