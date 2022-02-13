import { combineReducers, createStore } from "redux";
import sidebarReducer from "./sidebarReducer";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
debugger;
let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
});

let store = createStore(reducers);

export default store;
