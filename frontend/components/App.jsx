import React from "react";
import GreetingContainer from "./greeting_container";
import { Route } from "react-router-dom";
import { AuthRoute } from "../util/route_util";
import SignupFormContainer from "./signup_form_container";
import LoginFormContainer from "./login_form_container";

const App = () => (
    <div>
        <header>
            <h1>BENCH B 'N' ALSO ANOTHER B</h1> 
            <GreetingContainer />
        </header>
        <br/>
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <AuthRoute path="/login" component={LoginFormContainer} />
    </div>
)

export default App;