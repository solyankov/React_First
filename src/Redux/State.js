import {renderEntireTree} from "../render";

let state={
    ProfilePage : {posts : [
            {text: 'Hello, its post 1', id: 1},

        ],},

    DialogsPage : {dialogs : [
            {name : 'Anna', id : 1,img:'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'},
            {name : 'Masha', id : 1,img:'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'},
            {name : 'Petro', id : 1,img:'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'},


        ],

        messages : [
            {text : 'Hello, it`s fHello, it`s first messageHello, it`s first messageHello, it`s first messageHello, it`s first messageHello, it`s first messageHello, it`s first messageHello, it`s first messageirst message', id : 1},
            {text : 'Hello, it`s first message', id : 1},
            {text : 'Hello, it`s first message', id : 1},
            {text : 'Hello, it`s first message', id : 1},
            {text : 'Hello, it`s second message', id : 2},
        ],
    },


}

export let addPost=(text)=>{
    let NewPost={
        text: text,
        id: 5,
    }
    state.ProfilePage.posts.push(NewPost)
    renderEntireTree(state)
}
export default state