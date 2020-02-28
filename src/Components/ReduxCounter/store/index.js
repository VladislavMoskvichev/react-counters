import {createStore} from "redux";
import {countReducer} from "../Reducers/countReducer";
export const initialState = {
    count: 0
};

export const store = createStore(countReducer, initialState);