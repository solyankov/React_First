import React from 'react';
import s from './MessageItem.module.css'
const MessageItem=(props)=>{
    return(
        <div className={s.MessageItem}>
            {props.text} {props.id}
        </div>
    )
}

export default MessageItem