import { connect } from "react-redux";
// import { withRouter } from "react-router-dom";
import { signup } from "../actions/session_actions";
import SessionForm from "./session_form";

const mSTP = state => ({
    errors: Object.values(state.errors.session),
    loggedIn: Boolean(state.session.id),
    formType: 'Sign up'
});

const mDTP = dispatch => ({
    processForm: user => dispatch(signup(user))
});

export default connect(mSTP, mDTP)(SessionForm);