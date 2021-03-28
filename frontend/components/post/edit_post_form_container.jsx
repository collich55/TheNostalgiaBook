import { connect } from 'react-redux';
import React from 'react';
import EditPostForm from "./post_form_edit.jsx";
import { Link } from 'react-router-dom';
import { updatePost } from '../../actions/post_actions';
import { signup, login } from '../../actions/session_actions';
import SignUpForm from './post_form_for_profile';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = ({ errors, session, ownProps }) => {

    return {
        errors: errors.session,
        currentUserId: session.id,
        userId: null
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (data) => dispatch(updatePost(data)),
        closeModal: () => dispatch(closeModal())

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditPostForm);