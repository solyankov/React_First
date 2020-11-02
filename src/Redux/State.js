import DialogsReducer from "./DialogsReducer";
import ProfileReducer from "./profileReducer";

const UPDATE_POST_AREA = 'UPDATE-POST-AREA'
const ADD_POST = 'ADD-POST'

export const ADD_MESSAGE = 'ADD-MESSAGE'
export const UPDATE_MESSAGE_TEXT = 'UPDATE_MESSAGE_TEXT'


let store={
    _state:{
        ProfilePage : {posts : [
                {text: 'Hello, its post 1', id: 1},
            ],
            NewPostText : 'From State',
        },

        DialogsPage : {dialogs : [
                {name : 'Anna', id : 1,img:'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'},
                {name : 'Masha', id : 1,img:'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'},
                {name : 'Petro', id : 1,img:'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'},
            ],

            messages : [
                {text : 'Hello, it`s fHello, it`s first messageHello, it`s first messageHello, it`s first messageHello, it`s first messageHello, it`s first messageHello, it`s first messageHello, it`s first messageirst message', id : 1},
                {text : 'Hello, it`s first message', id : 1},

            ],
            NewMessageText : ''
        },
    },


    getState(){return this._state},
    _renderEntireTree(){},
    subscribe(observer){
        this._renderEntireTree=observer
    },

    dispatch(action){
        this._state.DialogsPage=DialogsReducer(this._state.DialogsPage, action)
        this._state.ProfilePage=ProfileReducer(this._state.ProfilePage, action)
        this._renderEntireTree()
    }
}





export default store