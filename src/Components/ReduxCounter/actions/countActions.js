import {store} from "../store/store";

export const actionIncrementCount = () => {
    store.dispatch({type: 'INCREMENT'})
};
export const actionDecrementCount = () =>  {
    store.dispatch({type: 'DECREMENT'})
};
