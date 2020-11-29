import React, { Component } from 'react';
import { Link } from 'react-router-dom';





const Bar = ({ currentUser, logout, users }) => {
    
    const bar = () => (
        <hgroup className="bar-group">
            <div id={"all-home"}>
                <i id={"home"}class="material-icons">home</i>
                <Link to={'/'} id={"homeB"}  >Home</Link>
            </div>
            <h2 className="bar-name">TheNostalgiaBook</h2>
            <div  id={"navright"}  >
                <a href={`#/users/${currentUser.id}`} replace  id={"proB"} >{currentUser.full_name}</a>
                <button className="bar-logout-button" onClick={logout}>Sign Out</button>
            </div>
            
        </hgroup>
    );

    return bar();

};


export default Bar;