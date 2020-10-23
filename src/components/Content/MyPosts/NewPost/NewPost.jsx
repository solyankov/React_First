import React from 'react';
import s from './NewPost.module.css'
import {addPostActionCreator, updatePostAreaActionCreator} from "../../../../Redux/profileReducer";

const NewPost=(props)=>{



    let newPostElement = React.createRef()

    let addPost=()=>{
        props.dispatch(addPostActionCreator())
    }

    let OnPostChange=()=>{
        let text=newPostElement.current.value
        props.dispatch(updatePostAreaActionCreator(text))
    }


    return(
        <div className={s.NewPost}>
            <textarea onChange={OnPostChange}  value={props.newPostText} ref={newPostElement}/>

            <button onClick={addPost}>Send</button>
        </div>
    )

}

export default NewPost