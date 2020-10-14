import React from 'react';
import s from './Dialogs.module.css'
import DialogsList from "./DialogsList/DialogsList";
import ChatList from "./Chat/ChatList";

const DialogsPage=()=>{
    return(
        <div className={s.DialogMain}>
            <DialogsList/>
            <ChatList/>
        </div>
    )
}

export default DialogsPage