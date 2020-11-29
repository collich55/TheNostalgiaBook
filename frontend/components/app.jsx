import React from "react";
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import GreetingContainer from "./greeting/greeting_container";
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import ProfileContainer from "./profile/profile_container";
import friendship_index_container from "./friendship/friendship_index_container";
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
                {/* <div id="modal">
                    <Modal />
                </div> */}

                    <AuthRoute path="/" component={GreetingContainer} />

                    

                
                    <AuthRoute path="/" component={Modal} />
                    <AuthRoute path="/" component={LogInFormContainer} />
                    {/* <AuthRoute path="/" component={SignUpFormContainer} /> */}
                    
                    {/* <AuthRoute path="/" component={SignUpFormContainer} /> */}
                    <ProtectedRoute path="/users/:userId" component={ProfileContainer} />
                    
                
                {/* {this.checkSignIn()} */}
                {/* <button onClick={this.handleModalButton}  > Modal </button> */}


            </div>
        </div>
        )
    }
};

export default App;


