import { createStore } from 'redux';
import { countReducer, initialState } from '../Reducers/countReducer';

export const store = createStore(countReducer, initialState);
