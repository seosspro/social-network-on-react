const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: "1", message: "Hi, i`m developer.", likesCount: 10000 },
                { id: "2", message: "Hi, guys", likesCount: 0 },
                { id: "3", message: "Shut up!", likesCount: 1337 },
                { id: "4", message: "4UPAPIMUNYANYA", likesCount: 1488 },
                { id: "5", message: "Hey!", likesCount: 228 },
            ],
            newPostText: "seossProject.",
        },

        dialogsPage: {
            messages: [
                { id: "1", message: "Хай" },
                { id: "2", message: "Ку" },
                { id: "3", message: "-_-" },
                { id: "4", message: "-.-" },
                { id: "5", message: "чо" },
            ],

            dialogs: [
                { id: "1", name: "Серега" },
                { id: "2", name: "Валера" },
                { id: "3", name: "Жека" },
                { id: "4", name: "Андрей" },
                { id: "5", name: "Макс" },
            ],
        },

        sidebar: [
            { name: "Серега" },
            { name: "Валера" },
            { name: "Жека" },
            { name: "Андрей" },
            { name: "Макс" },
        ],
    },

    getState() {
        this.dispatch = this.dispatch.bind(this); // привязал контекст
        return this._state;
    },
    _callSubscriber() {},

    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        if (action.type === "ADD-POST") {
            let newPost = {
                id: 5,
                message: this.getState().profilePage.newPostText,
                likesCount: 0,
            };
            this.getState().profilePage.posts.push(newPost);
            this.getState().profilePage.newPostText = "";
            this._callSubscriber(this.getState());
        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this.getState().profilePage.newPostText = action.newText;
            this._callSubscriber(this.getState());
        }
    },
};

export let addPostActionCreator = () => ({
    type: ADD_POST,
});

export let updateNewPostTextActionCreator = text => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
});

export default store;
window.store = store;
