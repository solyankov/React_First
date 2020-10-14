import React from 'react';
import s from './MessageItem.module.css'
const MessageItem=(props)=>{
    return(
        <div className={s.MessageItem}>
            {props.text}
        </div>
    )
}

export default MessageItem