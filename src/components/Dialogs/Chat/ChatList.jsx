import React from 'react';
import s from './ChatList.module.css'
import MessageItem from "./MessageItem/MessageItem";
import NewMessage from "./NewMessage/NewMessage";
const ChatList=(props)=>{

    let messageItems = props.messages.map(m=><MessageItem text={m.text} id={m.id}/>)

    return(
        <div className={s.ChatAll}>
            {messageItems}
            <NewMessage NewMessageText={props.NewMessageText}
                        dispatch={props.dispatch}/>
        </div>
    )
}

export default ChatList