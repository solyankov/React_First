import React from 'react';
import s from './MyPosts.module.css'
import NewPost from "./NewPost/NewPost";
import ListOfPosts from "./ListOfPosts/ListOfPosts";
const MyPosts=(props)=>{
    return(
        <div className={s.MyPosts}>
            <NewPost dispatch={props.dispatch}
                     newPostText={props.newPostText}
                     />
            <ListOfPosts posts={props.posts} />
        </div>
    )
}

export default MyPosts