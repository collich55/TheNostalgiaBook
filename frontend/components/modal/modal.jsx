import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import PostFormContainer from '../post/post_form_container';
import EditPostFormContainer from '../post/edit_post_form_container';
import EditCommentFormContainer from '../comment/edit_comment_form_container';
import PostFormContainerForProfile from '../post/post_form_for_profile_container';
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
  } else if (typeof modal === "object" && modal[0] === "new-post-for-profile") {
    component = <PostFormContainerForProfile profileUser={modal[1]} />;
    return (
      <div className="sign-modal-background" onClick={closeModal}>
        <div className="sign-modal-child" onClick={e => e.stopPropagation()}>
          {component}
        </div>
      </div>
    );
  } else if (typeof modal === "object" && modal[0] === "edit-post") {
    component = <EditPostFormContainer post={modal[1]} />;
    return (
      <div className="sign-modal-background" onClick={closeModal}>
        <div className="sign-modal-child" onClick={e => e.stopPropagation()}>
          {component}
        </div>
      </div>
    );
  } else if (typeof modal === "object" && modal[0] === "edit-comment") {
    component = <EditCommentFormContainer comment={modal[1]} />;
    return (
      <div className="sign-modal-background" onClick={closeModal}>
        <div className="sign-modal-child" onClick={e => e.stopPropagation()}>
          {component}
        </div>
      </div>
    );
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
    case 'edit-post':
      component = <PostFormContainer />;
      break;
    case 'new-post-for-profile':
      component = <PostFormContainerForProfile />;
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
