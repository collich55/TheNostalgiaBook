import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/js/all.js';








const Bar = ({ currentUser, logout, users }) => {
    
    const bar = () => (
        
        <hgroup className="bar-group">
            <div id={"all-home"}>
                <i id={"home"}class="material-icons">home</i>
                <Link to={'/'} id={"homeB"}  >Home</Link>
            </div>
            <h2 className="bar-name"></h2>
            <div  id={"navright"}  >
                <a href={`#/users/${currentUser.id}`} replace id={"proB"} >{<img className="post-pro-pic" src={currentUser.profile_photo_link} alt="Pro Pic" />} {" " + currentUser.full_name}</a>
                <button id="proB-n" onClick={logout}><i class="fas fa-sign-out-alt"></i></button>
            </div>
            {/* currentUser.full_name */}
            
        </hgroup>
    );

    return bar();

};


export default Bar;