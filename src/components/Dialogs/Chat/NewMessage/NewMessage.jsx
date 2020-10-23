import React from "react";
import s from "./NewMessage.module.css";
import {AddMessageActionCreator, updateMessageTextActionCreator} from "../../../../Redux/DialogsReducer";

const NewMessage=(props)=>{
    let NewMessageElement=React.createRef()

    const OnTextAreaChange=()=>{
        let NewText=NewMessageElement.current.value
        props.dispatch(updateMessageTextActionCreator(NewText))
    }

    const SendMessage=()=>{
        props.dispatch(AddMessageActionCreator())
    }



    return(
        <div className={s.NewMessage}>
            <input
                ref={NewMessageElement}
                value={props.NewMessageText}
                onChange={OnTextAreaChange}
                placeholder='Enter your message'/>
            <button onClick={SendMessage} >Send</button>
        </div>
    )
}
export default NewMessage