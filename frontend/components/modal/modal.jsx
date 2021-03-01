import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import PostFormContainer from '../post/post_form_container';
import SignupFormContainer from '../session_form/signup_form_container';

function Modal({modal, closeModal}) {
  
  if (!modal) {
    modal = null;
  }
  let component;
  switch (modal) {
    // case 'login':
    //   
    //   component = <LoginFormContainer />;
    //   break;
    case 'signup':
      component = <SignupFormContainer />;
      break;
    case 'profile-pic':
      component = <SignupFormContainer />;
      break;
    case 'new-post':
      component = <PostFormContainer />;
      break;
    default:
      return null;
  }

  return (
    <div className="sign-modal-background" onClick={closeModal}>
      <div className="sign-modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
