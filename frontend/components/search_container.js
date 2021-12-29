import { connect } from "react-redux";
import { fetchBenches } from "../actions/bench_actions";
import Search from "./search";
import { updateBounds } from "../actions/filter_actions";

const mSTP = state => ({
    benches: Object.values(state.entities.benches)
})

const mDTP = dispatch => ({
    fetchBenches: () => dispatch(fetchBenches()),
    updateBounds: (bounds) => dispatch(updateBounds(bounds))
})

export default connect(mSTP, mDTP)(Search); 