import React from 'react';
import s from './AvaDescription.module.css'
import Ava from "./Ava/Ava";
import Description from "./Description/Description";
import HeaderPhoto from "./HeaderPhoto/HeaderPhoto";

const AvaDescription=()=>{
    return(
        <div className={s.AvaDescription}>
            <HeaderPhoto/>
            <div className={s.AvaDes}>
                <Ava/>
                <Description/>
            </div>
        </div>
    )
}

export default AvaDescription