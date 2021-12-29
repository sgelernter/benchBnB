import React from "react";
import App from "./App";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
// import { Routes } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import SignupFormContainer from "./signup_form_container";
import LoginFormContainer from "./login_form_container";

const Root = ( {store} ) => (
    <Provider store={store}>
        <HashRouter>
            <App />
                <Route path="/signup" component={SignupFormContainer} />
                <Route path="/login" component={LoginFormContainer} />
        </HashRouter>
    </Provider>
);

export default Root;