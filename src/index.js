import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import store from "./redux/state";

let rerenderEntireTree = (state) => {

    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={store.getState()} addPost={store.addPost.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)} updateNewMessageText={store.updateNewMessageText.bind(store)} addMessage={store.addMessage.bind(store)}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
rerenderEntireTree(store.getState());
reportWebVitals();

store.subscribe(rerenderEntireTree);