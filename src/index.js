import reportWebVitals from "./reportWebVitals";
import store from "./Redux/State";
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
                    state={store.getState()}
                    dispatch={store.dispatch.bind()}
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

store.subscribe(rerenderEntireTree);
rerenderEntireTree(store.getState());

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
