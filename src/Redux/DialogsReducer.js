export const ADD_MESSAGE = 'ADD-MESSAGE'
export const UPDATE_MESSAGE_TEXT = 'UPDATE_MESSAGE_TEXT'

const DialogsReducer=(state, action)=>{

    switch (action.type){
        case ADD_MESSAGE :
            let NewMessage={
                text: state.NewMessageText,
                id: 5,
            }
            state.messages.push(NewMessage)
            state.NewMessageText=''
            return state;
        case UPDATE_MESSAGE_TEXT :
            state.NewMessageText=action.NewText;
            return state;
        default : return state;
    }
}

export const AddMessageActionCreator=()=>{
    return {type : ADD_MESSAGE}
}

export const updateMessageTextActionCreator=(text)=>{
    return{type: UPDATE_MESSAGE_TEXT, NewText: text}
}

export default DialogsReducer