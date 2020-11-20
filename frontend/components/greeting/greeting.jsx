import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout, users }) => {
    const sessionLinks = () => (
        <nav className="login-signup">
            <Link to="/login">Sign In</Link>
      &nbsp;or&nbsp;
            <Link to="/signup">Sign up</Link>
        </nav>
    );
    const personalGreeting = () => (
        <hgroup className="header-group">
            <h2 className="header-name">Hi, {currentUser.full_name}!</h2>
            <button className="header-button" onClick={logout}>Sign Out</button>
        </hgroup>
    );

    if (currentUser) {
        return personalGreeting();
    } else {
        return sessionLinks();
    }

};


export default Greeting;
