import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from "../actions/session_actions";

const sessionErrorsReducer = (state = {}, action) => {

    Object.freeze(state);

    switch (action.type) {
        default: 
            return state;
        case RECEIVE_CURRENT_USER:
            return {};
        case RECEIVE_ERRORS:
            return action.errors;
    }
}

export default sessionErrorsReducer;