import React from 'react';
import s from './DialogsList.module.css'
import DialogItem from "./DialogItem/DialogItem";
const DialogsList=(props)=>{

    let dialogsItems=props.dialogs.map(d=><DialogItem name={d.name} id={d.id} img={d.img}/>)

    return(
        <div className={s.DialogsList}>
            {dialogsItems}
        </div>
    )
}

export default DialogsList