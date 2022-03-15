import { combineReducers, createStore } from 'redux';
import sidebarReducer from './sidebarReducer';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import usersReducer from './usersReducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    users: usersReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;
