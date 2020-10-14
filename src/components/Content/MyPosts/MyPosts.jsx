import React from 'react';
import s from './MyPosts.module.css'
import NewPost from "./NewPost/NewPost";
import ListOfPosts from "./ListOfPosts/ListOfPosts";
const MyPosts=()=>{
    return(
        <div className={s.MyPosts}>
            <NewPost/>
            <ListOfPosts/>
        </div>
    )
}

export default MyPosts