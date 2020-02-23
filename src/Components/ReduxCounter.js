import React from 'react';
import {createStore} from "redux";

const reducer = (state = 0, action) => {
    if (action.type === 'inc') return state + 1;
    if (action.type === 'dec' && state > 0) return state - 1;
    return state;
};

export const store = createStore(reducer);

function ReduxCounter() {
    return (
        <div className="flexWrapper">
            <p>Redux Counter</p>
            <h1 className="digit">
                {store.getState()}
            </h1>
            <div className="buttons">
                <button onClick={() => store.dispatch({type: 'inc'})} className="button plus">
                    +
                </button>
                <button onClick={() => store.dispatch({type: 'dec'})} className="button substr">
                    -
                </button>
            </div>
        </div>
    );
}

export default ReduxCounter;
