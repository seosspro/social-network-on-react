import reportWebVitals from "./reportWebVitals";
import store from "./Redux/reduxStore";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

let rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider value={store}>
                    <App />
                </Provider>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById("root")
    );
};

store.subscribe(() => {
    rerenderEntireTree();
});
rerenderEntireTree();

reportWebVitals();
