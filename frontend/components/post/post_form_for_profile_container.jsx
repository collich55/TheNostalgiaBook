import { connect } from 'react-redux';
import React from 'react';
import PostForm from "./post_form.jsx";
import { Link } from 'react-router-dom';
import { createPost } from '../../actions/post_actions';
import { signup, login } from '../../actions/session_actions';
import SignUpForm from './post_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = ({ errors, session, ownProps }) => {

    return {
        errors: errors.session,
        currentUserId: session.id,
        userId = ownProps.match.params.userId   
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (data) => dispatch(createPost(data)),
        closeModal: () => dispatch(closeModal())

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);