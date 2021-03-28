import CommentIndex from "./comment_index.jsx";
import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { fetchComments, deleteComment } from "../../actions/comment_actions.js";
import { openModal, closeModal } from '../../actions/modal_actions';



const mapStateToProps = (state) => {
    return ({
        errors: state.errors.comments,
        comments: state.entities.comments,
        users: state.entities.users,
        
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        fetchComments: () => dispatch(fetchComments()),
        deleteComment: (commentId) => dispatch(deleteComment(commentId)),
        editComment: comment => dispatch(openModal(['edit-comment', comment])),
        
        
    });
};

// deleteComment: commentId => dispatch(deleteComment(commentId))




export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CommentIndex);


