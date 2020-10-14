import React from 'react';
import s from './DialogItem.module.css'
import {NavLink} from "react-router-dom";
const DialogItem=(props)=>{
    return(
        <NavLink to="/dialogs">
        <div className={s.item}>
            {props.name} {props.id}
        </div>
        </NavLink>
    )
}

export default DialogItem