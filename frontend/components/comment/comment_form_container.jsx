import { connect } from 'react-redux';
import React from 'react';
import CommentForm from "./comment_form.jsx";
import { Link } from 'react-router-dom';
import { createComment } from '../../actions/comment_actions';
import { signup, login } from '../../actions/session_actions';
import SignUpForm from './comment_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = ({ errors, session }) => {
    return {
        errors: errors.comments,
        currentUserId: session.id
        
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (data) => dispatch(createComment(data)),
        closeModal: () => dispatch(closeModal())

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);