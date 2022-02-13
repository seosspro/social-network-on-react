import reportWebVitals from "./reportWebVitals";
import store from "./Redux/reduxStore";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

let rerenderEntireTree = state => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    store={store}
                    dispatch={store.dispatch.bind(store)}
                    posts={store.getState().profilePage.posts}
                    dialogs={store.getState().dialogsPage.dialogs}
                    messages={store.getState().dialogsPage.messages}
                    newPostText={store.getState().profilePage.newPostText}
                />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById("root")
    );
};

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});
rerenderEntireTree(store.getState());

reportWebVitals();
