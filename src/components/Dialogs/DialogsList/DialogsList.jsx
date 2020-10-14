import React from 'react';
import s from './DialogsList.module.css'
import DialogItem from "./DialogItem/DialogItem";
const DialogsList=()=>{
    let dialogs =[
        {name : 'Anna', id : 1},
        {name : 'Serhiy', id : 2},
        {name : 'Valera', id : 3},
        {name : 'Dmitro', id : 4},
    ]
    let dialogsItems=dialogs.map(d=><DialogItem name={d.name} id={d.id}/>)

    return(
        <div className={s.DialogsList}>
            {dialogsItems}
        </div>
    )
}

export default DialogsList