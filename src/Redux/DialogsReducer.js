export const ADD_MESSAGE = 'ADD-MESSAGE'
export const UPDATE_MESSAGE_TEXT = 'UPDATE_MESSAGE_TEXT'

let initialState={dialogs : [
        {name : 'Anna', id : 1,img:'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'},
        {name : 'Masha', id : 1,img:'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'},
        {name : 'Petro', id : 1,img:'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'},
    ],

    messages : [
        {text : 'Hello, it`s fHello, it`s first messageHello, it`s first messageHello, it`s first messageHello, it`s first messageHello, it`s first messageHello, it`s first messageHello, it`s first messageirst message', id : 1},
        {text : 'Hello, it`s first message', id : 1},

    ],
    NewMessageText : ''
}


const DialogsReducer=(state = initialState, action)=>{

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