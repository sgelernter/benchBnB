import { UPDATE_BOUNDS } from "../actions/filter_actions";

const filtersReducer = (state = {}, action) => {
    
    Object.freeze(state);

    switch (action.type) {
        default: 
            return state;
        case UPDATE_BOUNDS:
            return {bounds: action.bounds};
    }
}

export default filtersReducer;