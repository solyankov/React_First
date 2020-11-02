import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import ReactDOM from "react-dom";
import App from "./App";
import store from "./Redux/redux-store";
import {BrowserRouter} from "react-router-dom";

let renderEntireTree = (state)=> {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
store.subscribe(()=>{
    let state= store.getState()
    renderEntireTree(state)
})

renderEntireTree(store.getState())

serviceWorker.unregister()
