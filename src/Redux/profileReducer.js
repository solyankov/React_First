const UPDATE_POST_AREA = 'UPDATE-POST-AREA'
const ADD_POST = 'ADD-POST'

let initialState={posts : [
        {text: 'Hello, its post 1', id: 1},
    ],
    NewPostText : '',
}

const ProfileReducer=(state = initialState, action)=>{
    switch (action.type){
        case ADD_POST :
            let NewPost={
                text: state.NewPostText,
                id: 5,
            }
            state.posts.unshift(NewPost)
            state.NewPostText=''
            return state;

        case UPDATE_POST_AREA :
            state.NewPostText=action.NewText;
            return state;
        default : return state
    }
}

export const addPostActionCreator=()=>{
    return {type : ADD_POST}
}

export const updatePostAreaActionCreator=(text)=>{
    return{type: UPDATE_POST_AREA, NewText: text}
}

export default ProfileReducer