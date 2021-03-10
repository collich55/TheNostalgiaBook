import CommentIndex from "./comment_index.jsx";
import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { fetchComments } from "../../actions/comment_actions.js";


const mapStateToProps = (state) => {
    return ({
        errors: state.errors.comments,
        comments: state.entities.comments,
        
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        fetchComments: () => dispatch(fetchComments())
        
    });
};

// deleteComment: commentId => dispatch(deleteComment(commentId))




export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CommentIndex);


