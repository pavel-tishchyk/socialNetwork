import {combineReducers, createStore, applyMiddleware} from "redux";
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import appReducer from './app-reducer';
import messagesReducer from "./message-reducer";
import profileReducer from "./profile-reducer";
import searchReducer from "./search-reducer";
import newsReducers from "./news-reducer";
import authReducer from "./auth-reducer";
import settingsReducer from './settings-reducer';

let reducers = combineReducers({
    form: formReducer,
    appData: appReducer,
    profilePage: profileReducer ,
    messagesPage : messagesReducer,
    searchPage: searchReducer,
    newsPage: newsReducers,
    authData: authReducer,
    settingsData: settingsReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;