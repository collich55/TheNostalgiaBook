import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/js/all.js';









const Bar = ({ currentUser, logout, users }) => {
    const git = <img alt="icon" src={"https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"} height={40} width={40}></img>;
    const link = <img alt="icon" src={"https://cdn.icon-icons.com/icons2/2201/PNG/512/linkedin_logo_square_icon_134016.png"} width={40} height={40} ></img>
    
    
    const bar = () => (
        
        <hgroup className="bar-group">
            <div id={"all-home"}>
                <Link to={'/'} id={"homeB"}>
                    <a href={`#/users/${currentUser.id}`} replace id={"proB"} >{<img className="post-pro-pic" src={"https://i.imgur.com/GlUKnPm.png"} alt="Pro Pic" />}</a>
                </Link>
            </div>


            <div className="professional-links">
                <div className="link-text-image">
                    <a href="https://github.com/collich55">
                        {git}
                    </a>
                </div>
                <div className="link-text-image">
                    <a href="https://www.linkedin.com/in/anthony-collichio-451b11103/">
                        {link}
                    </a>
                </div>
            </div>


            <div  id={"navright"}  >
                <a href={`#/users/${currentUser.id}`} replace id={"proB"} >{<img className="post-pro-pic" src={currentUser.profile_photo_link} alt="Pro Pic" />} {" " + currentUser.full_name}</a>
                <button id="proB-n" onClick={logout}><i class="fas fa-sign-out-alt"></i></button>
            </div>
        </hgroup>
    );

    return bar();

};


export default Bar;