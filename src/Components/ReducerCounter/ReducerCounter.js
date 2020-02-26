import React, {useReducer} from 'react';

const countState = {
    count: 0
};

function reducer(state, action){
    if (action.type === 'inc') return {count: state.count + 1};
    if (action.type === 'dec') return {count: state.count - 1};
    return state;
}

function ReducerCounter() {
    const [state, dispatch] = useReducer(reducer, countState);
    return (
        <div className="flexWrapper">
            <p>useReducer Counter</p>
            <h1 className="digit">
                {state.count}
            </h1>
            <div className="buttons">
                <button onClick={() => dispatch({type: 'inc'})} className="button plus">
                    +
                </button>
                <button onClick={() => state.count > 0 ? dispatch({type: 'dec'}) : null} className="button substr">
                    -
                </button>
            </div>
        </div>
    );
}

export default ReducerCounter;
