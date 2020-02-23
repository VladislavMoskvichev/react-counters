import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import {store} from "./Components/ReduxCounter";

let rerender = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App/>
        </BrowserRouter>,

        document.getElementById('root'));
};

rerender(store.getState());
store.subscribe(rerender);

serviceWorker.unregister();
