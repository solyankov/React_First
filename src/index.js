import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import state from "./Redux/State";
import {renderEntireTree} from "./render";


renderEntireTree(state)




serviceWorker.unregister();
