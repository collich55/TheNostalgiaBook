import React, { Component } from 'react';
import { Link } from 'react-router-dom';






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
                <button id="proB-n" onClick={logout}><img className="post-pro-pic" src={"https://cdn.iconscout.com/icon/premium/png-512-thumb/arrow-small-right-2229239-1860175.png"} alt="Pro Pic" /></button>
            </div>
            {/* currentUser.full_name */}
            
        </hgroup>
    );

    return bar();

};


export default Bar;