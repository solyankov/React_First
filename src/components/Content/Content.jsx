import React from 'react';
import s from './Content.module.css'
import AvaDescription from "./AvaDescription/AvaDescription";
import MyPosts from "./MyPosts/MyPosts";

const Content=(props)=>{
    return(
        <div className={s.Content}>
            <AvaDescription/>
            <MyPosts posts={props.posts}
                     dispatch={props.dispatch}
                     newPostText={props.NewPostText}
                     />
        </div>
    )
}

export default Content