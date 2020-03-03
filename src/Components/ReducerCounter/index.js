import React, { useReducer } from 'react';

const initialState = {
  count: 0,
};

function countReducer(state = initialState, action) {
  switch (action.type) {
      case 'increment':
      return { ...state, count: state.count + 1 };
      case 'decrement':
      return  {...state, count: state.count - 1 };
    default:
      return state;
  }
}

function ReducerCounter() {
    const [state, dispatch] = useReducer(countReducer, initialState);
  return (
        <div className="flexWrapper">
            <p>useReducer Counter</p>
            <h1 className="digit">
                {state.count}
            </h1>
            <div className="buttons">
                <button onClick={() => dispatch({ type: 'increment' })} className="button plus">
                    +
                </button>
                <button onClick={() => (state.count > 0 ? dispatch({ type: 'decrement' }) : null)} className="button substr">
                    -
                </button>
            </div>
        </div>
  );
}

export default ReducerCounter;
