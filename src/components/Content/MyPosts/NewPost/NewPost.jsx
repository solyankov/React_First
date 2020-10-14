import React from 'react';
import s from './NewPost.module.css'
const NewPost=(props)=>{

    let newPostElement = React.createRef()

    let addPost=()=>{
        props.addPost(newPostElement.current.value)
    }

    return(
        <div className={s.NewPost}>
            <input placeholder='Enter your post' ref={newPostElement}/>
            <button onClick={addPost}>Send</button>
        </div>
    )
}

export default NewPost