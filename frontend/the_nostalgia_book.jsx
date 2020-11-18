import React from "react";
import ReactDOM from "react-dom";
import {login, signup, logout} from "./util/session_api_util.js";

document.addEventListener("DOMContentLoaded", () => {
    window.login = login;
    window.signup = signup;
    window.logout = logout;
    window.user1 = { email: "random@gmail.com", password: "random", full_name: "christoph", birth_date: "12/3/45", gender: "male" }
    window.user2 = { email: "random200000@gmail.com", password: "random", full_name: "christoph2000", birth_date: "12/3/45", gender: "male" }
    const root = document.getElementById("root");
    ReactDOM.render(<h1>Welcome to TheNostalgiaBook</h1>, root);
});