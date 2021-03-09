import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout, users }) => {

    

    if (currentUser) {
        return null
    } else {
        return (
            <header id="head">
                <div className="title-text-box">
                    <h1 className="title-text">The Nostalgia Book</h1>
                </div>
                <div className="under-header-text-box">
                    <h2 className="under-header-text" >Connect with friends and the world around you on The Nostalgia Book.</h2>
                </div>
            </header>
        )
    }

};


export default Greeting;
