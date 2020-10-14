import React from 'react';
import s from './ChatList.module.css'
import MessageItem from "./MessageItem/MessageItem";
const ChatList=()=>{

    let messages=[
        {text : 'Hello, it`s first message', id : 1},
        {text : 'Hello, it`s second message', id : 2},
        {text : 'Hello, it`s third message', id : 3},
        {text : 'Hello, it`s fourth message', id : 4}
    ]

    let messageItems = messages.map(m=><MessageItem text={m.text} id={m.id}/>)

    return(
        <div className={s.ChatAll}>
            {messageItems}
        </div>
    )
}

export default ChatList