import React from 'react';
import s from './Dialogs.module.css'
import DialogsList from "./DialogsList/DialogsList";
import ChatList from "./Chat/ChatList";


const DialogsPage=(props)=>{
    return(
        <div className={s.DialogMain}>
            <DialogsList dialogs={props.dialogs}/>
            <ChatList  messages={props.messages}/>
        </div>
    )
}

export default DialogsPage