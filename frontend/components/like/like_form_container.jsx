import { connect } from 'react-redux';
import React from 'react';
import LikeForm from "./like_form.jsx";
import { Link } from 'react-router-dom';
import { createLike } from '../../actions/like_actions';
import { signup, login } from '../../actions/session_actions';
import SignUpForm from './like_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = ({ errors, session }) => {
    return {
        errors: errors.session,
        currentUserId: session.id
        
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (data) => dispatch(createLike(data)),
        closeModal: () => dispatch(closeModal())

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LikeForm);