import React from "react";
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import GreetingContainer from "./greeting/greeting_container";
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import profile_container from "./profile/profile_container";
import friendship_index_container from "./friendship/friendship_index_container";
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';



class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {show: false};
        this.handleModal = this.handleModal.bind(this);
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.handleModalButton = this.handleModalButton.bind(this);
        // this.checkSignIn = this.checkSignIn.bind(this);
    }


    showModal()  {
        this.setState({ show: true });
    };

    hideModal()  {
        this.setState({ show: false });
    };

    handleModal() {
        if (this.state.show) {
            return <AuthRoute path="/" component={SignUpFormContainer} />
        }
    }

    handleModalButton() {
        if (this.state.show) {
            this.hideModal();
        } else {
            this.showModal()
        }
    }

  

    render() {
        return (
        <div id="all">
            <header id="head">
                <h1>The Nostalgia Book</h1>
                
                
            </header>
            
                <AuthRoute path="/" component={LogInFormContainer} />
                <Route path="/" component={GreetingContainer}/>
                <AuthRoute path="/" component={SignUpFormContainer} />
                <ProtectedRoute path="/users/:userId" component={profile_container} />
                <Route path="/friendships" component={friendship_index_container} />
            
            {/* {this.checkSignIn()} */}
            {/* <button onClick={this.handleModalButton}  > Modal </button> */}


        </div>
        )
    }
};

export default App;


