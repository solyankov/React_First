import React from 'react';
import s from './Dialogs.module.css'
import DialogsList from "./DialogsList/DialogsList";
import ChatList from "./Chat/ChatList";


const DialogsPage=(props)=>{
    return(
        <div className={s.DialogMain}>
            <DialogsList dialogs={props.state.DialogsPage.dialogs}/>
            <ChatList  messages={props.state.DialogsPage.messages}
                       NewMessageText={props.NewMessageText}
                       dispatch={props.dispatch}/>
        </div>
    )
}

export default DialogsPage