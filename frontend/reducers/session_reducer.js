import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session_actions";

const defaultState = {id: null};

const sessionReducer = (state = defaultState, action) => {
    
    Object.freeze(state);

    switch (action.type) {
        default:
            return state;
        case RECEIVE_CURRENT_USER:
            return {id: action.user.id};
        case LOGOUT_CURRENT_USER:
            return defaultState;
    }
}

export default sessionReducer;