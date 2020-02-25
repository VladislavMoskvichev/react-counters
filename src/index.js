import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
// import {store} from "./Components/ReduxCounter";
import {createStore} from "redux";

const initialState = {
    count: 0
};
const reducer = (state = initialState, action) => {
    if (action.type === 'INCREMENT') return {count: state.count + 1};
    if (action.type === 'DECREMENT') return {count: state.count - 1};
    return state;
};
const store = createStore(reducer);
store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'DECREMENT'});

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>,

    document.getElementById('root'));


serviceWorker.unregister();
