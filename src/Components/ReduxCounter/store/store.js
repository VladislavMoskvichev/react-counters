import {createStore} from "redux";
import {countReducer} from "../Reducers/countReducer";

export const store = createStore(countReducer);