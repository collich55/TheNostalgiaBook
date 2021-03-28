import { connect } from 'react-redux';
import React from 'react';
import EditCommentForm from "./comment_form_edit.jsx";
import { Link } from 'react-router-dom';
import { updateComment } from '../../actions/comment_actions';
import { signup, login } from '../../actions/session_actions';
import SignUpForm from './comment_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = ({ errors, session }) => {
    return {
        errors: errors.session,
        currentUserId: session.id
        
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (data) => dispatch(updateComment(data)),
        closeModal: () => dispatch(closeModal()),
        


    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditCommentForm);