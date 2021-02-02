import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';
import { openModal, closeModal } from '../../actions/modal_actions';
import { showUser, fetchUsers } from "../../actions/user_actions.js";

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'login',
        navLink: < a href = "#/signup" className="button" > Create Account </a >
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
        otherForm: (
            
            <button id={"signup_button"} onClick={() => dispatch(openModal('signup'))}>
                Create Account
            </button>
            
        ),
        closeModal: () => dispatch(closeModal()),
        fetchUsers: () => dispatch(fetchUsers())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);

//< a href="#/signup" class="button" > Create Account </a >