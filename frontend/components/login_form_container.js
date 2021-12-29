import { connect } from "react-redux";
// import { withRouter } from "react-router-dom";
import { login } from "../actions/session_actions";
import SessionForm from "./session_form";

const mSTP = state => ({
    errors: Object.values(state.errors.session),
    loggedIn: Boolean(state.session.id),
    formType: 'Log in'
});

const mDTP = dispatch => ({
    processForm: (userData) => dispatch(login(userData))
});

export default connect(mSTP, mDTP)(SessionForm);