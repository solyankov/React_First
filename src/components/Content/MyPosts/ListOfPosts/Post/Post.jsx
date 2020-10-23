import React from 'react';
import s from './Post.module.css'
const Post=(props)=>{
    return(
        <div className={s.Post}>
           <span> {props.text}</span>
        </div>
    )
}

export default Post