import { RECEIVE_BENCHES } from "../actions/bench_actions";
import { RECEIVE_ERRORS } from "../actions/session_actions";

const benchesReducer = (state = {}, action) => {
    
    Object.freeze(state);

    switch (action.type) {
        default:
            return state;
        case RECEIVE_BENCHES:
            return action.benches;
    }
}

export default benchesReducer;