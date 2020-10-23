const UPDATE_POST_AREA = 'UPDATE-POST-AREA'
const ADD_POST = 'ADD-POST'

const ProfileReducer=(state, action)=>{
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