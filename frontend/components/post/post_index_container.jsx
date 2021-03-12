import PostIndex from "./post_index.jsx";
import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { fetchPosts } from "../../actions/post_actions.js";
import { fetchComments } from "../../actions/comment_actions.js";
import { fetchLikes } from "../../actions/like_actions.js";
import { fetchRequests } from "../../actions/friendship_actions.js";
import { fetchUsers } from "../../actions/user_actions.js";
import { openModal } from '../../actions/modal_actions';
import { createLike, deleteLike } from "../../actions/like_actions.js";


const mapStateToProps = (state) => {
    return ({
        errors: state.errors.posts,
        posts: state.entities.posts,
        currentUserId: state.session.id,
        likes: state.entities.likes,
        users: state.entities.users,
        currentUser: state.entities.users[state.session.id]
       
        
    });
};

const mapDispatchToProps = dispatch => {
    return ({

        newComment: postId => dispatch(openModal(['new-comment', postId])),
        newLike: (data) => dispatch(createLike(data)),
        deleteLike: (data) => dispatch(deleteLike(data)),

        fetchUsers: () => dispatch(fetchUsers()),
        fetchRequests: () => dispatch(fetchRequests()),
        fetchPosts: () => dispatch(fetchPosts()),
        fetchLikes: () => dispatch(fetchLikes()),
        fetchComments: () => dispatch(fetchComments()),
        
    });
};

// deletePost: postId => dispatch(deletePost(postId))




export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostIndex);


