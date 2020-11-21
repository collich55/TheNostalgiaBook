import React from "react";
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import GreetingContainer from "./greeting/greeting_container";
import {Route} from "react-router-dom";
import { AuthRoute } from '../util/route_util';

const App = () => (
    <div id="all">
        <header id="head">
            <h1>The Nostalgia Book</h1>
            <GreetingContainer />
            
        </header>
        <AuthRoute path="/login" component={LogInFormContainer} />
        <AuthRoute path="/signup" component={SignUpFormContainer} />
    </div>
);

export default App;


