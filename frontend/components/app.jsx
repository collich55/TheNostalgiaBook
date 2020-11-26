import React from "react";
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import GreetingContainer from "./greeting/greeting_container";
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import ProfileContainer from "./profile/profile_container";
import friendship_index_container from "./friendship/friendship_index_container";
import Modal from './modal/modal';
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
        <div id="all">
            {/* <div id="modal">
                <Modal />
            </div> */}
        
            <header id="head">
                <h1>The Nostalgia Book</h1>
            </header>
            
                <AuthRoute path="/" component={Modal} />
                <Route path="/" component={GreetingContainer}/>
                {/* <AuthRoute path="/" component={SignUpFormContainer} /> */}
                <ProtectedRoute path="/users/:userId" component={ProfileContainer} />
                
            
            {/* {this.checkSignIn()} */}
            {/* <button onClick={this.handleModalButton}  > Modal </button> */}


        </div>
        )
    }
};

export default App;


