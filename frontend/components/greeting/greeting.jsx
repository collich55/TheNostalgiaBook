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
            <Link to={`users/${currentUser.id}`} >Profile Page</Link>
            <br></br>
            <Link to={'/'}>Splash Page</Link>
        </hgroup>
    );

    if (currentUser) {
        return personalGreeting();
    } else {
        return (<header id="head">
            <div className="title-text-box">
                <h1 className="title-text">The Nostalgia Book</h1>
            </div>
            <div className="under-header-text-box">
                <h2 className="under-header-text" >Connect with friends and the world around you on The Nostalgia Book.</h2>
            </div>
        </header>)
    }

};


export default Greeting;
