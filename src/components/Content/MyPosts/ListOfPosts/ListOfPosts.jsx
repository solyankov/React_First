import React from 'react';
import s from './ListOfPost.module.css'
import Post from "./Post/Post";
const ListOfPosts=(props)=>{



    let postsItem=props.posts.map(p=><Post text={p.text} id={p.id}/>)

    return(
        <div>
            {postsItem}
        </div>
    )
}

export default ListOfPosts