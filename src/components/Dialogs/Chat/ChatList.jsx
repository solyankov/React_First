import React from 'react';
import s from './ChatList.module.css'
import MessageItem from "./MessageItem/MessageItem";
const ChatList=(props)=>{



    let messageItems = props.messages.map(m=><MessageItem text={m.text} id={m.id}/>)

    return(
        <div className={s.ChatAll}>
            {messageItems}
        </div>
    )
}

export default ChatList