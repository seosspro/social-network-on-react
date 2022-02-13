import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

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
            newMessageBody: "",
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
        this.getState().profilePage = profileReducer(
            this.getState().profilePage,
            action
        );
        this.getState().dialogsPage = dialogsReducer(
            this.getState().dialogsPage,
            action
        );
        this.getState().sidebar = sidebarReducer(
            this.getState().sidebar,
            action
        );

        this._callSubscriber(this.getState());
    },
};

export default store;
window.store = store;
