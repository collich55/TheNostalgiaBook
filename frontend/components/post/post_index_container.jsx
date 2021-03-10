import PostIndex from "./post_index.jsx";
import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { fetchPosts } from "../../actions/post_actions.js";
import { openModal } from '../../actions/modal_actions';
import { createLike } from "../../actions/like_actions.js";


const mapStateToProps = (state) => {
    return ({
        errors: state.errors.posts,
        posts: state.entities.posts,
        currentUserId: state.session.id
        
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        fetchPosts: () => dispatch(fetchPosts()),
        newComment: postId => dispatch(openModal(['new-comment', postId])),
        newLike: (data) => dispatch(createLike(data))
        
    });
};

// deletePost: postId => dispatch(deletePost(postId))




export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostIndex);


