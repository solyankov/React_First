import React from 'react';
import s from './ListOfPost.module.css'
import Post from "./Post/Post";
const ListOfPosts=()=>{

    let posts=[
        {text: 'Hello, its post 1', id: 1},
        {text: 'Hello, itsfghghggh post 2', id: 2},
        {text: 'Hello, its post 3', id: 3},
        {text: 'Hello, its post 4', id: 4},
    ]

    let postsItem=posts.map(p=><Post text={p.text} id={p.id}/>)

    return(
        <div>
            {postsItem}
        </div>
    )
}

export default ListOfPosts