import PostIndex from "./post_index.jsx";
import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { fetchPosts } from "../actions/post_actions.js";


const mapStateToProps = (state) => {
    return ({
        errors: state.errors.posts,
        posts: Object.values(state.entities.posts),
        test: { body: "I'm just trying to do a simple test", author_id: 14 }
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        fetchPosts: () => dispatch(fetchPosts()),
        deletePost: postId => dispatch(deletePost(postId))
    });
};




export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostIndex);


