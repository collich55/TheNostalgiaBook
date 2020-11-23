import React from "react";
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import GreetingContainer from "./greeting/greeting_container";
import {Route} from "react-router-dom";
import { AuthRoute } from '../util/route_util';
import PostIndexContainer from "./post_index_container";



class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {show: false};
        this.handleModal = this.handleModal.bind(this);
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.handleModalButton = this.handleModalButton.bind(this);
        this.checkSignIn = this.checkSignIn.bind(this);
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

    checkSignIn() {
        if (this.props.store.getState().session.id) {
            return <Route path="/" component={PostIndexContainer} />
        }
    }

    render() {
        return (
        <div id="all">
            <header id="head">
                <h1>The Nostalgia Book</h1>
                <GreetingContainer />
                
            </header>
            <AuthRoute path="/" component={LogInFormContainer} />
            {this.handleModal()}
            {this.checkSignIn()}
            <button onClick={this.handleModalButton}  > Modal </button>


        </div>
        )
    }
};

export default App;


