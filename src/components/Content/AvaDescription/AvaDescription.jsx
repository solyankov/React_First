import React from 'react';
import s from './AvaDescription.module.css'
import Ava from "./Ava/Ava";
import Description from "./Description/Description";
import HeaderPhoto from "./HeaderPhoto/HeaderPhoto";

const AvaDescription=()=>{
    return(
        <div className={s.AvaDescription}>
            <HeaderPhoto/>
            <Ava/>
            <Description/>
        </div>
    )
}

export default AvaDescription