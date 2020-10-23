import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import ReactDOM from "react-dom";
import App from "./App";
import store from "./Redux/State";
import {BrowserRouter} from "react-router-dom";

let renderEntireTree = ()=> {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()} dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
store.subscribe(renderEntireTree)
renderEntireTree()

serviceWorker.unregister()
