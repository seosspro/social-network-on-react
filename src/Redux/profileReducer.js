const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
    posts: [
        { id: "1", message: "Hi, i`m developer.", likesCount: 10000 },
        { id: "2", message: "Hi, guys", likesCount: 0 },
        { id: "3", message: "Shut up!", likesCount: 1337 },
        { id: "4", message: "4UPAPIMUNYANYA", likesCount: 1488 },
        { id: "5", message: "Hey!", likesCount: 228 },
    ],
    newPostText: "seossProject.",
};

const profileReducer = (state = initialState, action) => {
    if (action.type === ADD_POST) {
        let newPost = {
            id: 5,
            message: state.newPostText,
            likesCount: 0,
        };
        let stateCopy = {
            ...state,
        };
        stateCopy.posts = [...state.posts];
        stateCopy.posts.push(newPost);
        stateCopy.newPostText = "";
        return stateCopy;
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        let stateCopy = {
            ...state,
        };
        stateCopy.newPostText = action.newText;
        return stateCopy;
    }
    return state;
};

export const addPostActionCreator = () => ({
    type: ADD_POST,
});
export const updateNewPostTextActionCreator = text => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
});

export default profileReducer;
