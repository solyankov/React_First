import React from 'react';
import s from './Post.module.css'
const Post=(props)=>{
    return(
        <div className={s.Post}>
            {props.text} {props.id}
        </div>
    )
}

export default Post