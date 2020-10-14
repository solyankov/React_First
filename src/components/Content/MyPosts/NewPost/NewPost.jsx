import React from 'react';
import s from './NewPost.module.css'
const NewPost=()=>{
    return(
        <div className={s.NewPost}>
            <input placeholder='Enter your post'/>
            <button>Send</button>
        </div>
    )
}

export default NewPost