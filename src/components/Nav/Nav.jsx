import React from 'react';
import s from './Nav.module.css'
import {NavLink} from "react-router-dom";
const Nav = ()=>{
    return(
        <div className={s.Nav}>
            <NavLink to='/profile'>
                <div className={s.item}>
                    Profile
                </div>
            </NavLink>

            <NavLink to='/dialogs'>
                <div className={s.item}>
                    Dialogs
                </div>
            </NavLink>

            <div className={s.item}>
                Profile1
            </div>
            <div className={s.item}>
                Profile2
            </div>
            <div className={s.item}>
                Profile3
            </div>
        </div>
    )
}
export default Nav
