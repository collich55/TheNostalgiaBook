import React from "react";
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import GreetingContainer from "./greeting/greeting_container";
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import ProfileContainer from "./profile/profile_container";
import Homepage from "./homepage/homepage_container";
import Modal from './modal/modal';
import Bar from './navbar/navbar_container'
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';



class App extends React.Component {


    render() {
        return (
        <div>
            <div id={"navbar"}  >
                <ProtectedRoute path="/" component={Bar} />
            </div>
            
            <div id="all">
                <Route path="/" component={Modal} />
                <div className="logged-out-greeting">
                    <AuthRoute path="/" component={GreetingContainer} />
                    <AuthRoute path="/" component={LogInFormContainer} />
                </div>

                <Switch>
                    <ProtectedRoute path="/users/:userId" component={ProfileContainer} />
                    <ProtectedRoute path="/" component={Homepage} />
                </Switch>
            </div>
        </div>
        )
    }
};

export default App;


