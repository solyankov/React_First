import React from 'react';
import s from './Content.module.css'
import AvaDescription from "./AvaDescription/AvaDescription";
import MyPosts from "./MyPosts/MyPosts";
const Content=()=>{
    return(
        <div className={s.Content}>
            <AvaDescription/>
            <MyPosts/>
        </div>
    )
}

export default Content