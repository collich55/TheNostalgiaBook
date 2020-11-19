// import React from "react";
// import ReactDOM from "react-dom";
// import configureStore from "./store/store";
import {login, signup, logout} from "./actions/session_actions.js";

// document.addEventListener("DOMContentLoaded", () => {

//     const store = configureStore();
//     const root = document.getElementById("root");
//     ReactDOM.render(<h1>Welcome to TheNostalgiaBook</h1>, root);
// });

import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";

document.addEventListener('DOMContentLoaded', () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            session: { id: window.currentUser.id },
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
});

    // we don't put the store directly on the window because
    // it can be confusing when debugging, sometimes giving you access to state
    // when you shouldn't
    // window.user1 = { email: "random_but_not@gmail.com", password: "random", full_name: "christoph", birth_date: "12/3/45", gender: "male" };    

    // window.getState = store.getState;
    // window.dispatch = store.dispatch; // just for testing!
    // window.login = login
    // window.signup = signup
    // window.logout = logout