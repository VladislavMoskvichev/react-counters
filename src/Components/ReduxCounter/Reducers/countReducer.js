import {initialState} from "../store/store";
import {DECREMENT, INCREMENT} from "../actions/countActions";

export const countReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {...state, count: state.count + 1};
        case DECREMENT:
            return {...state, count: state.count - 1};
        default:
            return state;
    }
};

