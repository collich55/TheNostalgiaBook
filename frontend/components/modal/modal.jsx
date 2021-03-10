import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import PostFormContainer from '../post/post_form_container';
import CommentFormContainer from '../comment/comment_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
import UpdateFormContainer from '../session_form/update_form_container';

function Modal({modal, closeModal}) {
  
  if (!modal) {
    modal = null;
  } else if (typeof modal === "object" && modal[0] === "new-comment")  {
    component = <CommentFormContainer postId={modal[1]} />;
    return (
      <div className="sign-modal-background" onClick={closeModal}>
        <div className="sign-modal-child" onClick={e => e.stopPropagation()}>
          {component}
        </div>
      </div>
    );
  }
  
  let component;
  debugger
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
    case 'new-comment':
      component = <CommentFormContainer />;
      break;
    case 'update':
      component = <UpdateFormContainer />;
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
