import React from 'react';
import s from './Post.module.css'
const Post=(props)=>{
    return(
        <div className={s.Post}>
           <p> {props.text}</p>
        </div>
    )
}

export default Post