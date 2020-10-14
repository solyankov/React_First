import React from 'react';
import s from './DialogItem.module.css'
import {NavLink} from "react-router-dom";
const DialogItem=(props)=>{
    return(
        <NavLink to="/dialogs" className={s.nav} >
        <div className={s.item}>
            <img src={props.img}/>
            <div className={s.name}>{props.name}</div>
        </div>
        </NavLink>
    )
}

export default DialogItem