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
                message: store.getState().profilePage.newPostText,
                likesCount: 0,
            };
            store.getState().profilePage.posts.push(newPost);
            store.getState().profilePage.newPostText = "";
            store._callSubscriber(store.getState());
        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            store.getState().profilePage.newPostText = action.newText;
            store._callSubscriber(store.getState());
        }
    },
};

export default store;
window.store = store;
