import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, login, update } from '../../actions/session_actions';
import UpdateForm from './update_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = ({ errors, session, entities: { users } }) => {
    return {
        errors: errors.session,
        formType: 'signup',
        navLink: <Link to="/login">log in</Link>,
        currentUser: users[session.id]
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(update(user)),
        processDemo: (user) => dispatch(login(user)),
        updateForm: (
            <button onClick={() => dispatch(openModal('update'))}>
                Update
            </button>
        ),
        closeModal: () => dispatch(closeModal())

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateForm);