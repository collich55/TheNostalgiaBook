import { connect } from 'react-redux';
import React from 'react';
import PostFormForProfile from "./post_form_for_profile.jsx";
import { Link } from 'react-router-dom';
import { createPost } from '../../actions/post_actions';
import { signup, login } from '../../actions/session_actions';
import SignUpForm from './post_form_for_profile';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = ({ errors, session }) => {

    return {
        errors: errors.posts,
        currentUserId: session.id,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (data) => dispatch(createPost(data)),
        closeModal: () => dispatch(closeModal())

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostFormForProfile);