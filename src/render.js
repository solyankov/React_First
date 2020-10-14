import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import {addPost} from "./Redux/State";

import {BrowserRouter} from "react-router-dom";


export let renderEntireTree = (state)=> {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}